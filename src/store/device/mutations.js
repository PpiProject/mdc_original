export default {

    allDevices(state, payload){
        state.devices = payload
    },

    changeModal(state, payload) {
        state.modal = payload
    }
}