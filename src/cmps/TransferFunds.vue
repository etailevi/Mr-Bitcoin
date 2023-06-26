<template>
    <div>
        <div class="transfer-funds">
            <form @submit.prevent="transfer">
                <input class="input" v-model="amount" type="number" placeholder="Please Enter Amount to transfer... " />
                <button>Transfer</button>
            </form>
        </div>
        <UserMsg />
    </div>
</template>
  
<script>
import { eventBus } from "../services/eventBus.service";
import { userService } from "../services/user.service";
import UserMsg from "@/cmps/UserMsg.vue";
export default {
    props: {
        contact: { type: Object, required: true },
    },
    data() {
        return {
            amount: 0,
        };
    },
    methods: {
        transfer() {
            let user = this.$store.getters.user;
            if (user.balance < this.amount) {
                const msg = {
                    txt: `Sorry, you don't have enough balance to make the transaction`,
                    type: "fail",
                    timeout: 2500,
                };
                eventBus.emit("user-msg", msg);
            } else {
                userService.transferFunds(
                    this.amount,
                    this.contact._id,
                    this.contact.name
                );
            }
        },
    },
    components: {
        UserMsg,
    },
};
</script>
  
<style></style>