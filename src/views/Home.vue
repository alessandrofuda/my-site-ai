<template>
  <div class="home">
    <Navigation />
    <Hero />
    <Consulting />
    <Workflow />
    <TechStack />
    <AiConsulting />
    <Examples />
    <Contact />
  </div>
</template>

<script setup>
import Navigation from '../components/sections/Navigation.vue'
import Hero from '../components/sections/Hero.vue'
import Consulting from '../components/sections/Consulting.vue'
import Workflow from '../components/sections/Workflow.vue'
import TechStack from '../components/sections/TechStack.vue'
import AiConsulting from '../components/sections/AiConsulting.vue'
import Examples from '../components/sections/Examples.vue'
import Contact from '../components/sections/Contact.vue'
</script>

<style lang="scss">
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

.section-padding {
  padding: 6rem 0;
}
</style>
