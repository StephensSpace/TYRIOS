<template>
  <div class="progress-circle" :style="{
    '--size': size + 'px',
    '--value': value,
    '--color': color
  }"
  role="img"
  :aria-label="`Rating ${value} out of 10`">
    <div class="progress-inner">
      <div class="rating-number" v-if="showValue">
        <p class="value" :style="{ color: color }">{{ value }}</p>
        <p class="ten">/10</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


const props = defineProps<{
  size?: number;
  value?: number;
  showValue: boolean | undefined;
}>();

const size = props.size ?? 100;
const showValue = props.showValue;
const value = props.value ?? 5;


const color =
  value < 3.3 ? "var(--tyrios-dark-red)" :
    value < 6.6 ? "var(--tyrios-warning-yellow)" :
      "var(--tyrios-strong-green)";
</script>

<style lang="scss" scoped>
@use '../../styles/mixins' as mixins;

.progress-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: conic-gradient(var(--color) calc(var(--value) * 10%),
      #ddd 0);

  .progress-inner {
    width: calc(var(--size) * 0.6);
    height: calc(var(--size) * 0.6);
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    .rating-number {
      display: flex;
      width: fit-content;

      .value {
        @include mixins.dflex-centered;
        @include mixins.font-style-small;
        font-weight: 600;
        margin: 0;
        width: 16px;
        height: 32px;
      }

      .ten {
        @include mixins.font-style-small;
        margin: 0;
        color: var(--tyrios-medium-grey);
        display: flex;
        align-items: center;
      }
    }
  }
}

@media (max-width: 400px) {
  .progress-circle {
    --size: 40px;
  }
}

</style>