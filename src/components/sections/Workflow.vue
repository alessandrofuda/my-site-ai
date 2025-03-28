<template>
  <section id="workflow" class="workflow-section section-padding bg-light">
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
</template>

<style lang="scss" scoped>
.workflow-section{
  background: url('../../assets/bg-notes.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
  background-attachment: fixed;
  position: relative;
  right: 0;
  left: 0;
  // min-height: 100vh; /* Ensure it takes up the full viewport height */
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
</style>
