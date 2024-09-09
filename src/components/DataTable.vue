<template>
  <div class="table-view">
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Значение</th>
          <th>Время простоя</th>
          <th>Статус смены</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in chartData" :key="data.date">
          <td>{{ data.date.toLocaleDateString() }}</td>
          <td>{{ data.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableView",
  props: {
    chartData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.table-view table {
  width: 100%;
  border-collapse: collapse;
}

.table-view th,
.table-view td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.table-view th {
  background-color: #eee;
}
</style>
