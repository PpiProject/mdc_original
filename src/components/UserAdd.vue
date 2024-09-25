<template>
  <main>
    <section>
    <h2>Добавление пользователя:</h2>
    <hr>
    <div class="section">
      <div class="content">
        <label for="last_name">Фамилия</label>
        <input type="text" id="last_name" v-model="userData.last_name">
        <label for="first_name">Имя</label>
        <input type="text" id="first_name" v-model="userData.first_name">
        <label for="sur_name">Отчество</label>
        <input type="text" id="sur_name" v-model="userData.sur_name">
        <label for="job_title">Должность</label>
        <input type="text" id="job_title" v-model="userData.position">
        <label for="login">Логин</label>
        <input type="text" id="login" v-model="userData.login">
        <label for="password">Пароль</label>
        <input type="text" id="password" v-model="userData.password">
        <label for="email">Почта</label>
        <input type="text" id="email" v-model="userData.email">
      </div>
      <div class="footer">
        <button @click="addUser">Сохранить</button>
      </div>

    </div>

  </section>
  </main>

</template>

<script>
import axios from "axios";

export default {
  name: "UserAdd",

  data(){
    return{
      userData:{
        last_name: '',
        first_name: '',
        sur_name: '',
        login: '',
        password: '',
        email: '',
        position: ''
      }
    }
  },

  methods: {
    addUser(){
      console.log(this.userData
      )
      axios.post('http://localhost:3000/api/user/create', this.userData)
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}
section {
  width: 50%;
  height: 820px;
  margin: 20px;
  padding: 10px;
  border: 1px solid #f2f2f2;
  background-color: rgb(236, 233, 233);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
}
hr {
  width: 100%;
}
.section {
  font-size: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;

}
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  gap: 15px;
  align-items: center;
}
.content label {
  padding-left: 20px;
}
input {
  width: 60%;
  border-radius: 5px;
  border: 1px solid lightgray;
  height: 35px;
}

a {
 padding: 3px;
  margin: 20px;
  height: max-content;
  width: max-content;
  border: none;
  background-color: #0ab3b3;
  color: white;
  border-radius: 3px;
  text-decoration: none;
  font-size: 18px;
  padding: 10px;
}
.footer {
 display: flex;
  justify-content: end;
}
</style>