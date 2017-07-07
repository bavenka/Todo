import {ADD_FLASH_MESSAGE} from '../constants/ActionTypes'

let nextTodoId = 1;

const addFlashMessage = (messageType, text) => {
    return {
        type: ADD_FLASH_MESSAGE,
        id: nextTodoId++,
        messageType,
        text
    }
};

export default addFlashMessage;