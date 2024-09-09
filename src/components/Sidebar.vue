<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="@/assets/menu_MDC.png" alt=" " />
      <img src="@/assets/lupa_MDC.png" alt="" />
    </div>
    <nav class="nav">
      <ul>
        <li>
          <a @click.prevent="toggleSubmenu">Мониторинг</a>
          <ul v-if="submenuVisible" class="submenu">
            <li>
              <router-link :to="{ name: 'Realtime' }">Реальное время</router-link>
            </li>
            <li><router-link :to="{ name: 'jurnal' }">Журнал работ</router-link></li>
          </ul>
        </li>
        <li>
          <a @click.prevent="showMenuDevice">Оборудование</a>
          <ul v-if= "deviceVisible" class="submenu">
            <li><router-link :to="{ name: 'deviceList' }">Список оборудования</router-link></li>
          </ul>
        </li>
        <li>
          <router-link :to="{ name: 'Machinecard' }">Карточка станка</router-link>
        </li>
        <li><router-link :to="{ name: 'Report' }">Отчёты</router-link></li>
        <li><router-link :to="{ name: 'Settings' }">Настройки</router-link></li>
        <br />

<!--        <li><router-link :to="{ name: 'deviceNew' }">DeviceNew</router-link></li>-->
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      submenuVisible: false,
      deviceVisible:false
    };
  },
  methods: {
    toggleSubmenu() {
      this.submenuVisible = !this.submenuVisible;
    },

    showMenuDevice() {
      this.deviceVisible = !this.deviceVisible;
    }
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

a {
  cursor: pointer;
}

.sidebar {
  width: 100%;
  background: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.logo img {
  width: 25%;
  height: auto;
}

.nav ul {
  list-style: none;
  padding: 0;
}

.nav ul li {
  margin: 20px 0;
}

.nav ul li a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
}

.nav ul li a:hover {
  color: #007bff;
}

.submenu {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 20px;
}

.submenu li {
  margin: 10px 0;
}

.submenu li a {
  color: #666;
}

.submenu li a:hover {
  color: #007bff;
}
</style>
