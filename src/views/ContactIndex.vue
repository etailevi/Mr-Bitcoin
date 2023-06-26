<template>
    <div class="contact-index">
        <UserMsg />
        <ContactFilter @filter="onSetFilterBy" />
        <RouterLink to="/contact/edit"><button class="button-name">Add Contact</button></RouterLink>
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
    </div>
</template>

<script>
import { contactService } from '@/services/contact.service.js'
import { eventBus } from '@/services/eventBus.service.js'

import ContactList from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'
import UserMsg from '@/cmps/UserMsg.vue'
import { bitcoinService } from '../services/bitcoinService'

export default {
    data() {
        return {
            filterBy: {},
            priceHistory: null,
            avgBlockSize: null
        }
    },
    methods: {
        async removeContact(contactId) {
            try {
                this.$store.dispatch({ type: 'removeContact', contactId })
                const msg = {
                    txt: `Contact has removed...`,
                    type: 'success',
                    timeout: 2500,
                }
                eventBus.emit('user-msg', msg)
            } catch (err) {
                const msg = {
                    txt: `Cannot remove contact`,
                    type: 'fail',
                    timeout: 2500,
                }
                eventBus.emit('user-msg', msg)
            }
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.term, 'i')
            return this.contacts.filter(contact => regex.test(contact[this.filterBy.criteria]))
        },
        contacts() { return this.$store.getters.contacts }
    },
    async created() {
        this.$store.dispatch({ type: 'loadContacts' })
        this.rate = bitcoinService.getRate()
        this.priceHistory = bitcoinService.getMarketPriceHistory()
        this.avgBlockSize = bitcoinService.getAvgBlockSize()
    },
    components: {
        ContactList,
        ContactFilter,
        UserMsg,
    }
}
</script>

<style lang="scss"></style>