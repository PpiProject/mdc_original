<template>
  <main>
    <aside>
      <header class="header">
        <div class="header-title">
          <img src="@/assets/nastroiki_MDC.png" alt="" class="jj" />
          <p>
            <b>Настройки</b> <br />
            Данный блок предназначен для настройки пользователей
          </p>
        </div>

        <div class="user-info">
          <span>Пользователь: Admin</span>
        </div>
      </header>
    </aside>
    <section class="settings">
      <div class="settings-tabs">
        <button class="tab-button active">
          <router-link
            :to="{ name: 'Settings' }"
            style="text-decoration: none; color: black"
          >
            Настройки подключения
          </router-link>
        </button>
        <button class="tab-button">
          <router-link
            :to="{ name: 'settingsPanel' }"
            style="text-decoration: none; color: black"
            >Управление станками</router-link
          >
        </button>
        <button class="tab-button">
          <router-link
            :to="{ name: 'SettingsStr' }"
            style="text-decoration: none; color: black"
            >Планирование
          </router-link>
        </button>
      </div>
      <div class="settings-content">
        <div class="settings-sidebar">
          <ul>
            <li v-for="item in equipmentList" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="settings-main">
          <div class="form-group">
            <label>Изменить IP</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label>Изменить характеристики</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label>Добавить комментарий</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label>Добавить описание</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <button>Применить</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      equipmentList: [
        "Оборудование № 1",
        "Оборудование № 2",
        "Оборудование № 3",
        "Оборудование № 4",
        "Оборудование № 5",
        "Оборудование № 6",
        "Оборудование № 7",
        "Оборудование № 8",
        "Оборудование № 9",
        "Оборудование № 10",
        "Оборудование № 11",
        "Оборудование № 12",
        "Оборудование № 13",
        "Оборудование № 14",
      ],
    };
  },
};
</script>

<style>
main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
header {
  height: max-content;
}
aside {
  height: max-content;
}
.settings {
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
  padding: 20px;
  width: 100%;
}

.settings-tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tab-button {
  padding: 10px 20px;
  border: none;
  background: #e9e9e9;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1em;
  width: max-content;
}

.tab-button.active,
.tab-button:hover {
  background: #d4d4d4;
}

.settings-content {
  display: flex;
}

.settings-sidebar {
  width: 20%;
  border-right: 1px solid #ddd;
}

.settings-main {
  /* flex: 1; */
  padding: 2%;
  /* border: 1px solid blue ; */
  width: 100%;
}

.settings-sidebar ul {
  list-style: none;
  padding: 0;
}

.settings-sidebar ul li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.form-group {
  height: auto;
  margin: 1%;
  width: 100%;
  height: auto;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  width: 100%;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group button {
  padding: 8px 16px;
  /* background: #007bff; */
  color: rgb(0, 0, 0);
  border: 1px solid darkgray;
  cursor: pointer;
  border-radius: 4px;
}

.form-group button:hover {
  background: #0056b3;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}

.header-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-title h1 {
  margin: 0;
  font-size: 1.5em;
}

.header-title p {
  margin: 0;
  width: 100%;
}

.jj {
  width: 15%;
  height: auto;
}

.user-info {
  font-size: 0.9em;
  color: #666;
}

main {
  width: 77%;
  padding: 1%;
}
</style>
