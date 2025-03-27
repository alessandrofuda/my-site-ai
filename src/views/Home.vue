<template>
  <div class="home">
    <LanguageSwitcher />

    <!-- Hero Section -->
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

    <!-- Consulting Section -->
    <section id="consulting" class="section-padding">
      <div class="container">
        <h2 class="text-center mb-5">{{ $t('consulting.title') }}</h2>
        <div class="row g-4">
          <div class="col-md-6">
            <div class="consulting-card">
              <h3>{{ $t('consulting.whoAmI') }}</h3>
              <p>{{ $t('consulting.whoAmIDesc') }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="consulting-card">
              <h3>{{ $t('consulting.target') }}</h3>
              <p>{{ $t('consulting.targetDesc') }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="consulting-card">
              <h3>{{ $t('consulting.what') }}</h3>
              <p>{{ $t('consulting.whatDesc') }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="consulting-card">
              <h3>{{ $t('consulting.benefits') }}</h3>
              <p>{{ $t('consulting.benefitsDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workflow Section -->
    <section id="workflow" class="section-padding bg-light">
      <div class="container">
        <h2 class="text-center mb-5">{{ $t('workflow.title') }}</h2>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="workflow-steps">
              <div v-for="n in 5" :key="n" class="workflow-step">
                <div class="step-number">{{ n }}</div>
                <div class="step-content">{{ $t(`workflow.steps.${n}`) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech" class="section-padding">
      <div class="container">
        <h2 class="text-center mb-5">{{ $t('tech.title') }}</h2>
        <div class="accordion" id="techAccordion">
          <!-- Frontend -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#frontendCollapse">
                {{ $t('tech.frontend') }}
              </button>
            </h2>
            <div id="frontendCollapse" class="accordion-collapse collapse show" data-bs-parent="#techAccordion">
              <div class="accordion-body">
                <div class="tech-item" v-for="tech in frontendTech" :key="tech.name">
                  <div class="d-flex justify-content-between mb-2">
                    <span>{{ tech.name }}</span>
                    <span class="text-muted">{{ tech.level }}%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" :style="{ width: tech.level + '%' }" role="progressbar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Backend -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#backendCollapse">
                {{ $t('tech.backend') }}
              </button>
            </h2>
            <div id="backendCollapse" class="accordion-collapse collapse" data-bs-parent="#techAccordion">
              <div class="accordion-body">
                <div class="tech-item" v-for="tech in backendTech" :key="tech.name">
                  <div class="d-flex justify-content-between mb-2">
                    <span>{{ tech.name }}</span>
                    <span class="text-muted">{{ tech.level }}%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" :style="{ width: tech.level + '%' }" role="progressbar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- DevOps -->
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#devopsCollapse">
                {{ $t('tech.devops') }}
              </button>
            </h2>
            <div id="devopsCollapse" class="accordion-collapse collapse" data-bs-parent="#techAccordion">
              <div class="accordion-body">
                <div class="tech-item" v-for="tech in devopsTech" :key="tech.name">
                  <div class="d-flex justify-content-between mb-2">
                    <span>{{ tech.name }}</span>
                    <span class="text-muted">{{ tech.level }}%</span>
                  </div>
                  <div class="progress">
                    <div class="progress-bar" :style="{ width: tech.level + '%' }" role="progressbar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Consulting Section -->
    <section id="ai" class="section-padding bg-light">
      <div class="container">
        <h2 class="text-center mb-5">{{ $t('ai.title') }}</h2>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Placeholder for AI consulting content -->
            <div class="ai-content text-center">
              <i class="fas fa-robot fa-4x mb-4 text-primary"></i>
              <p class="lead">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Examples Section -->
    <section id="examples" class="section-padding">
      <div class="container">
        <h2 class="text-center mb-5">{{ $t('examples.title') }}</h2>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Placeholder for portfolio content -->
            <div class="examples-content text-center">
              <i class="fas fa-laptop-code fa-4x mb-4 text-primary"></i>
              <p class="lead">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
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
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const frontendTech = [
  { name: 'Vue.js', level: 90 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Bootstrap', level: 85 },
  { name: 'SASS/LESS', level: 85 }
]

const backendTech = [
  { name: 'PHP', level: 95 },
  { name: 'Laravel', level: 90 },
  { name: 'MySQL/MariaDB', level: 85 },
  { name: 'REST APIs', level: 90 },
  { name: 'WordPress', level: 85 }
]

const devopsTech = [
  { name: 'Docker', level: 85 },
  { name: 'Linux', level: 85 },
  { name: 'Git', level: 90 },
  { name: 'Apache/Nginx', level: 85 },
  { name: 'CI/CD', level: 80 }
]

const handleSubmit = () => {
  // Here you would typically send the form data to a server
  console.log('Form submitted:', form.value)
  alert('Thank you for your message! I will get back to you soon.')
  form.value = { name: '', email: '', message: '' }
}
</script>

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

.consulting-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }
}

.workflow-steps {
  .workflow-step {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    padding: 1rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

    .step-number {
      background: var(--primary-color);
      color: white;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 1rem;
      flex-shrink: 0;
    }

    .step-content {
      flex: 1;
    }
  }
}

.tech-item {
  margin-bottom: 1.5rem;

  .progress {
    height: 0.5rem;
    background-color: #e2e8f0;
    border-radius: 1rem;
    overflow: hidden;

    .progress-bar {
      background-color: var(--primary-color);
      transition: width 1s ease;
    }
  }
}

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

.accordion-button:not(.collapsed) {
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(37, 99, 235, 0.1);
}
</style>
