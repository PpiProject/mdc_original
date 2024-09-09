<template>
  <div class="settings-panel">
    <div class="verx">
      <div class="top">
        <img src="@/assets/nastroiki_MDC.png" alt="" class="jj" />
        <p>
          <b>Настройки</b> <br />
          Данный блок предназначен для настроек пользователя
        </p>
      </div>
      <span>Пользователь:Admin</span>
    </div>
    <div class="tabs">
      <button @click="selectTab('settings')">
        <router-link to="/settings" style="text-decoration: none; color: black">
          Настройки подключения
        </router-link>
      </button>
      <button @click="selectTab('management')">
        <router-link to="/settingsPanel" style="text-decoration: none; color: black"
          >Управление станками
        </router-link>
      </button>
      <button @click="selectTab('planning')">
        <router-link to="/SettingsStr" style="text-decoration: none; color: black">
          Планирование</router-link
        >
      </button>
    </div>
    <div class="tab-content" v-if="selectedTab === 'planning'">
      <div class="form-group">
        <label>Изменить время смен</label>
        <input type="text" v-model="shiftTime" />
      </div>
      <div class="form-group">
        <label>Добавить приорететную дату</label>
        <input type="date" v-model="priorityDate" />
      </div>
      <div class="form-group">
        <label>Добавить выходные</label>
        <input type="text" v-model="weekend" />
      </div>
      <div class="form-group">
        <label>Изменить минимальный объём работы</label>
        <input type="number" v-model="minWorkVolume" />
      </div>
      <button class="btd" @click="applySettings">Применить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SettingsPanel",
  data() {
    return {
      selectedTab: "planning",
      shiftTime: "",
      priorityDate: "",
      weekend: "",
      minWorkVolume: "",
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
    applySettings() {
      // handle apply settings logic here
      console.log("Settings applied:", {
        shiftTime: this.shiftTime,
        priorityDate: this.priorityDate,
        weekend: this.weekend,
        minWorkVolume: this.minWorkVolume,
      });
    },
  },
};
</script>

<style>
.settings-panel {
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #ddd;
  width: 90%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin-left: 1%;
}

.tabs {
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(242, 239, 239);
  padding-top: 10px;
}

.tabs button {
  margin-right: 10px;
  margin: 1%;
  padding: 1%;
  border: none;
  background-color: rgb(225, 222, 222);
  border-radius: 5px;
  width: max-content;
}

.tab-content .form-group {
  margin-bottom: 10px;
}

.tab-content label {
  display: block;
  margin-bottom: 5px;
}

.tab-content input {
  width: 50%;
  padding: 5px;
}

.tab-content button {
  margin-top: 10px;
  padding: 10px 20px;
}

.verx {
  display: flex;
  justify-content: space-between;
}

.jj {
  width: 20%;
  height: auto;
}

.top {
  display: flex;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
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
  border: 1px solid rgb(226, 224, 224);
  cursor: pointer;
  border-radius: 4px;
}

.form-group button:hover {
  background: #0056b3;
}
</style>
