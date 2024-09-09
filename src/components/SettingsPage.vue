<template>
  <div class="content">
    <header class="header">
      <div class="header-title">
      
        <h1>Настройки</h1>
        <p>Данный блок предназначен для настройки пользователей</p>
      </div>
      <div class="user-info">
        <span>Пользователь: Admin</span>
      </div>
    </header>
    <Settings />
  </div>
</template>

<script>
import Settings from '../components/Settings.vue';

export default {
  components: {
    Settings,
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}
.content {
  flex: 1;
  padding: 20px;
  background: #fff;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-title h1 {
  margin: 0;
  font-size: 1.5em;
}

.header-title p {
  margin: 0;
  color: #666;
}

.user-info {
  font-size: 0.9em;
  color: #666;
}
</style>
                              