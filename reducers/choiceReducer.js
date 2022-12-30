const initalState = {
    result : null,
    resultSuccess: false,
    resultError: false,
    message: null

}

export default (state = initalState, action) => {
    switch (action.type)  {
        case "get_result":
            return {
                ...state,
                result: action.payload,
                resultSuccess: true
            }
        case "add_choice":
           
            return {
                ...state,
                // result: {...state.result, choices: state.result.choices.push(action.payload), score: action.payload.isCorrect ? state.result.score++ : state.result.score},
                result: action.payload,
                resultSuccess: true
            }
        case "create_answers":
            return {
                ...state,
                result: action.payload,
                resultSuccess: true
            }
        case "update_choice":
            return {
                ...state,
                result: action.payload,
                resultSuccess: true
            }
        case "error_choice": 
            return {
                ...state,
                resultError: false,
                message: action.payload
            }
        case "reset_choice":
            return {
                ...state,
                resultError: false,
                resultSuccess: false,
                message: null
            }
        default:
            return state;
    }
}