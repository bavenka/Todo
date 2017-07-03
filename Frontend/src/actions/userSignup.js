import axios from 'axios'

const userSignup = (userData) => {
    return dispatch => {
        return axios.post("/", userData)
    }
};

export default userSignup