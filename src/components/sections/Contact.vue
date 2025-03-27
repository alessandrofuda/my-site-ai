<template>
  <section id="contact" class="section-padding bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-center mb-5">{{ $t('contact.title') }}</h2>
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="mb-3">
              <input type="text" v-model="form.name" class="form-control" :placeholder="$t('contact.name')" required>
            </div>
            <div class="mb-3">
              <input type="email" v-model="form.email" class="form-control" :placeholder="$t('contact.email')" required>
            </div>
            <div class="mb-3">
              <textarea v-model="form.message" class="form-control" rows="5" :placeholder="$t('contact.message')" required></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-lg">{{ $t('contact.send') }}</button>
            </div>
          </form>
          <div class="text-center mt-5">
            <p class="mb-2">{{ $t('contact.address') }}</p>
            <p>{{ $t('contact.city') }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Here you would typically send the form data to a server
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! I will get back to you soon.')
  form.value = { name: '', email: '', message: '' }
}
</script>

<style lang="scss" scoped>
.contact-form {
  .form-control {
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
  }
}
</style>
