<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="header_modal">
        <p>
          Редактирование оборудования
        </p>
        <button class="btn_close" @click="closeModal">X</button>
      </header>
      <form class="form_device">
        <div class="container_input">
          <label for="name_device">Наименование:</label>
          <input id="name_device" type="text" v-model="this.device_data.device_name">
          <label for="date_inspection">Дата поверки:</label>
          <input type="date" id="date_inspection" v-model="this.date_inspection">
          <label for="serial_number">Серийный номер:</label>
          <input type="text" id="serial_number" v-model="this.device_data.serial_number">
        </div>
        <div class="container_input">
          <label for="manufacturer">Производитель:</label>
          <input type="text" id="manufacturer" v-model="this.device_data.manufacturer">
          <label for="device_model">Модель:</label>
          <input type="text" id="device_model" v-model="this.device_data.device_model">
          <label for="description">Описание:</label>
          <input type="text" id="description" v-model="this.device_data.description">
        </div>
      </form>
      <div class="container_btn">
        <button class="edit_btn" @click="editDeviceById">Редактировать</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions} from "vuex/dist/vuex.mjs";

export default {
  name: "EditDeviceModal",
  props: ['id_device'],
  data() {
    return {
      device_data: {},
      date_inspection: ''
    }
  },

  methods: {
    ...mapActions('displayElements', ['state']),

    getDeviceById() {

      let formatDateForInput = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0'); // Добавляем ведущий 0
        const day = String(d.getDate()).padStart(2, '0'); // Добавляем ведущий 0

        return `${year}-${month}-${day}`;
      }

      axios.get(`http://localhost:3000/api/device/card/${this.id_device}`).then((response) => {
        let date = new Date(response.data.device.date_inspection)
        this.date_inspection = formatDateForInput(date);
        this.device_data = response.data.device;
      })
    },

    editDeviceById() {
      let edit_data = {
        device_name: this.device_data.device_name,
        date_inspection: this.device_data.date_inspection,
        serial_number: this.device_data.serial_number,
        manufacturer: this.device_data.manufacturer,
        device_model: this.device_data.device_model,
        description: this.device_data.description,
        device_type_id: this.device_data.device_type_id
      }

      axios.post(`http://localhost:3000/api/device/edit/${this.id_device}`, edit_data).then((response) => {
        this.closeModal()
      })
    },

    closeModal(){
      this.$store.dispatch('displayElements/changeVisibleEditDevice', false)
    }
  },

  beforeMount() {
    this.getDeviceById()
  }
}
</script>

<style scoped>

.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  width: 700px;
  height: 450px;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.header_modal p {
  margin: 1rem 0 0 10px;

}
header {
  display: flex;
  justify-content: space-between;
  height: 70px;
}
.btn_close {
  margin: 1rem 10px 0 0;
  width: 35px;
  height: 35px;
  border: none;
  background-color: #07b1b1;
  color: white;
  border-radius: 3px;
  float: right;
}

.form_device {
  display: flex;
  justify-content: space-around;
}

.container_input {
  display: flex;
  flex-direction: column;
}

.container_input label {
  margin-top: 5px;
}

.container_input input {
  margin-top: 1rem;
  width: 300px;
  height: 40px;
  border: 2px solid lightgrey;
}

.container_btn {
  text-align: center;
}

.edit_btn {
  margin-top: 40px;
  width: 180px;
  height: 45px;
  border: none;
  background-color: #07b1b1;
  color: white;
  border-radius: 3px;
}
</style>