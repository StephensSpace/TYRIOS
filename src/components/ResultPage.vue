<script setup>
import Header from "./shared/Header.vue";
import Footer from "./shared/Footer.vue";
import ResultSectionCard from "./shared/ResultSectionCard.vue";
import resultConfigs from "../data/dummyBackendData/resultObject.ts";
</script>

<template>
    <div class="landing-body">
        <header>
            <Header />
        </header>

        <main>
            <ResultSectionCard :resultData="resultConfigs.sections.storyMessage" />
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
    max-width: 888px;
    width: 100%;
    gap: 60px;
}
</style>