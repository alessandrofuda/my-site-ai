<template>
  <router-view></router-view>
</template>

<script setup>
// App.vue is now just a container for our router views
</script>

<style>
/* Import Bootstrap and Font Awesome */
@import 'bootstrap/dist/css/bootstrap.min.css';
@import '@fortawesome/fontawesome-free/css/all.min.css';

/* Global styles */
:root {
  --primary-color: #2563eb;
  --text-color: #1f2937;
  --background-color: #ffffff;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for fixed header */
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
}

/* Smooth transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Utility classes */
.section-padding {
  padding: 6rem 0;
}

.text-primary {
  color: var(--primary-color) !important;
}

.bg-primary {
  background-color: var(--primary-color) !important;
}
</style>
