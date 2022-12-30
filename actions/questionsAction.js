export const getAllQuiz = () => async (dispatch, getState) => {
    try {
        const data = await fetch("http://10.0.2.2:5000/questions")
        const datajson = await data.json();
        // console.log(datajson)
        dispatch({
            type: "get_allQuiz",
            payload: datajson
        })
        
    } catch (err) {
        dispatch({
            type: "error_quiz",
            payload: err
        })
    }
}

export const getQuiz = (id) => async (dispatch, getState) => {
    try {
        const data = await fetch(`http://10.0.2.2:5000/questions/${1}`)
        const datajson = await data.json();

        dispatch({
            type: "get_quiz",
            payload: datajson
        })
        
    } catch (err) {
        dispatch({
            type: "error_quiz",
            payload: err
        })
    }
}

export const resetQuiz = () => (dispatch, getState) => {
    dispatch({
        type: "reset_quiz"
    })
}