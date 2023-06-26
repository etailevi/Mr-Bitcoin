<template>
  <div>
    <article v-if="contact" class="contact-details">
      <div class="contact-img">
        <img :src='`https://robohash.org/${contact._id}?set=set1&size=130x130`' :alt='contact.name'>
      </div>
      <div class="contact-info">
        <h2>{{ contact.name }}</h2>
        <h3>{{ contact.email }}</h3>
        <h3>{{ contact.phone }}</h3>
      </div>
      <RouterLink to="/contact">
        <button><i class="bi bi-escape"></i></button>
      </RouterLink>
    </article>
    <TransferFunds :contact="contact" />
    <TransactionList />
  </div>
</template>

<script>
import { contactService } from '../services/contact.service'
import TransferFunds from '@/cmps/TransferFunds.vue'
import TransactionList from '@/cmps/TransactionList.vue'

export default {
  data() {
    return {
      contact: null,
    }
  },
  async created() {
    const contactId = this.$route.params.id
    this.contact = await contactService.get(contactId)
  },
  components: {
    TransferFunds,
    TransactionList
  }
}
</script>

<style></style>