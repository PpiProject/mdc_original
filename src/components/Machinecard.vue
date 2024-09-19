<template>
  <div class="machine-card">
    <div class="filters">
      <label for="model">Модель:</label>
      <select id="model" v-model="selectedModel">
        <option value="Станок Рапида">Станок Рапида</option>
        <option value="Другой станок Рапида">Другой станок Рапида</option>
        <option value="Третий станок Рапида">Третий станок Рапида</option>
        <option value="Четвертый станок Рапида">Четвертый станок Рапида</option>
      </select>
      <label for="period">Период:</label>
      <input type="date" id="period" v-model="selectedDate" />
      <label for="colors">Количество цветов:</label>
      <select id="colors" v-model="selectedColors">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
    <div class="chart">
      <div class="chart-buttons">
        <button @click="toggleTableView">Таблица</button>
        <button @click="toggleChartVisibility">График</button>
        <button><router-link :to="{ name: 'Tablee' }">ТаблицаNew</router-link></button>
      </div>
    </div>
    <div v-if="isChartVisible">
      <LineChart
        v-if="isChartVisible"
        :chart-data="chartData"
        :width="800"
        :height="400"
      />
    </div>
    <TableView v-if="isTableViewVisible" :chart-data="chartData" />
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
import DataTable from "./DataTable.vue";
import TableView from "./TableView.vue";
export default {
  name: "MachineCard",
  components: {
    LineChart,
    DataTable,
    TableView,
  },
  data() {
    return {
      selectedModel: "Станок Рапида",
      selectedDate: new Date().toISOString().slice(0, 10),
      selectedColors: "1",
      chartData: [],
      isChartVisible: false,
      isTableViewVisible: false,
    };
  },
  methods: {
    toggleChartVisibility() {
      this.isChartVisible = !this.isChartVisible;
      if (this.isChartVisible && this.chartData.length === 0) {
        this.fetchChartData();
        this.isTableViewVisible = false;
      }
    },
    toggleTableView() {
      this.isTableViewVisible = !this.isTableViewVisible;
      this.isChartVisible = false; // Убираем график при отображении таблицы
    },
    fetchChartData() {
      const dates = [
        "2024-01-01",
        "2024-01-02",
        "2024-01-03",
        "2024-01-04",
        "2024-01-05",
        "2024-01-06",
      ];
      this.chartData = dates.map((date, index) => ({
        date: new Date(date),
        value: [5, 10, 5, 2, 20, 30][index],
      }));
    },
  },
  watch: {
    selectedModel(newVal, oldVal) {
      if (newVal !== oldVal) this.fetchChartData();
    },
    selectedDate(newVal, oldVal) {
      if (newVal !== oldVal) this.fetchChartData();
    },
    selectedColors(newVal, oldVal) {
      if (newVal !== oldVal) this.fetchChartData();
    },
  },
};
</script>

<style scoped>
.machine-card {
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 5px;
}

.machine-card h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.machine-card p {
  font-size: 16px;
  margin-bottom: 20px;
}

.filters {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.filters label {
  font-size: 14px;
  margin-right: 5px;
}

.filters select,
.filters input[type="date"] {
  padding: 5px;
  font-size: 14px;
}

.chart {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

.chart-buttons {
  display: flex;
  justify-content: space-around;
  gap: 10px;
  margin-bottom: 20px;
}

.chart-buttons button {
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
button {
  width: max-content;
  color: white;
  background-color: #0ab3b3;
  border: none;
}
a {
  text-decoration: none;
  color: white;
  background-color: #0ab3b3;
}
</style>
