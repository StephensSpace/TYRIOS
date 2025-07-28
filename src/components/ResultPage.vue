<script setup>
import Header from "./shared/Header.vue";
import Footer from "./shared/Footer.vue";
import ResultSectionCard from "./shared/ResultSectionCard.vue";
import resultConfigs from "../data/dummyBackendData/resultObject.ts";
import ResultSummary from "./shared/ResultSummary.vue";
import ScoreExplenation from "./ScoreExplenation.vue";
import OverallResults from "./OverallResults.vue";
import Overlay from "./shared/Overlay.vue";
import { ref } from 'vue'
import { watch } from "vue";

const showOverlay = ref(false)

watch(showOverlay, (visible) => {
  const body = document.body;
  if (visible) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});

</script>

<template>
    <div class="landing-body" id="landing-body">
        <header>
            <Header />
        </header>

        <main>
            <OverallResults :scoreData="resultConfigs.score" @open-overlay="showOverlay = true" />
            <ScoreExplenation />
            <div class="dividing-border"></div>
            <h2>Analysis Report</h2>
            <ResultSummary :summaryText="resultConfigs.score" :scoreOverview="resultConfigs.sections" />
            <ResultSectionCard v-for="(section, index) in resultConfigs.sections" :key="index" :resultData="section" />
        </main>

        <footer>
            <Footer />
        </footer>
        <div v-if="showOverlay" class="overlay-backdrop">
            <!-- Dein zentriertes Overlay -->
            <Overlay @close="showOverlay = false" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../styles/_mixins.scss" as mixins;

header {
    width: 100%;
}

footer {
    width: 100%;

}

.dividing-border {
    max-width: 888px;
    width: 100%;
    height: 0px;
    border: 1px solid #969A9E;
    box-sizing: border-box;
}

.landing-body {
    @include mixins.dflex-centered;
    flex-direction: column;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    gap: 60px;

}

main {
    @include mixins.dflex-centered;
    flex-direction: column;
    max-width: 888px;
    width: 100%;
    gap: 32px;
}

h2 {
    @include mixins.header06;
    text-align: start;
}

.overlay-backdrop {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw; 
  height: 100%; 
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex; 
  justify-content: center;
  align-items: center;
  z-index: 9999; 
  backdrop-filter: blur(4px); 
}

</style>