export default {

    allDevices({commit}, payload){
        commit('allDevices', payload)
    },

    changeModal({commit}, payload) {
      commit('changeModal', payload)
    }
}