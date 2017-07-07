import {getUserByEmail} from '../../api/userApi'
import lodash from 'lodash'

function checkUsernameExists(field, data) {

    let errors = {};
    let user = {};

    switch (field) {
        case 'email':
            try {
                user = getUserByEmail(data);
                if (!lodash.isNull(user)) {
                    errors.email = 'There is user with such email.';
                }

            } catch (e) {
                throw e;
            }
            break;
    }
    return {
        errors,
        isUserExists: !lodash.isEmpty(errors)
    }
}

export default checkUsernameExists;
