<template>
    <section class="contact-list">
        <TransitionGroup name="list" tag="ul">
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
                <section class="actions">
                    <RouterLink :to="`/contact/${contact._id}`">
                        <button><i class="bi bi-person"></i></button>
                    </RouterLink>
                    <RouterLink :to="`/contact/edit/${contact._id}`">
                        <button><i class="bi bi-pencil"></i></button>
                    </RouterLink>
                    <button @click="onRemoveContact(contact._id)">
                        <i class="bi bi-x"></i>
                    </button>
                </section>
            </li>
        </TransitionGroup>
    </section>
</template>

<script>
import ContactPreview from '@/cmps/ContactPreview.vue'
import "bootstrap-icons/font/bootstrap-icons.css"
export default {
    props: {
        contacts: { type: Array, required: true },
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: {
        ContactPreview,
    }
}
</script>

<style lang="scss">
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>