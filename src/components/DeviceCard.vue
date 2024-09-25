<template>
<div title="Назад" class="back">
    <routerLink :to="{name: 'DeviceList'}">🠔</routerLink>
  </div>
  <hr>
  <div class="information">
    <div class="name_date">
      <div>
        <p><b>Наименование:</b></p>
        <p>{{this.data_device.device_name}}</p>
      </div>
      <div>
        <p><b>Дата поверки:</b></p>
        <p>{{this.date_inspection}}</p>
      </div>
    </div>

    <div class="serial_manufacturer">
      <div>
        <p><b>Серийный номер:</b></p>
        <p>{{this.data_device.serial_number}}</p>
      </div>
      <div>
        <p><b>Производитель:</b></p>
        <p>{{this.data_device.manufacturer}}</p>
      </div>
    </div>

    <div class="model_type">
      <div>
        <p><b>Модель:</b></p>
        <p>{{this.data_device.device_model}}</p>
      </div>
      <div>
        <p><b>Тип оборудования:</b></p>
        <p>ТУТ БУДЕТ ТИП</p>
      </div>
    </div>

    <div class="description">
      <p><b>Описание:</b></p>
      <p>{{this.data_device.description}}</p>
    </div>
  </div>
  <hr class="line">
  <div class="analyze">
    <p>Статистика оборудования </p>
    <p>НЕТ ДАННЫХ...</p>
  </div>
</template>

<script>
import axios from "axios";
import translateMonth from "@/utils/translateMonth";

export default {
  name: "DeviceCard",
  data(){
    return{
      data_device: {},
      device_id: this.$route.query.device_id,
      date_inspection: ''
    }
  },
  methods:{
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
p {
  word-wrap: break-word;
  width: 300px;
}
.analyze {
  text-align: center;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
}
.line {
  margin-top: 50px;
}
</style>