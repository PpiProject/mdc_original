<template>
  <div class="settings-panel">
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
  background: #f9f9f9;
  border: 1px solid #ddd;
  margin-left: 1%;
}
.tab-content {
  padding: 20px;
}
.tab-content .form-group {
  margin-bottom: 5px;
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
  background-color: #0ab3b3;
  color: white;
  border: none;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 70%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group button {
  padding: 8px 16px;
  color: rgb(0, 0, 0);
  border: 1px solid rgb(226, 224, 224);
  cursor: pointer;
  border-radius: 4px;
}

.form-group button:hover {
  background: #0056b3;
}
</style>
