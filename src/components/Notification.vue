<template>
  <div v-if="visible" :class="['notification', type]" class="fade">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'success' // success, error, warning, info
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    this.showNotification();
  },
  methods: {
    showNotification() {
      this.visible = true;
      setTimeout(() => {
        this.visible = false; // скрыть уведомление через 3 секунды
      }, 3000);
    }
  }
}
</script>

<style scoped>
.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 15px 25px;
  border-radius: 5px;
  color: white;
  z-index: 1000;
  transition: opacity 0.5s ease-in-out;
}

.fade {
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@keyframes fadein {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeout {
  from { opacity: 1; }
  to { opacity: 0; }
}

.success {
  background-color: #4CAF50;
}

.error {
  background-color: #f44336;
}

.warning {
  background-color: #ff9800;
}

.info {
  background-color: #2196F3;
}
</style>
