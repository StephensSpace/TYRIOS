<script setup>
import Header from "./shared/Header.vue";
import Footer from "./shared/Footer.vue";
import ResultSectionCard from "./shared/ResultSectionCard.vue";
import resultConfigs from "../data/dummyBackendData/resultObject.ts";
import ResultSummary from "./shared/ResultSummary.vue";
import ScoreExplenation from "./ScoreExplenation.vue";
import OverallResults from "./OverallResults.vue";
</script>

<template>
    <div class="landing-body">
        <header>
            <Header />
        </header>

        <main>
            <OverallResults :scoreData="resultConfigs.score" />
            <ScoreExplenation />
            <div class="dividing-border"></div>
            <h6>Analysis Report</h6>
            <ResultSummary :summaryText="resultConfigs.score" :scoreOverview="resultConfigs.sections" />
            <ResultSectionCard v-for="(section, index) in resultConfigs.sections" :key="index" :resultData="section" />
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

.header-hero-box {
    width: 100%;
}

main {
    @include mixins.dflex-centered;
    flex-direction: column;
    max-width: 888px;
    width: 100%;
    gap: 32px;
}

h6 {
    @include mixins.header06;
    text-align: start;
}
</style>