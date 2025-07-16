<script setup>
import Header from "./shared/Header.vue";
import Hero from "./shared/Hero.vue";
import HeroContentStrategic from "../data/HeroContentStrategic.ts";
import DifferenceMaker from "./DifferenceMaker.vue";
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

    </main>
  </div>
</template>

<style lang="scss">
@use "../styles/_mixins.scss" as mixins;
header {
  width: 100%;
  height: 60px;
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
  width: 100%;
  gap: 60px;
}

</style>