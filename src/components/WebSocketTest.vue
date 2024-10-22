<template>
  <div>
    <p>WebSocket status: {{ status }}</p>
    <input v-model="message" placeholder="Type a message" />
    <button @click="sendMessage">Send</button>
    <p>Server response: {{ serverMessage }}</p>

    <!-- Вывод массива случайных чисел -->
    <p>Random numbers from server: {{ randomNumbers.join(', ') }}</p>
  </div>
</template>

<script>
import socket from '@/store/socket.js';

export default {
  data() {
    return {
      status: '',
      message: '',
      serverMessage: '',
      randomNumbers: [], // Массив для случайных чисел
    };
  },
  created() {
    socket.on('connect', () => {
      this.status = 'Connected';
    });

    socket.on('disconnect', () => {
      this.status = 'Disconnected';
    });

    socket.on('message', (data) => {
      this.serverMessage = data;
    });

    // Новый обработчик для случайных чисел
    socket.on('randomNumbers', (numbers) => {
      this.randomNumbers = numbers; // Обновляем массив случайных чисел
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });
  },
  methods: {
    sendMessage() {
      if (socket.connected) {
        socket.emit('message', this.message); // Отправляем сообщение на сервер
        this.message = ''; // Очищаем поле ввода
      } else {
        console.warn('WebSocket is not open');
      }
    }
  },
  beforeDestroy() {
    socket.off('connect');
    socket.off('disconnect');
    socket.off('message');
    socket.off('randomNumbers');
  }
};
</script>

<style scoped>
/* Ваши стили */
</style>
