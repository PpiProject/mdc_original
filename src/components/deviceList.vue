<template>
  <div class="deviceList">
    <header>
      <div class="pic">
        <p>
          <b>Страница добавления нового оборудования</b> <br/>
          Эта страница предназначена для того то того то
        </p>
      </div>
      <div class="user-info">
        <span>Пользователь: Admin</span>
      </div>
    </header>
    <main>
      <div class="filter">
        <ul>
          <li v-for="(device, index) in devices" :key="index">
            <router-link :to="{name: 'device_card', query:{device_id: device.device_id}}">
              {{ device.device_name }}
            </router-link>
            <button
                @click="getDeviceId(
                    device.device_id,
                    device.serial_number,
                    device.device_name,
                    device.serial_number,
                    device.device_model,
                    device.manufacturer)">
              Редактировать</button>
            <button @click="deleteDevice(device.device_id)">Удалить</button>
          </li>
        </ul>
        <button title="Добавить оборудование!">
          <router-link :to="{ name: 'deviceNew' }">+</router-link>
        </button>
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
      device_name: '',
      device_type_id: '',
      date_inspection: '',
      serial_number: '',
      device_model: '',
      description: '',
      manufacturer: ''
    }
  },

  computed: {
    ...mapState('device', ['state'], 'displayElements', ['state']),

    state() {
      return this.$store.state.displayElements.changeEditModal;
    }
  },

  watch: {
    state: function () {
      this.showEdit = this.$store.state.displayElements.changeEditModal;
    }
  },

  methods: {

    ...mapActions('device', ['allDevices', 'changeModal'], 'displayElements', ['changeVisibleEditDevice']),

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


    deleteDevice(device_id) {
      axios.delete(`http://localhost:3000/api/device/delete/${device_id}`)
    }
  },

  beforeMount() {
    this.getAllDevice();
  }
}

</script>
<style>
.deviceList {
  width: 100%;
}

header {
  display: flex;
  justify-content: space-between;

  gap: 10px;
}

main {
  display: flex;
  justify-content: center;
}

.user-info {
  padding-right: 20px;
}

.filter {
  width: 96%;
  height: max-content;
  background-color: white;
  border: 1px solid #c4c8c8;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
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
  padding: 5%;
  width: max-content;
}

button {
  width: 60px;
}
</style>
