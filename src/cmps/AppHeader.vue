<template>
    <header class="app-header">
        <div>
            <RouterLink to="/" class="logo">
                <img :src="imgUrl" alt="logo">
                <h1>bitcoin</h1>
            </RouterLink>
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
            imgUrl: 'imgs/Bitcoin_Cash.svg',
        }
    }
}
</script>

<style lang="scss"></style>