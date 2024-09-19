<template>
  <div class="jurnal">
    <main class="content">

      <section class="filters">
        <form @submit.prevent="applyFilters">
          <div class="form-group">
            <label>Тип станка</label>
            <select v-model="filters.machineType">
              <option value="">Все</option>
              <option value="Лакокрасочный">Лакокрасочный</option>
              <option value="Токарный">Токарный</option>
              <option value="Сверильный">Сверильный</option>
            </select>
          </div>
          <div class="form-group">
            <label for="shift-date">Дата смены</label>
            <input type="date" id="shift-date" v-model="filters.shiftDate" />
          </div>
          <div class="form-group">
            <label for="error-status">Наличие ошибок</label>
            <select v-model="filters.hasErrors">
              <option value="">Неважно</option>
              <option value="присутствуют">присутствуют</option>
              <option value="отсутствуют">отсутствуют</option>
            </select>
          </div>
          <button type="submit">Применить</button>
        </form>
      </section>

      <section class="table" v-if="filteredData.length > 0">
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>статус смены</th>
              <th>Дата смены</th>
              <th>Тип ошибки</th>
              <th>Время простоя</th>
              <th>Тип станка</th>
              <th>Комментарии</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in filteredData" :key="index">
              <td>{{ index + 1 }}</td>
              <td
                :class="
                  row.status === 'завершено' ? 'status completed' : 'status pending'
                "
              >
                {{ row.status }}
              </td>
              <td>{{ row.shiftDate }}</td>
              <td :class="row.errorType ? 'error' : ''">{{ row.errorType || "Нет" }}</td>
              <td>{{ row.downtime }}</td>
              <td>{{ row.machineType }}</td>
              <td><input type="text" v-model="row.comments" placeholder="добавить" /></td>
            </tr>
          </tbody>
        </table>
      </section>
      <p v-else>Данные не найдены.</p>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        machineType: "",
        shiftDate: "",
        hasErrors: "",
      },
      tableData: [
        {
          status: "завершено",
          shiftDate: "2023-10-11",
          errorType: "Поломка",
          downtime: "8:30",
          machineType: "Токарный",
          comments: "",
        },
        {
          status: "завершено",
          shiftDate: "2023-06-29",
          errorType: "",
          downtime: "0",
          machineType: "Лакокрасочный",
          comments: "",
        },
        // Можно добавить больше данных
      ],
      filteredData: [],
    };
  },
  methods: {
    applyFilters() {
      this.filteredData = this.tableData.filter((row) => {
        const matchesMachineType =
          !this.filters.machineType || row.machineType === this.filters.machineType;
        const matchesShiftDate =
          !this.filters.shiftDate || row.shiftDate === this.filters.shiftDate;
        const matchesHasErrors =
          this.filters.hasErrors === "" ||
          (this.filters.hasErrors === "присутствуют" && row.errorType) ||
          (this.filters.hasErrors === "отсутствуют" && !row.errorType);

        return matchesMachineType && matchesShiftDate && matchesHasErrors;
      });
    },
  },
  mounted() {
    // Изначально показываем все данные
    this.filteredData = this.tableData;
  },
};
</script>

<style>
.jurnal {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

main {
  width: 100%;
}
.filters {
  background-color: #fafafa;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.filters .form-group {
  margin-bottom: 20px;
  width: 100%;
}

.filters .form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

.filters .form-group input,
.filters .form-group select {
  width: calc(100% - 16px);
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #0ab3b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;

  width: max-content;
}

button[type="submit"]:hover {
  background-color: #8ebdf0;
}

.table {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  overflow-x: auto;
}

.table table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
  font-size: 14px;
}

.table th {
  background-color: #f9f9f9;
  font-weight: bold;
}

.table td input[type="text"] {
  width: 100%;
  padding: 6px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.status.completed {
  background-color: #d4edda;
  color: #155724;
}

.status.in-progress {
  background-color: #fff3cd;
  color: #856404;
}

.status.pending {
  background-color: #cce5ff;
  color: #004085;
}

.error {
  background-color: #f8d7da;
  color: #721c24;
}

.butdown {
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #007bff;
}

.butdown:hover {
  text-decoration: underline;
}

@media (max-width: 1080px) {
  .pic {
    width: 50%;
    height: auto;
  }

  header .pic p {
    font-size: 12px;
  }

  .user-info {
    font-size: 12px;
  }

  .filters .form-group input,
  .filters .form-group select {
    width: calc(100% - 12px);
  }

  .table th,
  .table td {
    padding: 10px 12px;
  }
}

@media (max-width: 800px) {
  .pic {
    width: 50%;
  }

  header .pic p {
    font-size: 11px;
  }

  .user-info {
    font-size: 11px;
  }

  .filters .form-group input,
  .filters .form-group select {
    width: 100%;
  }

  .table th,
  .table td {
    padding: 8px 10px;
  }
}
</style>
