<template>
  <main>
    <div v-if="isVisible" class="modal">
      <header class="header_modal">
        <p>Период отправки</p>
        <button class="btn_close" @click="closeModal">X</button>
      </header>
      <form>
        <div class="text_container">
          <label for="set_period">Выберите период:</label>
          <select v-model="selectedPeriod" name="period" id="set_period">
            <option value="seconds">Секунды</option>
            <option value="minutes">Минуты</option>
          </select>
        </div>
        <div class="input_container">
          <label for="set_time">Введите количество единиц:</label>
          <input v-model="inputTime" type="number" id="set_time">
        </div>
        <div class="button_save">
          <button @click.prevent="saveSettings">Сохранить</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: "SettingsTimeModal",
  data() {
    return {
      selectedPeriod: 'seconds',
      inputTime: ''
    };
  },
  computed: {
    isVisible() {
      return this.$store.state.displayElements.isSettingsTimeModalVisible;
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch('displayElements/changeVisibleSettingsTime', false);
    },
    async saveSettings() {
      if (!this.inputTime || isNaN(this.inputTime)) {
        alert('Пожалуйста, введите корректное число.');
        return;
      }

      let timeInMilliseconds;

      if (this.selectedPeriod === 'seconds') {
        timeInMilliseconds = this.inputTime * 1000;
      } else if (this.selectedPeriod === 'minutes') {
        timeInMilliseconds = this.inputTime * 60 * 1000;
      }


      const payload = {
        time_load: timeInMilliseconds
      };

      try {
        const response = await axios.post('http://194.87.206.227:3000/time_load.json', payload);
        console.log('Ответ сервера:', response.data);
        alert('Настройки успешно сохранены!');
      } catch (error) {
        console.error('Ошибка при отправке данных на сервер:', error);
        alert('Произошла ошибка при сохранении настроек.');
      }

      this.closeModal();
    }
  }
};
</script>

<style scoped>
main {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  margin: 0;
}

.header_modal {
  display: flex;
  justify-content: space-between;
  height: 30px;
  margin: 0;
  padding: 10px;
  border-bottom: 1px solid black;
}

.modal {
  top: 0;
  left: 0;
  background: #e8e7e7;
  display: flex;
  flex-direction: column;
  z-index: 2000;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 30%;
}

.text_container {
  margin-top: 20px;
  display: flex;
  gap: 100px;
  padding: 10px;
}

#set_period {
  width: 32%;
}

.input_container {
  margin-top: 20px;
  display: flex;
  gap: 15px;
  padding: 10px;
}

.button_save {
  margin-top: 50px;
  float: right;
  padding: 20px;
}

button {
  background-color: #0ab3b3;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 4px;
}
</style>
