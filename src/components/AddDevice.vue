<template>
  <form @submit.prevent="saveDevice">
    <input type="text" v-model="formData.device_name" placeholder="Введите название оборудования">
    <select name="type_device" v-model="formData.device_type_id">
      <option v-for="(type, index) in this.type_oborud" :key="index" :value=type.type_id> {{ type.name }}</option>
    </select>
    <input type="text" v-model="formData.serial_number" placeholder="серийный номер">
    <input type="date" v-model="formData.date_inspection" placeholder="Введите дату очередной поверки">
    <button>Сохранить оборудование</button>
  </form>

</template>

<script>
import axios from "axios";

export default {
  name: "AddDevice",
  data() {
    return {
      formData:{
        device_name: '',
        device_type_id: '',
        date_inspection: '',
        serial_number: ''
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
        console.log(response.data)
      })
    }
  }
}
</script>

<style scoped>

</style>