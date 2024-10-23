<template>
  <aside :class="['sidebar', { collapsed: isCollapsed }]">
    <div class="Menu">
      <img class="Menu-picture" src="@/assets/menu_MDC.png" alt="" @click="toggleSidebar" />
      <img v-if="!isCollapsed" class="Lupa-picture" src="@/assets/lupa_MDC.png" alt="" />
    </div>
    <nav class="content" v-if="!isCollapsed">
      <ul>
        <li>
          <a @click.prevent="toggleSubmenu('monitoring')">Мониторинг</a>
          <ul v-if="submenu.monitoring" class="submenu">
            <li>
              <router-link :to="{ name: 'realtime' }">Реальное время</router-link>
            </li>
            <li><router-link :to="{ name: 'jurnal' }">Журнал работ</router-link></li>
          </ul>
        </li>
        <li>
          <router-link :to="{ name: 'machinecard' }">Карточка станка</router-link>
        </li>
        <li><router-link :to="{ name: 'report' }">Отчёты</router-link></li>
        <li>
          <a @click.prevent="toggleSubmenu('settings')">Настройки</a>
          <ul v-if="submenu.settings" class="submenu">
            <li><router-link :to="{ name: 'Settings' }">Настройки подключения</router-link></li>
            <li><router-link :to="{ name: 'SettingsPanel' }">Управление станками</router-link></li>
            <li><router-link :to="{ name: 'SettingsStr' }">Пользователи</router-link></li>
            <li><router-link :to="{ name: 'ManageRoles' }">Управление ролями и разрешениями</router-link></li>
          </ul>
        </li>
        <li><router-link :to="{ name: 'DeviceList' }">Список оборудования</router-link></li>
     <s><li><router-link :to="{ name: 'WebSocketTest' }">WebSocket</router-link></li></s>
        <li><router-link :to="{name: 'DeviceReadingsTable'}">DeviceReadingsTable</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      submenu: {
        monitoring: false,
        settings: false
      },
      isCollapsed: false
    };
  },
  methods: {
    toggleSubmenu(menu) {
      this.submenu[menu] = !this.submenu[menu];
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 15%;
  padding: 30px;
  text-align: center;
  transition: width 0.3s ease;

}

.sidebar.collapsed {
  width: 2%;
  background-color: white;
}

.Menu {
  display: flex;
  justify-content: space-between;
  height: max-content;
}

img {
  width: 50px;
  height: auto;
  cursor: pointer;
}

.content ul {
  list-style: none;
  padding: 0;
}

.content ul li {
  margin: 20px 0;
}

.content ul li a {
  text-decoration: none;
  color: #333;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.submenu {
  list-style: none;
  padding: 0;
  margin: 10px 0 0 20px;
}

.submenu li {
  margin: 10px 0;
}

.logo .menu-picture:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
