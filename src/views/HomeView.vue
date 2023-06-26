<template>
  <div>
    <main class="contact-details">
      <div class="contact-img">
        <img :src='`https://robohash.org/${user._id}?set=set1&size=130x130`' :alt='user.name'>
      </div>
      <div class="contact-info">
        <h2>{{ this.user.name }}</h2>
        <h3>Balance: <span>{{ this.user.balance }}₿</span></h3>
        <h3>Bitcoin Rate: <span>{{ this.rate }}</span></h3>
      </div>
    </main>
    <TransactionList />
  </div>
</template>

<script>
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoinService'
export default {

  data() {
    return {
      user: userService.getEmptyUser(),
      rate: null,
    }
  },
  async created() {
    // this.user = userService.getLoggedInUser()
    this.user = this.$store.getters.user
    this.rate = await bitcoinService.getRate()
  }
}
</script>

<style lang="scss"></style>