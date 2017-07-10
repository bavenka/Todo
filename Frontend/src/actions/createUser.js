import {CREATE_USER, ERROR_GENERATED} from '../constants/ActionTypes'
import * as userApi from '../api/userApi'


export default function createUser(data) {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({type: CREATE_USER, payload: success});
            return success;
        }

        function onError(error) {
            dispatch({type: ERROR_GENERATED, error});
            return error;
        }

        try {
            const response = await userApi.saveUser(data);
            return onSuccess(response);
        } catch (error) {
            onError(error);
            throw error;
        }
    }
}