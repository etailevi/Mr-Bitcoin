<template>
    <div class="line-chart">
        <Line id="my-chart-id" :options="chartOptions" :data="chartData" :style="myStyles" />
    </div>
</template>
  
<script>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

import { utilService } from "../../services/util.service.js";
export default {
    props: {
        avgBlockSize: { type: Object, required: true },
    },
    name: "BarChart",
    components: { Line },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: "Average Block Size",
                        data: null,
                        fill: false,
                        borderColor: "rgb(75, 192, 255)",
                        tension: 0.1,
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
    created() {
        this.chartData.labels = this.getDay();
        this.chartData.datasets[0].data = this.getData();
    },
    methods: {
        getDay() {
            if (this.avgBlockSize.values) {
                return this.avgBlockSize.values.map((value) => {
                    return utilService.formatDate(value.x, "en-GB");
                });
            }
            return [];
        },
        getData() {
            if (this.avgBlockSize.values) {
                return this.avgBlockSize.values.map((value) => {
                    return value.y;
                });
            }
            return [];
        },
    },
    computed: {
        myStyles() {
            return {
                height: '45vh',
                width: '100%'
            }
        }
    }
};
</script>
<style></style>