<template>
  <section id="consulting" class="section-padding">
    <div class="container">
      <h2 class="text-center mb-5">{{ $t('consulting.title') }}</h2>
      <div class="row g-4">
        <div class="col-md-6">
          <div class="consulting-card">
            <h3>{{ $t('consulting.whoAmI') }}</h3>
            <p v-html="$t('consulting.whoAmIDesc')"></p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="consulting-card">
            <h3>{{ $t('consulting.target') }}</h3>
            <p v-html="$t('consulting.targetDesc')"></p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="consulting-card">
            <h3>{{ $t('consulting.what') }}</h3>
            <p v-html="$t('consulting.whatDesc')"></p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="consulting-card">
            <h3>{{ $t('consulting.benefits') }}</h3>
            <p v-html="$t('consulting.benefitsDesc')"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
</style>
