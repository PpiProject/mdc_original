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
              <th colspan="2"> </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                Пользователь
              </td>
              <td>Иванов Иван Иванович</td>
              <td>Администратор</td>
              <td>
                <a href="#" @click="getUserId()" class="button_edit" title="Редактировать">Редактировать</a>
              </td>
              <td>
                <a href="#" @click="deleteUser()" class="button_remove" title="Удалить">Удалить</a>
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
  name: "SettingsStr",

 methods: {
   deleteUser() {

   },
   getUserId (){

   }
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
