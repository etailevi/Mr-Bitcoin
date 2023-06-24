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
        marketPriceHistory: { type: Object, required: true },
    },
    name: "BarChart",
    components: { Line },
    data() {
        return {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: "Market price History",
                        data: null,
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
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
            if (this.marketPriceHistory.values) {
                return this.marketPriceHistory.values.map((value) => {
                    return utilService.formatDate(value.x, "en-GB");
                });
            }
            return [];
        },
        getData() {
            if (this.marketPriceHistory.values) {
                return this.marketPriceHistory.values.map((value) => {
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
<style>
.line-chart {
    max-width: 1000px;
    margin: auto;
    margin-block-end: 3.5em;
    background-color: rgb(234, 233, 232);
    padding: 40px;
    border-radius: 1em;
    box-shadow: rgba(130, 130, 134, 0.2) 0px 7px 7px 0px;
}
</style>