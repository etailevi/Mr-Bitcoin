<!-- <template>
    <div class="stats">
        <h1>Bitcoin Stats</h1>
        <div class="charts">
            <LineChart :chartData="priceHistory" />
            <LineChart :chartData="avgBlockSize" />
        </div>
    </div>
</template>
  
<script>

import { bitcoinService } from "../services/bitcoinService";
import LineChart from "../cmps/charts/LineChart.vue"

export default {
    data() {
        return {
            priceHistory: null,
            avgBlockSize: null
        };
    },
    components: {
        LineChart
    },
    async created() {
        this.priceHistory = await bitcoinService.getMarketPriceHistory();
        this.avgBlockSize = await bitcoinService.getAvgBlockSize();
    },
    computed: {
        priceHistoryData() {
            return {
                labels: this.priceHistory.values.map((dataSample) => {
                    let date = dataSample.x;
                    date = new Date(date * 1000);
                    return date.toISOString().split("T")[0];
                    // `${date.getDate() + 1}.${date.getMonth() + 1}`
                }),
                datasets: [
                    {
                        label: "Market price History",
                        backgroundColor: "#01BD7E",
                        data: this.priceHistory.values.map((dataSample) => dataSample.y),
                    },
                ],
            };
        },
        avgBlockSizeData() {
            return {
                labels: this.avgBlockSize.values.map((dataSample) => {
                    let date = dataSample.x;
                    date = new Date(date * 1000);
                    return date.toISOString().split("T")[0];
                }),
                datasets: [
                    {
                        label: "Average Block Size",
                        backgroundColor: "#01BD7E",
                        data: this.avgBlockSize.values.map((dataSample) => dataSample.y),
                    },
                ],
            };
        },
    },
};
</script>
  
<style lang="scss">
.stats {
    h1 {
        text-align: center;
        margin-block: 15px;
    }

    .charts {
        padding-inline: 4em;
    }
}
</style> -->

<template>
    <div class="charts">
        <!-- <h1>Stats</h1> -->
        <div v-if="priceHistory && avgBlockSize">
            <LineChart :chartData="priceHistoryData" />
            <LineChart :chartData="avgBlockSizeData" />
        </div>
    </div>
</template>
  
<script>
import { bitcoinService } from "../services/bitcoinService";
import LineChart from "../cmps/charts/LineChart.vue";

export default {
    data() {
        return {
            priceHistory: null,
            avgBlockSize: null,
        };
    },
    components: {
        LineChart,
    },
    async created() {
        this.priceHistory = await bitcoinService.getMarketPriceHistory();
        this.avgBlockSize = await bitcoinService.getAvgBlockSize();
    },
    components: { LineChart },

    computed: {
        priceHistoryData() {
            return {
                labels: this.priceHistory.values.map((dataSample) => {
                    let date = dataSample.x;
                    date = new Date(date * 1000);
                    return date.toISOString().split("T")[0];
                    // `${date.getDate() + 1}.${date.getMonth() + 1}`
                }),
                datasets: [
                    {
                        label: "Market price History",
                        backgroundColor: "#7C9070",
                        data: this.priceHistory.values.map((dataSample) => dataSample.y),
                    },
                ],
            };
        },
        avgBlockSizeData() {
            return {
                labels: this.avgBlockSize.values.map((dataSample) => {
                    let date = dataSample.x;
                    date = new Date(date * 1000);
                    return date.toISOString().split("T")[0];
                }),
                datasets: [
                    {
                        label: "Average Block Size",
                        backgroundColor: "#0A6EBD",
                        data: this.avgBlockSize.values.map((dataSample) => dataSample.y),
                    },
                ],
            };
        },
    },
};
</script>
  
<style></style>