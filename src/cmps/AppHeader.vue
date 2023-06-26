<template>
    <div>
        <header class="app-header">
            <div>
                <RouterLink to="/home" class="logo">
                    <img :src="imgUrl" alt="logo" />
                    <h1>bitcoin</h1>
                </RouterLink>
            </div>
            <nav v-if="isLoggedIn" class="main-nav">
                <!-- <nav class="main-nav"> -->
                <RouterLink to="/home">Home</RouterLink>
                <RouterLink to="/contact">Contacts</RouterLink>
                <RouterLink to="/stats">Statistics</RouterLink> |
                <RouterLink to="/" @click="logout">Logout</RouterLink>
            </nav>
        </header>
    </div>
</template>

<script>
import { userService } from '../services/user.service'
export default {
    data() {
        return {
            imgUrl: 'imgs/Bitcoin_Cash.svg',
        }
    },
    methods: {
        logout() {
            this.$store.dispatch("userLogout");
        },
    },
    computed: {
        isLoggedIn() {
            console.log("this.$store.getters.user", this.$store.getters.user);
            return this.$store.getters.user?.name
        },
    },
    created() {
        if (!this.$store.getters.user?.name) {
            userService.getLoggedInUser();
            this.$store.dispatch({ type: "loadUser" });
        }
    },
}
</script>

<style lang="scss"></style>