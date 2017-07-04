import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from '../constants/ActionTypes'

const flashMessages = (state = [], action) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: action.id,
                    messageType: action.messageType,
                    text: action.text
                }
            ];
        case DELETE_FLASH_MESSAGE:
            return state.filter(flashMessage => flashMessage.id !== action.id);
        default:
            return state
    }
};

export default flashMessages