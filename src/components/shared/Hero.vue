<template>
  <section class="hero">
    <div class="hero-content">
      <div class="speaker-message-box">
        <img src="../../assets/icons/brand_awareness.png" alt="" />
        <p>Effective Communication Strategies for Your Website</p>
      </div>
      <h1>{{ title }}</h1>
      <p class="subtitle">{{ subtitle }}</p>
      <Form :variant="formVariant ?? 'dropdown'" />
      <div class="benefits-box">
        <div class="benefit" v-for="item in infoSpans" :key="item">
          <img src="../../assets/icons/check.png" alt="Green Check Icon" />
          <p>{{ item }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HeroProps } from "../../models/HeroProps";
import Form from "../shared/Form.vue";
const props = defineProps<HeroProps>();
</script>

<style scoped lang="scss">
@use "../../styles/_mixins.scss" as mixins;

.hero {
  @include mixins.dflex-centered;
  height: 844px;
  color: white;
  padding: 4px 0;
  background-color: var(--hero-bg-colour);
  gap: 4px;

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    max-width: 720px;
    height: 644px;

    .benefits-box {
      @include mixins.dflex-centered;
      gap: 24px;

      .benefit {
        @include mixins.benefits-box;
      }
    }

    h1 {
      @include mixins.heading-h1;
    }

    .subtitle {
      @include mixins.hero-subtitle;
    }

    .speaker-message-box {
      @include mixins.speaker-box;
    }
  }
}
</style>