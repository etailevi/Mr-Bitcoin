<template>
    <article class="contact-preview">
        <div class="contact-img">
            <img :src='`https://robohash.org/${contact._id}?set=set1&size=130x130`' :alt='contact.name'>
        </div>
        <div class="contact-info">
            <h2>{{ contact.name }}</h2>
            <h3>{{ contact.email }}</h3>
            <h3>{{ contact.phone }}</h3>
        </div>
    </article>
</template>

<script>

export default {
    props: {
        contact: { type: Object, required: true },
    }
}
</script>

<style lang="scss"></style>