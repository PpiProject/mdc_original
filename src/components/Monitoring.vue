<template>
  <div>
    <h1>Реальное время</h1>
    <LineChart />
    <DataTable />
  </div>
</template>

<script>
import LineChart from './LineChart.vue';
import DataTable from './DataTable.vue';

export default {
  name: 'Monitoring',
  components: {
    LineChart,
    DataTable,
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
