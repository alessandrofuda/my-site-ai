<template>
  <div class="language-switcher">
    <button 
      class="btn btn-link p-0 me-2"
      :class="{ 'fw-bold': currentLocale === 'it' }"
      @click="changeLocale('it')"
    >
      IT
    </button>
    |
    <button 
      class="btn btn-link p-0 ms-2"
      :class="{ 'fw-bold': currentLocale === 'en' }"
      @click="changeLocale('en')"
    >
      EN
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

const changeLocale = (lang) => {
  locale.value = lang
}
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1030;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-link {
  color: var(--text-color);
  text-decoration: none;
}

.btn-link:hover {
  color: var(--primary-color);
}
</style>
