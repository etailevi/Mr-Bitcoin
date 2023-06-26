<template>
    <div class="contact-edit">
        <h1 v-if="contact._id">Edit contact</h1>
        <h1 v-else>Add contact</h1>
        <form @submit.prevent="save" v-if="contact">
            <input class="input" v-model="contact.name" type="text" placeholder="Name" required>
            <input class="input" v-model="contact.phone" type="tel" placeholder="Phone number" required>
            <input class="input" v-model.number="contact.email" type="email" placeholder="Email address" required>
            <button>Save</button>
        </form>
    </div>
</template>

<script>
import { contactService } from '../services/contact.service'

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async save() {
            await contactService.save(this.contact)
            this.$router.push('/contact')
        }
    },
    async created() {
        const contactId = this.$route.params.id
        if (contactId) {
            this.contact = await contactService.get(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    }
}
</script>

<style lang="scss"></style>