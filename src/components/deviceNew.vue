<template>
  <div class="deviceNew">
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
      <main class="content">
        <form class="add_form" @submit.prevent="saveDevice">
          <label for="device_name">Название оборудования</label>
          <input type="text" id="device_name" v-model="formData.device_name" placeholder="Введите название оборудования" />
          <label>Серийный номер</label>
          <input type="text" v-model="formData.serial_number" placeholder="серийный номер" />
          <label>Производитель</label>
          <input type="text" v-model="formData.manufacturer" placeholder="производитель" />
          <label>Модель оборудования</label>
          <input type="text" v-model="formData.device_model" placeholder="12345" />
          <label>Описание</label>
          <input type="text" v-model="formData.description" placeholder="Описание оборудования" />
          <label>Тип оборудования:</label>
            <select name="type_device" v-model="formData.device_type_id">
              <option v-for="(type, index) in this.type_oborud" :key="index" :value=type.type_id> {{ type.name }}</option>
            </select>
          <label>Дата следующей поверки</label>
          <input type="date" v-model="formData.date_inspection" placeholder="Введите дату очередной поверки">
          <button class="btn_add">Сохранить</button>
        </form>
      </main>
    </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "deviceNew",
  data() {
    return {
      formData:{
        device_name: '',
        device_type_id: '',
        date_inspection: '',
        serial_number: '',
        device_model: '',
        description: '',
        manufacturer: ''
      },
      type_oborud: [
        {'type_id': '76f8bc4b-2fc2-4f79-ab3d-e722514ab383', 'name': 'Окрасочная камера'},
        {'type_id': 'e68e8110-bb28-4359-a0c8-24a1189f7e38', 'name': 'Сушильная камера'},
        {'type_id': 'ea13a11f-0fa9-4b3c-82e5-95b2e15b72c2', 'name': 'Лебедка'},
        {'type_id': 'c88aad5b-8853-42bb-aa9b-5b2c0a7a62d8', 'name': 'Видеокамера'}
      ]
    }
  },
  methods: {

    async saveDevice() {
      axios.post('http://localhost:3000/api/device/add', this.formData).then((response) => {
        router.push({name : 'deviceList'})
      })
    }
  }
}
</script>

<style scoped>
.deviceNew {
  width: 100%;
  height: 500px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  justify-content: space-between;

  gap: 10px;
}

.content {
  width: 94%;
  height: 600px;
  background-color: rgb(236, 233, 233);
  display: flex;
  justify-content: space-around;
}

.content input {
  width: 450px;
  height: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;
}

.content select{
  width: 450px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 10px;
}

.content label {
  float: left;
}

.add_form {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

button {
  width: max-content;
  font-size: 15px;
}

.btn_add {
  margin-top: 30px;
  width: 180px;
  height: 45px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 3px;
}
</style>
