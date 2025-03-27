<template>
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
</template>

<script setup>
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
</script>

<style lang="scss" scoped>
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

.accordion-button:not(.collapsed) {
  background-color: rgba(37, 99, 235, 0.1);
  color: var(--primary-color);
}

.accordion-button:focus {
  box-shadow: none;
  border-color: rgba(37, 99, 235, 0.1);
}
</style>
