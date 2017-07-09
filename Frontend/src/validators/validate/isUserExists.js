import {getUserByEmail, getUserByUsername} from '../../api/userApi'
import lodash from 'lodash'

async function checkUsernameExists(field, data) {

    let errors = {};
    let user = {};

    switch (field) {
        case 'email':
            try {
                user = await getUserByEmail(data);
                if (!lodash.isEmpty(user)) {
                    errors.email = 'There is user with such email.';
                }

            } catch (e) {
                throw e;
            }
            break;
        case 'username':
            try {
                user = await getUserByUsername(data);
                if (!lodash.isEmpty(user)) {
                    errors.username = 'There is user with such username.';
                }
            } catch (e) {
                throw e;
            }
    }
    return {
        errors,
        isUserExists: !lodash.isEmpty(errors)
    }
}

export default checkUsernameExists;
