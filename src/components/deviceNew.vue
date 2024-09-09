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
    <div class="con">
      <main className="content">
        <label for="">Введите имя оборудования:</label>
        <input type="добавить" />
        <div class="div1">
          Тип оборудования:
          <select name="" id="" style="width: max-content">
            <option value="">Оборудование 1</option>
            <option value="">Оборудование 2</option>
            <option value="">Оборудование 3</option>
            <option value="">Оборудование 4</option>
            <option value="">Оборудование 5</option>
          </select>
        </div>

        <button>добавить</button>
      </main>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.deviceNew {
  width: 100%;
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
  height: 200px;
  background-color: rgb(236, 233, 233);

  display: flex;
  width: 90%;
  justify-content: space-around;
}

.content input {
  width: max-content;
}

.con {
  display: flex;
  height: max-content;
  justify-content: center;
}

button {
  width: max-content;
  font-size: 15px;
}
</style>
