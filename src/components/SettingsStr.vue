<template>
  <main className="content">
    <header className="header">
      <div className="header-title">
        <img src="@/assets/nastroiki_MDC.png" alt="" className="ww" />

        <p>
          <b>Настройки</b> <br />
          Данный блок предназначен для настройки пользователя
        </p>
      </div>
      <div className="user-info">
        <span>Пользователь: Admin</span>
      </div>
    </header>
    <section className="settings">
      <div className="settings-tabs">
        <button className="tab-button" @click="selectTab('settings')">
          <router-link to="/Settings" style="text-decoration: none; color: black"
            >Настройки подключения</router-link
          >
        </button>
        <button className="tab-button active" @click="selectTab('settings')">
          <router-link to="/settingsPanel" style="text-decoration: none; color: black"
            >Управление станками
          </router-link>
        </button>
        <button className="tab-button" @click="selectTab('settings')">
          <router-link to="/SettingsStr" style="text-decoration: none; color: black">
            Планирование
          </router-link>
        </button>
      </div>
      <div className="settings-content">
        <div className="settings-section">
          <h2>Настройки пользователей:</h2>
          <form>
            <div className="form-group">
              <label for="change-login">Изменить логин</label>
              <input type="text" id="change-login" />

              <label for="change-password">Изменить пароль</label> <br />
              <input type="password" id="change-password" />
            </div>
            <div className="form-group">
              <label for="add-user">Добавить пользователя</label>
              <button type="button" id="add-user">Добавить</button>
            </div>
          </form>
          <a href="#" className="logout">Выйти из аккаунта</a>
        </div>
        <div className="settings-section">
          <h2>Настройки станков:</h2>
          <form>
            <div className="form-group">
              <label for="add-equipment">Добавить оборудование</label>
              <input style="width: 50%; margin-right: 10%" type="text" name="" id="" />
              <button type="button" id="add-equipment">Добавить</button>
            </div>
            <div className="form-group">
              <label for="configure-ports">Настроить порты</label>
              <input style="width: 50%; margin-right: 10%" type="text" />
              <button type="button" id="configure-ports">Настройка</button>
            </div>
            <div className="form-group">
              <label for="remove-equipment">Удалить оборудование</label>
              <input style="width: 50%; margin-right: 10%" type="text" name="" id="" />
              <button type="button" id="remove-equipment">Удалить</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script></script>

<style scoped>
.content {
  flex: 1;
  padding: 20px;
  background: #fff;

  height: max-content;
}

.header {
  display: flex;
  justify-content: space-between;
}

.user-info {
  font-size: 0.9em;
  color: #666;
}

.settings {
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #f9f9f9;
  padding: 20px;
}

.settings-tabs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.tab-button {
  padding: 10px 20px;
  border: none;
  /* background: #e9e9e9; */
  cursor: pointer;
  border-radius: 4px;
  font-size: 1em;
  width: 20%;
}

.settings-content {
  display: flex;
  justify-content: space-between;
}

.settings-section {
  width: 48%;
  background: #fff;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.settings-section h2 {
  margin-top: 0;
  font-size: 1.2em;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 40%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group button {
  padding: 8px 16px;
  background: none;
  color: rgb(0, 0, 0);
  border: 1px solid darkgray;
  cursor: pointer;
  border-radius: 4px;
  width: max-content;
}

.logout {
  display: block;
  margin-top: 10%;
  text-align: left;
  color: #000000;
  text-decoration: none;
}

.logout:hover {
  text-decoration: underline;
}

.logo {
  display: flex;
  justify-content: space-between;
}

.ww {
  width: 15%;
  height: 40%;
}

.topmenu > li {
  /* display: inline-block; */
  position: relative;
}

.topmenu > li > a {
  position: relative;
  padding: 10px 15px;
  /* font-family: 'Kaushan Script', cursive; */
  /* font-size: 1.5em; */
  line-height: 1;
  letter-spacing: 3px;
}

.topmenu > li > a:before {
  content: "";
  position: absolute;
  z-index: 5;
  left: 50%;
  top: 100%;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, 20px);
  opacity: 0;
  transition: 0.3s;
}

.topmenu li:hover a:before {
  transform: translate(-50%, 0);
  opacity: 1;
}

.submenu {
  position: absolute;
  z-index: 4;
  left: 50%;
  top: 100%;
  width: 150px;
  padding: 15px 0 15px;
  margin-top: 5px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transform: translate(-50%, 20px);
  transition: 0.3s;
}

.topmenu > li:hover .submenu {
  visibility: visible;
  opacity: 1;
  transform: translate(-50%, 0);
}

.submenu a {
  /* font-family: 'Libre Baskerville', serif; */
  font-size: 11px;
  letter-spacing: 1px;
  padding: 5px 10px;
  transition: 0.3s linear;
}

.submenu a:hover {
  background: #e8e8e8;
}

.st {
  width: 6%;
  height: auto;
}
main {
  padding: 0;
  margin: 0;
}
</style>
