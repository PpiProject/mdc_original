import { createStore } from 'vuex'
import device from "@/store/device/device";
import displayElements from "@/store/displayElements/displayElements";
import auth from "@/store/auth/auth";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    device,
    displayElements,
    auth
  }
})
