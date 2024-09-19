<template>
  <div title="Назад" class="back">
    <routerLink :to="{name: 'SettingsStr'}">🠔</routerLink>
  </div>
  <div class="information">
    <div class="user_name">
      <div>
        <p><b>ФИО пользователя:</b></p>
        <p>Иванов Иван Иванович</p>
      </div>
    </div>
      <div class="job_title">
      <div>
        <p><b>Должность:</b></p>
        <p>Старший литейщик</p>
      </div>
    </div>
    <div class="user_login">
      <div>
        <p><b>Логин:</b></p>
        <p>Ivaniv</p>
      </div>
    </div>
    <div class="user_mail">
      <div>
        <p><b>Почта:</b></p>
        <p>Ivan@bk.com</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard"
}
</script>
<style scoped>
.information {
  background-color: #f2f2f2;
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 30px;
  margin-top: 20px;
}
a {
  text-decoration: none;
  background-color: #0ab3b3;
  color: white;
  padding: 5px;
  border-radius: 2px;
font-size: 20px;
}

</style>