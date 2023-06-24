<template>
    <section class="contact-filter">
        <p>Search: </p>
        <input @input="onSetFilterBy" v-model="filterBy.term" type="text" placeholder="By contact">
        <select @change="onSetFilterBy" v-model="filterBy.criteria">
            <option value="name">Name</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
        </select>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                term: '',
                criteria: 'name', // Default criteria is 'name'
            }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss"></style>