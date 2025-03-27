<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="row min-vh-100 align-items-center">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-4 fw-bold mb-4">{{ $t('hero.title') }}</h1>
          <p class="lead mb-2">{{ $t('hero.subtitle') }}</p>
          <p class="lead mb-4">{{ $t('hero.experience') }}</p>
          <div class="social-links mb-5">
            <a href="https://github.com/alessandrofuda" target="_blank" class="me-3">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/alessandrofuda/" target="_blank">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.social-links {
  a {
    color: #1f2937;
    transition: color 0.3s ease;
    
    &:hover {
      color: #2563eb;
    }
  }
}
</style>
