<template>
  <div class="real-time">
    <div class="filters">
      <label for="time-filter">Фильтры:</label>
      <select v-model="timeFilter">
        <option value="по времени">по времени</option>
      </select>
      <select v-model="equipmentGroup">
        <option value="по группе оборудования">по группе оборудования</option>
      </select>
    </div>
    <div class="charts">
      <div class="chart-header">
        <button @click="viewMode = 'table'" class="button_table">Таблица</button>
        <button @click="viewMode = 'line-chart'" class="button_line">Линейная диаграмма</button>
      </div>
      <div v-if="viewMode === 'table'">
        <table>
          <thead>
            <tr>
              <th>Оборудование</th>
              <th>Загрузка (%)</th>
              <th>Ошибки (%)</th>
              <th>Ожидание (%)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in chartData" :key="index">
              <td>{{ data.name }}</td>
              <td>{{ data.greenPercentage.toFixed(2) }}</td>
              <td>{{ data.redPercentage.toFixed(2) }}</td>
              <td>{{ data.grayPercentage.toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="viewMode === 'line-chart'" class="lin-diagram">
        <div class="status-container">
          <div
            v-for="(status, index) in equipmentStatuses"
            :key="index"
            class="status-box"
            :style="{ backgroundColor: status.color }"
          ></div>
        </div>
        <div class="chart">
          <div v-for="(data, index) in chartData" :key="index" class="bar-container">
            <span class="equipment-name">{{ data.name }}</span>
            <div class="bar">
              <div class="green" :style="{ width: data.greenPercentage + '%' }"></div>
              <div class="red" :style="{ width: data.redPercentage + '%' }"></div>
              <div class="gray" :style="{ width: data.grayPercentage + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeFilter: "по времени",
      equipmentGroup: "по группе оборудования",
      viewMode: "", // Режим отображения (таблица или линейная диаграмма)
      chartData: [],
      equipmentStatuses: [],
    };
  },
  mounted() {
    this.generateMockData();
    this.generateRealTimeStatus();
  },
  methods: {
    generateMockData() {
      this.chartData = Array.from({ length: 14 }, (_, i) => ({
        name: `Оборудование № ${i + 1}`,
        greenPercentage: Math.random() * 60 + 20, // Работа от 20% до 80%
        redPercentage: Math.random() * 20, // Ошибки до 20%
        grayPercentage: Math.random() * 10, // Ожидание до 10%
      }));
    },
    generateRealTimeStatus() {
      this.equipmentStatuses = Array.from({ length: 14 }, () => ({
        color: this.getRandomStatusColor(),
      }));
    },
    getRandomStatusColor() {
      const colors = ["#4CAF50", "#F44336", "#BDBDBD"]; // Зеленый, Красный, Серый
      return colors[Math.floor(Math.random() * colors.length)];
    },
  },
};
</script>
<style scoped>
.real-time {
  padding: 20px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 5px;
}

.filters {
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
}

.filters select {
  padding: 5px;
  font-size: 14px;
}

.charts {
  border-top: 1px solid #f8f6f6;
  padding-top: 20px;
}

.chart-header {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
.button_table {
  background-color: #0ab3b3;
  color: white;
}
.button_line {
  background-color: #0ab3b3;
  color: white;
}
button {
  border: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  width: max-content;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.lin-diagram {
  display: flex;
  padding-left: 100px;
  width: 100%;
}

.status-container {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  padding-right: 10px;
  border-right: 2px solid black;
  padding-top: 3px;
}

.status-box {
  width: 50px;
  height: 20px;
  margin-bottom: 11px;
}

.bar-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.equipment-name {
  width: 200px;
}

.bar {
  display: flex;
  height: 20px;
  width: 1000px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.green {
  background-color: #4caf50;
  width: 30%;
}

.red {
  background-color: #f44336;
  width: 20%;
}

.gray {
  background-color: #bdbdbd;
  width: 50%;
}
</style>
