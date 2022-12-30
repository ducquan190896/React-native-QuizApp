export const createAnswers = () => async (dispatch, getState) => {
    try {

        const answer = {
            score: 0,
            choices: []
        }

        const data = await fetch("http://10.0.2.2:5000/answers", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(answer)
        })

        const datajson = await data.json()

        dispatch({
            type: "create_answers",
            payload: datajson
        })


    } catch (err) {
        dispatch({
            type: "error_choice",
            payload: err
        })
    }
}

export const getAnswers = (id) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://10.0.2.2:5000/answers/${id}`)
        const datajson = await data.json();

        dispatch({
            type: "get_result",
            payload: datajson
        })


     } catch (err) {
        dispatch({
            type: "error_choice",
            payload: err
        })
    }
}

export const addAnswer = (answer) => async(dispatch, getState) => {
    try {
        const {result} = getState().ANSWERS
        if(result.choices.filter(choice => choice.questionId == answer.questionId).length == 0) {
            result.choices.push(answer)
            result.score = +answer.chosenOption == answer.correctOption ? result.score + 1 : result.score

            const data = await fetch(`http://10.0.2.2:5000/answers/${result.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(result)
            })
            const datajson = await data.json()

            dispatch({
                type: "add_choice",
                payload: datajson
            })
        } else {
            let previousAnswer = result.choices.filter(choice => choice.questionId == answer.questionId)[0]

            result.choices = result.choices.map(choice => choice.questionId == answer.questionId ? answer : choice)
           
            if(+previousAnswer.chosenOption == previousAnswer.correctOption) {
                result.score = +answer.chosenOption == answer.correctOption  ? result.score : result.score - 1;
            } else if(+previousAnswer.chosenOption != previousAnswer.correctOption) {
                result.score = +answer.chosenOption == answer.correctOption  ? result.score + 1 : result.score;
            }
            const data = await fetch(`http://10.0.2.2:5000/answers/${result.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(result)
            })
            const datajson = await data.json()

            dispatch({
                type: "update_choice",
                payload: datajson
            })
        }

     } catch (err) {
        dispatch({
            type: "error_choice",
            payload: err
        })
    }
}

export const resetAnswers = () => (dispatch, getState) => {
    dispatch({
        type: "reset_choice"
    })
}