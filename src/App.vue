<template>
  <div id="app">
    <Sidebar v-if="!isLoginPage" />
    <div class="main-content">
      <Header v-if="!isLoginPage" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
export default {
  data() {
    return {
      inactivityTimeout: null, // Таймер бездействия
      logoutTime: 100
    };
  },
  name: 'App',
  components: {
    Sidebar,
    Header
  },
  computed: {
    // Получаем информацию о том, авторизован ли пользователь из Vuex
    isAuthenticated() {
      return this.$store.state.auth.auth;
    },
    isLoginPage() {
      return this.$route.name === 'LoginForm';
    }
  },

  watch: {
    // Слежение за состоянием авторизации
    isAuthenticated(newVal) {
      if (!newVal) {
        this.redirectToLogin();
      }
    }
  },

  methods: {
    // Метод для перенаправления на страницу авторизации
    redirectToLogin() {
      this.$router.replace({name: 'LoginForm'});
    }
  },
  resetInactivityTimeout() {
    if (this.inactivityTimeout) {
      clearTimeout(this.inactivityTimeout);
    }

    this.inactivityTimeout = setTimeout(() => {
      this.logoutUser();
    }, this.logoutTime);
  },

  // Глобальный логаут
  logoutUser() {
    this.$store.dispatch('auth/logout').then(() => {
      this.$router.replace({ name: 'LoginForm' }); // Перенаправляем на страницу логина
    });
  },

  // Обработчик событий активности
  activityListener() {
    this.resetInactivityTimeout();
  },
  mounted() {
    // Проверяем, авторизован ли пользователь при монтировании компонента
    if (!this.isAuthenticated) {
      this.redirectToLogin();
    }
    // Отслеживаем события активности
    window.addEventListener('mousemove', this.activityListener);
    window.addEventListener('keydown', this.activityListener);
    window.addEventListener('scroll', this.activityListener);

    // Сразу запускаем таймер для отслеживания бездействия
    this.resetInactivityTimeout();
  },
  beforeUnmount() {
    // Очищаем обработчики событий
    window.removeEventListener('mousemove', this.activityListener);
    window.removeEventListener('keydown', this.activityListener);
    window.removeEventListener('scroll', this.activityListener);

    // Очищаем таймер
    if (this.inactivityTimeout) {
      clearTimeout(this.inactivityTimeout);
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
#app {
  display: flex;
  width: 100%;
  font-family:  'Montserrat', sans-serif;
  font-size: 16px;
  overflow-x: hidden;
}
sidebar {
  width: 250px;
  background-color: #f8f9fa;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}
.main-content {
  padding: 0;
  width: 100%;
}
header {
  padding-right: 15px;
}
router-view {
  flex-grow: 1;
  padding: 20px;
}
</style>
