<template>
    <header class="app-header">
        <div class="logo">
            <img :src="imgUrl" alt="">
            <h1>itcoin</h1>
        </div>
        <nav class="main-nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/stats">Statistics</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            imgUrl: 'src/assets/img/Bitcoin_Cash.png',
        }
    }
}
</script>

<style lang="scss"></style>