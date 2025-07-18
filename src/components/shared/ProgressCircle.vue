<template>
  <div
    class="progress-circle"
    :style="{
      '--size': size + 'px',
      '--value': value,
      '--color': color
    }"
  >
    <div class="progress-inner">
      <span v-if="showValue">{{ value }}</span>
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

.progress-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: conic-gradient(
    var(--color) calc(var(--value) * 10%), 
    #ddd 0
  );

  .progress-inner {
    width: calc(var(--size) * 0.6);
    height: calc(var(--size) * 0.6);
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: calc(var(--size) * 0.2);
      color: #333;
      font-weight: bold;
    }
  }
}
</style>