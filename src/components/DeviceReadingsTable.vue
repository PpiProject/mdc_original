<template>
<main>
  <table>
<thead>
<tr>
  <th>timestamp</th>
  <th>signalID</th>
  <th>signalState</th>
  <th>name</th>
</tr>
</thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
    </tr>
    </tbody>
  </table>
</main>
</template>

<script>
export default {
  name: "DeviceReadingsTable"
}
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
}
table {
  width: 50%;
  border-collapse: collapse;
  text-align: center;
  background-color: white;
  margin-top: 30px;
}

table th,
table td {
  padding: 5px;
  padding: 5px;
  border: 1px solid #ddd;
  text-align: center;
  font-size: 14px;
}

table th {
  background-color: #f9f9f9;
  font-weight: bold;
}
</style>