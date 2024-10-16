<template>
  <div class="form_container">
    <div class="user_title">Добавление пользователя</div>

    <form class="reg_form">
      <div class="reg_item">
        <label for="last_name">Фамилия</label>
        <input type="text" id="last_name" v-model="userData.last_name">
        <label for="first_name">Имя</label>
        <input type="text" id="first_name" v-model="userData.first_name">
        <label for="sur_name">Отчество</label>
        <input type="text" id="sur_name" v-model="userData.sur_name">
        <label for="job_title">Должность</label>
        <input type="text" id="job_title" v-model="userData.position">
      </div>
      <div class="reg_item">
        <label for="login">Логин</label>
        <input type="text" id="login" v-model="userData.login">
        <label for="password">Пароль</label>
        <input type="password" id="password" v-model="userData.password">
        <label for="email">Почта</label>
        <input type="email" id="email" v-model="userData.email">
      </div>
      <div class="reg_item">
        <div v-for="(role, index) in roles" :key="role.role_id">
          <input
              type="checkbox"
              :id="'role_' + index"
              :value="role.role_id"
              v-model="selectedRoles">
          <label :for="'role_' + index">{{ role.role_name }}</label>
        </div>
      </div>
    </form>
    <div>
      <button class="save_btn" @click="addUser">Сохранить</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserAdd",

  data() {
    return {
      userData: {
        last_name: '',
        first_name: '',
        sur_name: '',
        login: '',
        password: '',
        email: '',
        position: ''
      },
      roles: [], // Список ролей
      selectedRoles: [] // Выбранные роли
    }
  },

  methods: {
    // Метод для получения ролей
    getRoles() {
      axios.get('http://localhost:3000/api/roles/list')
          .then(response => {
            this.roles = response.data.roles;
          })
          .catch(error => {
            console.error("Ошибка при получении ролей:", error);
          });
    },

    // Метод для добавления пользователя
    addUser() {
      const dataToSend = {
        ...this.userData,
        roles: this.selectedRoles // Добавляем выбранные роли
      };

      axios.post('http://localhost:3000/api/user/create', dataToSend)
          .then(response => {
            console.log("Пользователь успешно добавлен", response);
          })
          .catch(error => {
            console.error("Ошибка при добавлении пользователя", error);
          });
    }
  },

  beforeMount() {
    this.getRoles();
  }
}
</script>

<style scoped>
.form_container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user_title {
  margin-top: 40px;
  font-size: 20px;
}

.reg_form {
  margin-top: 50px;
  width: 100%;
  height: 500px; /* Изменено с фиксированной высоты */
  display: flex;
  justify-content: space-around;
  background-color: #f6f6f6;
}

.reg_item {
  display: flex;
  flex-direction: column;
}

.reg_item label {
  padding-top: 30px;
}

.reg_item input {
  margin-top: 30px;
  width: 300px;
  height: 25px;
  padding-left: 1rem;
  border: 1px solid gray;
  border-radius: 3px;
}

.save_btn {
  margin-top: 30px;
  width: 180px;
  height: 35px;
  font-size: 16px;
  color: white;
  background-color: #0ab3b3;
  border: none;
  border-radius: 3px;
}
</style>
