<template>
  <section id="contact" class="section-padding bg-light pb-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-center mb-5">{{ $t('contact.title') }}</h2>
          <hr />
          <div class="text-center mt-5">
            <div class="mb-2">
              <span class="mb-2 d-inline-block me-4"><i class="fas fa-user me-2"></i> Alessandro Fuda</span>
              <a href="tel:+393356350117" class="d-inline-block me-4 phone"><i class="fas fa-mobile-alt me-2"></i>+39 335 6350117</a>
              <span class="d-inline-block"><i class="fas fa-envelope me-2"></i>alessandro . fuda @ gmail . com</span>
            </div>
            <div class="mb-2">
              <a href="https://www.google.com/maps/search/?api=1&query=via+privata+stefanardo+da+vimercate+28+20128+milano" target="_blank" class="mb-2 d-inline-block text-decoration-none text-dark">
                <p class="mb-2 d-inline-block me-2">
                  <i class="fas fa-map-marker-alt me-2"></i> {{ $t('contact.office') }}: via privata Stefanardo da Vimercate, 28
                </p>
                <p class="mb-2 d-inline-block">20128 {{ $t('contact.city') }}</p>
              </a>
            </div>
            <p class="mb-2"><i class="fas fa-id-card me-2"></i> {{ $t('contact.piva') }} 08497200967</p>
            <div class="social-links my-5">
              <a href="https://www.linkedin.com/in/alessandrofuda/" target="_blank" class="me-3">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/alessandrofuda" target="_blank">
                <i class="fab fa-github fa-2x"></i>
              </a>
            </div>
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
.phone {
  color:inherit;
}
.social-links {
  a {
    color: #1d1e1f;
    transition: color 0.3s ease;
    
    &:hover {
      color: #98999c;
    }
  }
}
</style>
