<template>
  <main>
    <section class="settings">
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
          <button class="but_cal">
         <s><router-link :to="{ name: 'calendar' }">КАЛЕНДАРЬ</router-link></s>
          </button>
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

<style scoped>
main {
  display: flex;
  width: 98%;
  padding: 10px;
}
.settings {
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
  padding: 20px;
  width: 100%;
}

.settings-content {
  display: flex;
  width: 100%;
}

.settings-main {
  padding: 10px;
  width: 100%;
}

.settings-sidebar ul {
  list-style: none;
  padding: 0;
  width: max-content;
}

.settings-sidebar ul li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.form-group {
  height: auto;
  margin: 1%;
  width: 100%;
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
  background-color: #0ab3b3;
  padding: 8px 16px;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 20px;
}
a {
  text-decoration: none;
  color: white;
}
.header-title h1 {
  margin: 0;
  font-size: 1.5em;
}

.header-title p {
  margin: 0;
  width: 100%;
}

</style>
