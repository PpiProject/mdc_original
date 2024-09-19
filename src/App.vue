
<template>

  <div id="app">
    <Sidebar v-if="!isLoginRoute" />
    <div class="main-content">
      <Header v-if="!isLoginRoute" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Sidebar,
    Header
  },
  computed: {
    isLoginRoute() {
      return this.$route.name === 'LoginForm'; // Проверка, находитесь ли вы на странице авторизации
    }
  }
}
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
