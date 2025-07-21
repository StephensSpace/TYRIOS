<template>
  <section class="hero">
    <div class="hero-content">
      <div class="speaker-message-box">
        <img src="../../assets/icons/brand_awareness.png" alt="Brand Awareness Icon" />
        Effective Communication Strategies for Your Website
      </div>
      <h1>{{ title }}</h1>
      <p class="subtitle">{{ props.subtitle }}</p>
      <Form :variant="formVariant ?? 'dropdown'" />
      <div class="benefits-box">
        <div class="benefit" v-for="item in infoSpans" :key="item">
          <img src="../../assets/icons/check.png" aria-hidden="true"/>
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
  min-height: calc(92vh - 72px);
  color: white;
  padding: 4px 0;
  background-color: var(--hero-bg-colour);
  gap: 4px;

  .hero-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    max-width: 720px;

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