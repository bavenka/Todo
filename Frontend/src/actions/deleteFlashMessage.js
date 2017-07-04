import {DELETE_FLASH_MESSAGE} from '../constants/ActionTypes'

const deleteFlashMessage = (id) => {
    return {
        type: DELETE_FLASH_MESSAGE,
        id
    }
};

export default deleteFlashMessage;