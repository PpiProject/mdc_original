<template>
  <div class="deviceList">
    <header>
      <div class="pic">
        <p>
          <b>Страница добавления нового оборудования</b> <br />
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
          <li v-for="(device, index) in devices" :key="index"><a href="#">{{device.device_name}}</a></li>
        </ul>
        <button title="Добавить оборудование!">
          <router-link :to="{ name: 'deviceNew' }">+</router-link>
        </button>
      </div>
    </main>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "deviceList",
  data(){
    return {
      devices: []
    }
  },

  methods: {
    getAllDevice() {
      axios.get('http://localhost:3000/api/device/list').then((response) => {
        this.devices = response.data.device;
      })
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
