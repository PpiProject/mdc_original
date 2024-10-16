export default {

    addUserData(state, payload) {
        state.user_id = payload
    },
    SET_AUTH(state, isAuthenticated) {
        state.auth = isAuthenticated;
    },

    SET_USER(state, userData) {
        state.user = userData;
    }
}