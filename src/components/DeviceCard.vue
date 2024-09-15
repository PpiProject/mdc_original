<!--
Петя, это карточка оборудования. Я соединил фронт с бэком тут.
Нужно привести к общему виду платформы. Сделай пожалуйста. Скорее всего в первую очередь.
После того как все сделаешь, убери этот коммент, он не для продакшена.
-->
<template>
  <div>
    <div>
      <p>Наименование:</p>
      <p>{{this.data_device.device_name}}</p>
    </div>
    <div>
      <p>Дата поверки:</p>
      <p>{{this.date_inspection}}</p>
    </div>
    <div>
      <p>Серийный номер:</p>
      <p>{{this.data_device.serial_number}}</p>
    </div>
    <div>
      <p>Производитель:</p>
      <p>{{this.data_device.manufacturer}}</p>
    </div>
    <div>
      <p>Модель:</p>
      <p>{{this.data_device.device_model}}</p>
    </div>
    <div>
      <p>Описание:</p>
      <p>{{this.data_device.description}}</p>
    </div>
    <div></div>
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

        console.log(response.data.device)
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

</style>