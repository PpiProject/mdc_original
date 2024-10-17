<template>
  <div class="calendar">
    <h2>Календарь нагрузки</h2>
    <div class="calendar-header">
      <button @click="previousMonth">Предыдущий месяц</button>
      <span>{{ currentMonthLabel }}</span>
      <button @click="nextMonth">Следующий месяц</button>
    </div>
    <div class="calendar-grid">
      <div v-for="(day, index) in daysInMonth" :key="index" class="calendar-day">
        <div class="day-number">
          {{ day.date }}<br />
          <span class="day-of-week">{{ day.weekDay }}</span>
        </div>
        <button
            v-if="!day.assigned"
            @click="assignPersonnel(day)"
            class="assign-btn"
        >
          Назначить персонал
        </button>
        <div v-if="day.assigned" class="assigned-personnel">
          <p>Работник: {{ day.assigned }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      personnelAssignments: {}, // { day: { assigned: "имя работника" } }
    };
  },
  computed: {
    currentMonthLabel() {
      const months = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
      ];
      const month = this.currentDate.getMonth();
      const year = this.currentDate.getFullYear();
      return `${months[month]} ${year}`;
    },
    daysInMonth() {
      const year = this.currentDate.getFullYear();
      const month = this.currentDate.getMonth();
      const days = new Date(year, month + 1, 0).getDate();
      const daysArray = [];

      for (let i = 1; i <= days; i++) {
        const date = new Date(year, month, i);
        const weekDay = this.getWeekDay(date); // Получаем день недели

        daysArray.push({
          date: i,
          weekDay,  // Добавляем день недели
          assigned: this.personnelAssignments[i] || null,
        });
      }

      return daysArray;
    },
  },
  methods: {
    // Переход на предыдущий месяц
    previousMonth() {
      const newDate = new Date(this.currentDate);
      newDate.setMonth(newDate.getMonth() - 1);
      this.currentDate = newDate;
    },
    // Переход на следующий месяц
    nextMonth() {
      const newDate = new Date(this.currentDate);
      newDate.setMonth(newDate.getMonth() + 1);
      this.currentDate = newDate;
    },
    // Получаем день недели для даты
    getWeekDay(date) {
      const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
      return daysOfWeek[date.getDay()];
    },
    assignPersonnel(day) {
      const workerName = prompt("Введите имя работника:");
      if (workerName) {
        // Используем прямую запись в объект для установки значения
        this.personnelAssignments[day.date] = workerName;
      }
    },
  },
};
</script>

<style scoped>
.calendar {
  text-align: center;
  font-family: Arial, sans-serif;
}

.calendar-header {
  margin-bottom: 20px;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 10px;
  background-color: #666666;
  padding: 20px;
}
.calendar-header button {
  background-color: #0ab3b3;
  color: white;
  padding: 5px;
  border: none;
  border: none;
  border-radius: 5px;
}
.calendar-day {
  border: 1px solid #ccc;
  padding: 10px;
  background-color: #f9f9f9;
}

.day-number {
  font-size: 18px;
  font-weight: bold;
}

.day-of-week {
  font-size: 14px;
  color: #888;
}

.assign-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.assign-btn:hover {
  background-color: #0ab3b3;
}

.assigned-personnel {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
}
span {
  margin: 20px;
}
</style>
