<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="language-switcher-container">
      <LanguageSwitcher />
    </div>
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <a class="nav-link" href="#consulting">{{ $t('nav.consulting') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#workflow">{{ $t('nav.workflow') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tech">{{ $t('nav.tech') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ai">{{ $t('nav.ai') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#examples">{{ $t('nav.examples') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">{{ $t('nav.contact') }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import LanguageSwitcher from '../LanguageSwitcher.vue'
</script>

<style lang="scss" scoped>
.navbar {
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .language-switcher-container {
    position: absolute;
    right: 4rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1031;

    @media (max-width: 991px) {
      right: 5rem;
    }
  }

  .navbar-toggler {
    border: none;
    padding: 0.5rem;

    &:focus {
      box-shadow: none;
    }
  }

  .navbar-collapse {
    @media (max-width: 991px) {
      background: white;
      padding: 1rem;
      margin-top: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  .nav-link {
    color: var(--text-color);
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
