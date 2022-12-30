const initialState = {
    quizs: [],
    quiz: null,
    quizSuccess: false,
    quizError: false,
    message: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "get_allQuiz":
            return {
                ...state,
                quizs: action.payload,
                quizSuccess: true
            }
        case "get_quiz":
            return {
                ...state,
                quiz: action.payload,
                quizSuccess: true
            }
        case "error_quiz":
            return {
                ...state,
                quizError: false,
                message: action.payload
            }
        case "reset_quiz":
            return {
                ...state,
                quizError: false,
                quizSuccess: false,
                message: null
            }
        default:
            return state;
    }
}