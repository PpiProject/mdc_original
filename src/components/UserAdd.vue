<template>
  <main>
    <section>
    <h2>Добавление пользователя:</h2>
    <hr>
    <div class="section">
      <div class="content">
        <label for="name">ФИО</label>
        <input type="text" id="name">
        <label for="job_title">Должность</label>
        <input type="text" id="job_title">
        <label for="login">Логин</label>
        <input type="text" id="login">
        <label for="password">Пароль</label>
        <input type="text" id="password">
        <label for="email">Почта</label>
        <input type="text" id="email">
      </div>
      <div class="footer">
        <router-link :to="{name:'SettingsStr'}">Сохранить</router-link>
      </div>

    </div>

  </section>
  </main>

</template>

<script>
export default {
  name: "UserAdd"
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
}
section {
  width: 50%;
  height: 650px;
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