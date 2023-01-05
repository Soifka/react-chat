import CONSTANTS from '../constants';
const { ACTIONS } = CONSTANTS;

export function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.DATA_LOAD_SUCCESS: {
            const {data: {comments}} = action;
            return {
                ...state,
                messages: comments
            }
        }
        case ACTIONS.DATA_LOAD_ERROR: {
            return {
                ...state,
                error: action.error
            }
        }
        case ACTIONS.ADD_NEW_MESSAGE: {
            const {data} = action;
            const newArrayMessages = [
                ...state.messages,
                data
            ]
            return {
                ...state,
                messages: newArrayMessages
            }
        }
        default: return state;
    }
}