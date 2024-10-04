<template>
  <div title="Назад" class="back">
    <routerLink :to="{name: 'DeviceList'}">🠔</routerLink>
  </div>
  <hr>
  <div class="information">
    <div class="name_date">
      <div>
        <p><b>Наименование:</b></p>
        <p>{{ this.data_device.device_name }}</p>
      </div>
      <div>
        <p><b>Дата поверки:</b></p>
        <p>{{ this.date_inspection }}</p>
      </div>
    </div>

    <div class="serial_manufacturer">
      <div>
        <p><b>Серийный номер:</b></p>
        <p>{{ this.data_device.serial_number }}</p>
      </div>
      <div>
        <p><b>Производитель:</b></p>
        <p>{{ this.data_device.manufacturer }}</p>
      </div>
    </div>

    <div class="model_type">
      <div>
        <p><b>Модель:</b></p>
        <p>{{ this.data_device.device_model }}</p>
      </div>
      <div>
        <p><b>Тип оборудования:</b></p>
        <p>ТУТ БУДЕТ ТИП</p>
      </div>
    </div>

    <div class="description">
      <p><b>Описание:</b></p>
      <p>{{ this.data_device.description }}</p>
    </div>
  </div>
  <hr class="line">
  <div class="analyze">
    <div class="analyze_title">Статистика оборудования</div>
    <div class="filter_container">
      <div class="filter_title">Фильтр:</div>
      <div class="vision_title">Виды предоставления отчета:</div>

    </div>
  </div>
  <div class="inputs_container">
    <div class="dates_inputs">
      <p>Период с</p>
      <input class="date_input" type="date">
    </div>
    <div class="dates_inputs">
      <p>по</p>
      <input class="date_input" type="date">
    </div>
    <div class="chart-buttons">
      <button>Таблица</button>
      <button>График</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import translateMonth from "@/utils/translateMonth";

export default {
  name: "DeviceCard",
  data() {
    return {
      data_device: {},
      device_id: this.$route.query.device_id,
      date_inspection: ''
    }
  },
  methods: {
    getDataDevice() {

      axios.get(`http://localhost:3000/api/device/card/${this.device_id}`).then((response) => {

        this.data_device = response.data.device
        let date = new Date(response.data.device.date_inspection)
        let month = translateMonth((date.getMonth() + 1));
        this.date_inspection = `${date.getDate()} ${month} ${date.getFullYear()} г.`;
      })
    }
  },
  beforeMount() {
    this.getDataDevice()
  }
}
</script>

<style scoped>
a {
  font-size: 25px;
  border-radius: 5px;
  border: none;
  background-color: #0ab3b3;
  color: white;
  width: 40px;
  text-decoration: none;
  display: flex;
  justify-content: center;
}

.back {
  width: 70px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.information {
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: space-around;
}

.line {
  margin-top: 50px;
}

.analyze {
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
}

.analyze_title {
  word-wrap: break-word;
  width: 300px;
}

.filter_container {
  margin-top: 50px;
  width: 100%;
  height: 50px;
  display: flex;
}

.filter_title {
  margin-left: 350px;
}

.vision_title {
  margin-left: 600px;
}

.inputs_container {
  display: flex;
  margin-left: 150px;
  align-items: center;
}

.dates_inputs {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.date_input {
  margin-left: 30px;
  padding-left: 1rem;
  width: 120px;
  display: flex;
  height: 30px;
  align-items: center;
}

.date_input input {
  width: 100px;
}

.chart-buttons {
  margin-left: 350px;
  width: 400px;
  display: flex;
  justify-content: space-around;
}

.chart-buttons button {
  width: 150px;
  height: 35px;
  background-color: #0ab3b3;
  color: white;
  border: none;
  border-radius: 3px;
}
</style>