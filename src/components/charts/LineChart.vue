<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'LineChart',
  props: {
    width: {
      type: Number,
      default: 800,
    },
    height: {
      type: Number,
      default: 400,
    },
    chartData: {
      type: Array,
      required: true,
    },
  },
  watch: {
    chartData: {
      immediate: true,
      handler() {
        this.createChart();
      },
    },
  },
  methods: {
    createChart() {
      // Clear previous chart
      d3.select(this.$refs.chart).selectAll('*').remove();

      const margin = { top: 20, right: 30, bottom: 30, left: 40 };
      const width = this.width - margin.left - margin.right;
      const height = this.height - margin.top - margin.bottom;

      const svg = d3
        .select(this.$refs.chart)
        .append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3
        .scaleTime()
        .domain(d3.extent(this.chartData, (d) => d.date))
        .range([0, width]);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(this.chartData, (d) => d.value)])
        .range([height, 0]);

      svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x).ticks(5));

      svg.append('g').call(d3.axisLeft(y));

      const line = d3
        .line()
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      svg
        .append('path')
        .datum(this.chartData)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line);
    },
  },
};
</script>

<style scoped>
.chart {
  margin: 20px auto;
  width: 100%;
  height: 300px;
}
</style>
