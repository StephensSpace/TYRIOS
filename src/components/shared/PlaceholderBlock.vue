<template>
  <div :style="blockStyle" class="placeholder">
    <slot>{{ text }}</slot>
  </div>
</template>

<script>
export default {
  name: "PlaceholderBlock",
  props: {
    text: {
      type: String,
      default: "Placeholder Component",
    },
    height: {
      type: String,
      default: "200px", // Standardhöhe
    }
  },
  computed: {
    blockStyle() {
      return {
        background: "#E6E6E6",
        height: this.height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#333"
      };
    },
  },
};
</script>

<style scoped lang="scss">
@use "../../styles/_mixins.scss" as mixins;
.placeholder {
  @include mixins.font-style-medium;  
}
</style>