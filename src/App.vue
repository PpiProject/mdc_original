<template>
  <div id="app">
    <Sidebar v-if="!isLoginPage" />
    <div class="main-content">
      <Header v-if="!isLoginPage" />
      <router-view />
    </div>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';

export default {
  data() {
    return {
      inactivityTimeout: null,
      logoutTime: 10000000000,
      errorMessage: '',
      username: '',
      password: ''
    };
  },
  name: 'App',
  components: {
    Sidebar,
    Header
  },
  computed: {

    isAuthenticated() {
      return this.$store.state.auth.auth;
    },
    isLoginPage() {
      return this.$route.name === 'LoginForm';
    }
  },

  watch: {
    isAuthenticated(newVal) {
      if (!newVal) {
        this.redirectToLogin();
      }
    }
  },

  methods: {
    // перенаправление на страницу авторизации
    redirectToLogin() {
      this.$router.replace({ name: 'LoginForm' });
    },

    // для сброса таймера неактивности
    resetInactivityTimeout() {
      if (this.inactivityTimeout) {
        clearTimeout(this.inactivityTimeout);
      }

      this.inactivityTimeout = setTimeout(() => {
        this.logoutUser();
      }, this.logoutTime);
    },

    // логаут
    logoutUser() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.replace({ name: 'LoginForm' });
      });
    },

    activityListener() {
      this.resetInactivityTimeout();
    },

    submitLogin() {
      // Очистка предыдущей ошибки
      this.errorMessage = '';

      // Отправка данных на сервер
      this.$axios.post('/api/login', {
        username: this.username,
        password: this.password
      })
          .then(response => {
            // Логика после успешной авторизации (например, редирект)
            this.$router.push({ name: 'HomePage' });
          })
          .catch(error => {
            // Обработка ошибки: 400 - неправильные данные для входа
            if (error.response && error.response.status === 400) {
              this.errorMessage = 'Неправильный логин или пароль.';
            } else {
              // Общая ошибка (если сервер недоступен и т.д.)
              this.errorMessage = 'Произошла ошибка. Попробуйте позже.';
            }
          });
    }
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
.error {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}
</style>
