import * as userApi from '../api/userApi'
import {LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE} from '../constants/ActionTypes'

export default function authorizeUser(identifier, password) {
    return async dispatch => {
        function onSuccess(success) {
            dispatch({type: LOGIN_USER_SUCCESS, payload: success});
            return success;
        }

        function onError(error) {
            dispatch({type: LOGIN_USER_FAILURE, error});
            return error;
        }

        try {
            const jwt = await userApi.getToken(identifier, password);
            localStorage.setItem('jwt',jwt);
            return onSuccess(jwt);
        } catch (error) {
            onError(error);
            throw error;
        }
    }
}