<template>
  <section id="hero" class="hero-section">
    <div class="container">
      <div class="row min-vh-100 align-items-center">
        <div class="col-lg-8 mx-auto text-center">
          <h1 class="display-4 fw-bold mb-4 text-white">{{ $t('hero.title') }}</h1>
          <p class="lead mb-2 text-white">{{ $t('hero.subtitle') }}</p>
          <p class="lead mb-2 text-white">{{ $t('hero.subtitle2') }}</p>
          <p class="lead mb-4 text-white">{{ $t('hero.experience') }}</p>
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
  background: url('../../assets/bg-hero.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  background-attachment: fixed;
  position: relative;
  right: 0;
  left: 0;
  min-height: 100vh; /* Ensure it takes up the full viewport height */
}
.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Semi-transparent overlay */
  z-index: 1;
}
.hero-section .container {
  position: relative;
  z-index: 2; /* Place content above the overlay */
}

.social-links {
  a {
    color: #e8ebf0;
    transition: color 0.3s ease;
    
    &:hover {
      color: #98999c;
    }
  }
}
</style>
