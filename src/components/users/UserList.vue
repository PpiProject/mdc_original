<template>
  <section>
        <div class="User_content">
          <div class="button_add">
            <router-link :to="{name:'UserAdd'}" title="Добавить пользователя">Добавить пользователя</router-link>
          </div>
          <table>
            <thead>
            <tr>
              <th> Пользователи:</th>
              <th>ФИО:</th>
              <th>Права доступа:</th>
              <th>Логин</th>
              <th colspan="2"> </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user_item, index) in this.userList" :key="index">
              <td>
                Пользователь
              </td>
              <td>{{user_item.last_name}} {{user_item.first_name}} {{user_item.sur_name}}</td>
              <td>{{user_item.position}}</td>
              <td>
                <button @click="getUserId(user_item.user_id)" class="button_edit" title="Редактировать">Редактировать</button>
              </td>
              <td>
                <button @click="deleteUser(user_item.user_id)" class="button_remove" title="Удалить">Удалить</button>
              </td>
            </tr>
            </tbody>
          </table>
<!--          <a class="logout">Выйти из аккаунта</a>-->
      </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "UserList",

  data(){
    return{
      userList: []
    }
  },
 methods: {

    getAllUsers(){
      axios.get('http://localhost:3000/api/users/list').then((response) => {
        console.log(response.data.users)
        this.userList = response.data.users;
      })
    },

   deleteUser(user_id) {
     console.log(user_id)
     axios.post(`http://localhost:3000/api/users/delete/${user_id}`).then((response) => {
       this.userList = this.userList.filter(element => element.user_id !== user_id);
     })
   },

   getUserId (user_id){
     console.log(user_id);
   }
 },

  beforeMount() {
    this.getAllUsers();
  }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
}
.User_content {
  background: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 96%;
}
.button_add {
  margin-top: 10px;
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
table {
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: white;
  margin-top: 50px;
}

table th,
table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 14px;
}

table th {
  background-color: #f9f9f9;
}
h2 {
  margin-top: 0;
  font-size: 1.2em;
}

ul {
  text-decoration: none;
  list-style: none;
 padding: 20px;
  width: max-content;
}
li {
  padding: 10px;
}
a {
  text-decoration: none;
  color:black;
}
.button_edit {
  background-color: #0ab3b3;
  border: none;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  padding: 5px;
}
.button_remove{
  background-color: #f56d6d;
  height: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  padding: 5px;
}
.logout {
  display: block;
  text-align: left;
  color: black;
  text-decoration: none;
}

.logout:hover {
  text-decoration: underline;
}

</style>
