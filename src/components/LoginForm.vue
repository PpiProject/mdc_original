<template>
  <section>
    <img src="@/assets/lupa_MDC.png" alt="">
    <form>
      <p>
        <b> Авторизация</b>
      </p>
      <input type="text" id="login" v-model="userData.login" placeholder="Введите логин">
      <input type="text" id="password" v-model="userData.password" placeholder="Введите пароль">
      <div>
        <button @click="loginUser">Войти</button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
import {mapActions, mapState} from "vuex";

export default {
  name: "LoginForm",

  data(){
    return{
      userData: {
        login: '',
        password: ''
      }
    }
  },

  computed: {
    ...mapState('auth', ['auth'])
  },

  methods: {

    ...mapActions('auth', ['addUserData']),

    loginUser(e){
      e.preventDefault()
      axios.post('http://localhost:3000/api/users/auth', this.userData).then((response) => {
        console.log(response.data);
        this.$store.dispatch('auth/addUserData', response.data.findUser.user_id)
      });
    }
  }
}
</script>

<style scoped>
section {
  display: flex;

  background-color: #f8f9fa;
  height: 940px;
  align-items: center;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #bdbcbc;
  width: 30%;
  padding: 20px;
  gap: 10px;
  height: max-content;
  align-items: center;
}

form p {
  text-align: center;
}

input {
  width: 50%;
  height: 20px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid lightgray;
}

form button {
  width: max-content;
  margin-top: 20px;
  font-size: 16px;
  background-color: #0ab3b3;
  border: none;
  padding: 5px;
  color: white;
  border-right: 10px;
}

div {
  width: 100%;
  display: flex;
  justify-content: center;
}

img {
  margin-bottom: 100px;
  width: 100px;
  height: auto;
  margin-top: 10px;
}
</style>