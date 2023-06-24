<template>
  <main class="home">
    <img :src='`https://robohash.org/${user._id}?set=set1&size=100x100`' :alt='user.name'>
    <h1>{{ this.user.name }}</h1>
    <h3>Balance: {{ this.user.balance }}$</h3>
    <h4>Bitcoin Rate: {{ this.rate }}</h4>
  </main>
</template>

<script>
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoinService'
export default {

  data() {
    return {
      user: null,
      rate: null,
    }
  },
  created() {
    this.user = userService.getUser()
    this.rate = bitcoinService.getRate()
  }
}
</script>

<style lang="scss">
.home {}
</style>