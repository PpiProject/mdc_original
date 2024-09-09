<template>
  <div class="report-component">
    <div class="header">
      <div class="verx">
        <img src="@/assets/othet_MDC.png" alt="" className="jj" />
        <p>
          <b> Отчёт</b> <br />
          Данный блок предназначен для просмотра отчётов всей работы
        </p>
      </div>
      <span>Пользователь:Admin</span>
    </div>
    <div class="filters">
      <div class="div1">
        <label
          >Тип станка:
          <select v-model="machineType">
            <option value="Лакокрасочный">Лакокрасочный</option>
            <option value="Токарный">Токарный</option>
            <option value="Сверильный">Сверильный</option>
          </select>
        </label>

        <label
          >Формат документа:
          <select v-model="documentFormat">
            <option value=".doc">.doc</option>
            <option value=".pdf">.pdf</option>
          </select>
        </label>
      </div>
      <div class="div2">
        <label className="pp"
          >Период: <input type="radio" v-model="period" value="Месяц" /> Месяц
          <input type="radio" v-model="period" value="Неделя" /> Неделя
          <input type="radio" v-model="period" value="Год" /> Год
          <input type="radio" v-model="period" value="День" /> День
        </label>

        <button @click="generateReport">Сформировать</button>
      </div>
    </div>

    <div class="chart">
      <div v-for="(data, index) in chartData" :key="index" class="bar-container">
        <div class="bar-label"></div>
        <div class="bar">
          <div class="green" :style="{ width: data.greenPercentage + '%' }"></div>
          <div class="red" :style="{ width: data.redPercentage + '%' }"></div>
          <div class="gray" :style="{ width: data.grayPercentage + '%' }"></div>
          <div class="blue" :style="{ width: data.bluePercentage + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      machineType: "Лакокрасочный",
      period: "Месяц",
      documentFormat: ".pdf",
      chartData: [],
    };
  },
  methods: {
    generateReport() {
      this.chartData = this.generateMockData();
    },
    generateMockData() {
      const machines = Array.from({ length: 10 }, (_, i) => ({
        greenPercentage: Math.random() * 60 + 20, // Время работы от 20% до 80%
        redPercentage: Math.random() * 20, // Ошибки до 20%
        grayPercentage: Math.random() * 10, // Время ожидания до 10%
        bluePercentage: Math.random() * 20, // Время настройки до 20%
      }));

      const normalizeData = machines.map((machine) => {
        const total =
          machine.greenPercentage +
          machine.redPercentage +
          machine.grayPercentage +
          machine.bluePercentage;
        return {
          greenPercentage: (machine.greenPercentage / total) * 100,
          redPercentage: (machine.redPercentage / total) * 100,
          grayPercentage: (machine.grayPercentage / total) * 100,
          bluePercentage: (machine.bluePercentage / total) * 100,
        };
      });

      return normalizeData;
    },
  },
};
</script>

<style scoped>
.report-component {
  padding: 20px;
  font-family: Arial, sans-serif;
  width: 100%;
  font-size: 16px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.verx {
  gap: 0px;
  width: 35%;
  height: max-content;
}
.div1 {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100px;
  gap: 40%;
}
.div2 {
  display: flex;
  flex-direction: column;
  flex-direction: column;
  width: 22%;
  gap: 35%;
}
.filters {
  display: flex;

  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
}

.filters label {
  font-size: 14px;
}

.filters select,
.filters input {
  margin-left: 5px;
}
.pp {
  border: 1px solid rgb(216, 215, 215);
  padding: 1%;
  border-radius: 10px;
  background-color: rgb(238, 236, 236);
}
.jj {
  width: 15%;
  height: auto;
}
.filters button {
  background-color: none;
  padding: 8px 16px;
  border: 0.5px solid darkgrey;
  border-radius: 5px;
  cursor: pointer;
  width: max-content;
  text-align: right;
}
.filters button:hover {
  background-color: #d2e2f3;
}

.chart {
  margin-top: 20px;
  width: 90%;
}

.bar-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.bar-label {
  width: 40px;
  height: 20px;
  background-color: #ccc;
  margin-right: 10px;
}

.bar {
  display: flex;
  height: 20px;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
}

.green {
  background-color: #4caf50;
}

.red {
  background-color: #f44336;
}

.gray {
  background-color: #bdbdbd;
}

.blue {
  background-color: #2196f3;
}
</style>
