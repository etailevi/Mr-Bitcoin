<template>
  <main class="contact-edit">
    <form @submit.prevent="login">
      <input class="input" v-model="username" type="text" placeholder="Enter username" required>
      <button>Login</button>
    </form>
  </main>
</template>

<script>
import { userService } from '../services/user.service'
export default {

  data() {
    return {
      username: '',
    }
  },
  methods: {
    login() {
      if (this.username) {
        this.$store.dispatch({ type: 'userLogin', username: this.username })
        this.$router.push('/home')
      }
    }
  },
  created() {
  }
}
</script>

<style lang="scss"></style>