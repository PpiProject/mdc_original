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
          <li><a href="#">Оборудование №1</a></li>
          <li><a href="#">Оборудование №2</a></li>
          <li><a href="#">Оборудование №3</a></li>
          <li><a href="#">Оборудование №4</a></li>
          <li><a href="#">Оборудование №5</a></li>
          <li><a href="#">Оборудование №6</a></li>
          <li><a href="#">Оборудование №7</a></li>
          <li><a href="#">Оборудование №8</a></li>
        </ul>
        <button title="Добавить оборудование!">
          <router-link :to="{ name: 'deviceNew' }">+</router-link>
        </button>
      </div>
    </main>
  </div>
</template>

<script></script>
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
