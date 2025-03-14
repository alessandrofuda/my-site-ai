<template>
  <div class="home">
    <!-- Hero Section -->
    <section id="hero" class="hero-section">
      <div class="container">
        <div class="row min-vh-100 align-items-center">
          <div class="col-lg-8 mx-auto text-center">
            <h1 class="display-4 fw-bold mb-4">Alessandro Fuda</h1>
            <p class="lead mb-4">Senior Software Developer with 20+ Years Experience</p>
            <div class="social-links mb-5">
              <a href="https://github.com/alessandrofuda" target="_blank" class="me-3">
                <i class="fab fa-github fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/alessandrofuda/" target="_blank">
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
            <a href="#services" class="btn btn-primary btn-lg">View Services</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-5">
      <div class="container">
        <h2 class="text-center mb-5">Services</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="service-card h-100">
              <div class="card-body">
                <i class="fas fa-code fa-3x mb-4"></i>
                <h3>Web Development</h3>
                <ul class="list-unstyled">
                  <li>Laravel + Vue.js Applications</li>
                  <li>Full Stack PHP Development</li>
                  <li>WordPress & eCommerce Solutions</li>
                  <li>REST API Development</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-card h-100">
              <div class="card-body">
                <i class="fas fa-server fa-3x mb-4"></i>
                <h3>DevOps & Infrastructure</h3>
                <ul class="list-unstyled">
                  <li>Docker & Containerization</li>
                  <li>Linux Server Management</li>
                  <li>Apache/Nginx Configuration</li>
                  <li>SSL & Security Implementation</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="service-card h-100">
              <div class="card-body">
                <i class="fas fa-laptop-code fa-3x mb-4"></i>
                <h3>Technical Consulting</h3>
                <ul class="list-unstyled">
                  <li>Architecture Planning</li>
                  <li>Project Management</li>
                  <li>Performance Optimization</li>
                  <li>Technical Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section id="tech-stack" class="py-5 bg-light">
      <div class="container">
        <h2 class="text-center mb-5">Technical Stack</h2>
        <div class="row g-4">
          <div class="col-md-4">
            <div class="tech-category">
              <h3 class="mb-4">Frontend</h3>
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
          <div class="col-md-4">
            <div class="tech-category">
              <h3 class="mb-4">Backend</h3>
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
          <div class="col-md-4">
            <div class="tech-category">
              <h3 class="mb-4">DevOps</h3>
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
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-center mb-5">Contact Me</h2>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="mb-3">
                <input type="text" v-model="form.name" class="form-control" placeholder="Your Name" required>
              </div>
              <div class="mb-3">
                <input type="email" v-model="form.email" class="form-control" placeholder="Your Email" required>
              </div>
              <div class="mb-3">
                <textarea v-model="form.message" class="form-control" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
              </div>
            </form>
            <div class="text-center mt-5">
              <p class="mb-2">via privata Stefanardo da Vimercate, 28</p>
              <p>20128 Milano</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      frontendTech: [
        { name: 'Vue.js', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'SASS/LESS', level: 85 }
      ],
      backendTech: [
        { name: 'PHP', level: 95 },
        { name: 'Laravel', level: 90 },
        { name: 'MySQL/MariaDB', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'WordPress', level: 85 }
      ],
      devopsTech: [
        { name: 'Docker', level: 85 },
        { name: 'Linux', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'Apache/Nginx', level: 85 },
        { name: 'CI/CD', level: 80 }
      ]
    }
  },
  methods: {
    handleSubmit() {
      // Here you would typically send the form data to a server
      console.log('Form submitted:', this.form)
      alert('Thank you for your message! I will get back to you soon.')
      this.form = { name: '', email: '', message: '' }
    }
  }
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

.service-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  i {
    color: #2563eb;
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
      background-color: #2563eb;
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
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
  }
}
</style>
