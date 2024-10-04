<template>
  <div class="deviceList">
    <main>
      <div class="filter">
        <div class="button_add" >
          <router-link :to="{ name: 'deviceNew' }" title="Добавить оборудование!">Добавить оборудование</router-link>
        </div>
        <table>
          <thead>
          <tr>
            <th> Наименование:</th>
            <th>Модель:</th>
            <th>дата поверки:</th>
            <th>Производитель:</th>
            <th colspan="2"> </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(device, index) in devices" :key="index" >
            <td>
              <router-link :to="{name: 'device_card', query:{device_id: device.device_id}}">
                {{ device.device_name }}
              </router-link>
            </td>

            <td> {{device.device_model}}</td>
            <td>
              {{ formatDate(device.date_inspection) }}
            </td>
            <td>{{device.manufacturer}}</td>
            <td>
              <button
                  @click="getDeviceId(
                    device.device_id,
                    device.serial_number,
                    device.device_name,
                    device.serial_number,
                    device.device_model,
                    device.manufacturer)" class="button_edit">
                Редактировать</button>
            </td>
            <td>
              <button class="button_remove" @click="deleteDevice(device.device_id)">Удалить</button>
            </td>
          </tr>
          </tbody>
        </table>

      </div>
      <div v-if="this.showEdit">
        <EditDeviceModal
            :id_device="this.id_device"
        />
      </div>
    </main>
  </div>
</template>

<script>

import axios from "axios";
import {mapState, mapActions} from "vuex/dist/vuex.mjs";
import EditDeviceModal from "@/components/modal/EditDeviceModal";

export default {
  name: "deviceList",
  components: {EditDeviceModal},
  data() {
    return {
      devices: [],
      showEdit: '',
      id_device: '',
    }
  },

  computed: {
    ...mapState('device', ['state'], 'displayElements', ['state']),

    state() {
      return this.$store.state.displayElements.changeEditModal;
    },
  },

  watch: {
    state: function () {
      this.showEdit = this.$store.state.displayElements.changeEditModal;
    }
  },

  methods: {

    ...mapActions('device', ['allDevices', 'deleteDeviceInList'], 'displayElements', ['changeVisibleEditDevice']),

    getAllDevice() {

      axios.get('http://localhost:3000/api/device/list').then((response) => {
        this.devices = response.data.device;
        this.$store.dispatch('device/allDevices', this.devices)
      })
    },
    getDeviceId(device_id) {

      this.id_device = device_id
      this.$store.dispatch('displayElements/changeVisibleEditDevice', true)
      console.log(this.id_device)
    },

    formatDate(date) {

      const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      return formattedDate;
    },

    deleteDevice(device_id) {

      axios.delete(`http://localhost:3000/api/device/delete/${device_id}`).then((response) => {
        this.devices = this.devices.filter(element => element.device_id !== device_id)
      })
    }
  },

  beforeMount() {
    this.getAllDevice();
  }
}

</script>
<style scoped>
.button_add {
  margin-top: 20px;
  width: 100%;
  height: 50px;
}
.button_add a{
  background-color: #0ab3b3;
  color: white;
  border: none;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px;
float: right;
}
.deviceList {
  width: 100%;
}
main {
  display: flex;
  justify-content: center;
}

.filter {
  width: 96%;
  height: max-content;
  background-color: #f9f9f9;
  border: 1px solid #c4c8c8;

  display: flex;
  flex-direction: column;
  padding: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
text-align: center;
  background-color: white;
  margin-top: 50px;
}

table th,
table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 14px;
}

table th {
  background-color: #f9f9f9;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: black;
}

.filter ul {
  list-style-type: none;
  font-size: 16px;
}
.filter li {
  padding: 2%;
  width: max-content;
}

button {
  width: max-content;
margin-left: 15px;
  color: white;
}
.button_edit {
  background-color: #0ab3b3;
  border: none;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  cursor: pointer;
}
.button_remove{
  background-color: #f56d6d;
  height: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>
