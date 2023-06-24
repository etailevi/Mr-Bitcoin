<template>
    <div class="stats">
        <h1>Stats</h1>
        <div class="charts">
            <PriceHistoryChart :marketPriceHistory="marketPriceHistory" />
            <AvgBlockChart :avgBlockSize="avgBlockSize" />
        </div>
    </div>
</template>
  
<script>
import PriceHistoryChart from "../cmps/charts/PriceHistoryChart.vue";
import AvgBlockChart from "../cmps/charts/AvgBlockChart.vue";
import { bitcoinService } from "../services/bitcoinService";
export default {
    data() {
        return {
            marketPriceHistory: {},
        };
    },
    components: {
        PriceHistoryChart,
        AvgBlockChart,
    },
    created() {
        this.marketPriceHistory = bitcoinService.getMarketPriceHistory();
        this.avgBlockSize = bitcoinService.getAvgBlockSize();
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
</style>