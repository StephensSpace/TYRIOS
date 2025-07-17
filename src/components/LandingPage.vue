<script setup>
import Header from "./shared/Header.vue";
import Hero from "./shared/Hero.vue";
import HeroContentStrategic from "../data/HeroContentStrategic.ts";
import DifferenceMaker from "./DifferenceMaker.vue";
import HowTo from "./HowTo.vue"
import TestimonialComponent from "./shared/TestimonialComponent.vue";
import FaqSection from "./shared/FaqSection.vue"
import Footer from "./shared/Footer.vue";
</script>

<template>
  <div class="landing-body">
    <div class="header-hero-box">
      <header>
        <Header />
      </header>
      <Hero :title="HeroContentStrategic.title" :subtitle="HeroContentStrategic.subtitle"
        :infoSpans="HeroContentStrategic.infoSpans" />
    </div>

    <main>
      <DifferenceMaker />
      <HowTo />
      <TestimonialComponent />
      <FaqSection />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss">
@use "../styles/_mixins.scss" as mixins;

header {
  width: 100%;
}

footer {
  width: 100%;

}

.landing-body {
  @include mixins.dflex-centered;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  gap: 60px;

}

.header-hero-box {
  width: 100%;
}

main {
  @include mixins.dflex-centered;
  flex-direction: column;
  max-width: 1440px;
  width: 100%;
  gap: 60px;
}
</style>