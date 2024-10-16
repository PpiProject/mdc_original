const actions = {
    addUserData({ commit }, payload) {
        commit('addUserData', payload);
    },

    logout({ commit }) {
        return new Promise((resolve) => {
            commit('SET_AUTH', false);  // Обнуляем статус авторизации
            commit('SET_USER', null);   // Очищаем данные пользователя

            // Могут быть добавлены другие действия по очистке сессии

            resolve();
        });
    }
};

export default actions;
