<template>
    <section aria-labelledby="faq-heading" class="faq-wrapper">
        <h3 id="faq-heading">Got Questions? We've got Answers.</h3>

        <div class="faq-box">
            <div>
                <button aria-expanded="false" aria-controls="faq1" id="faq1-button">
                    Was ist dieses Projekt?
                </button>
                <div id="faq1" hidden role="region" aria-labelledby="faq1-button">
                    <p>Das Projekt ist eine Web-App, die …</p>
                </div>
            </div>

            <div>
                <button aria-expanded="false" aria-controls="faq2" id="faq2-button">
                    Wie funktioniert die Anmeldung?
                </button>
                <div id="faq2" hidden role="region" aria-labelledby="faq2-button">
                    <p>Die Anmeldung erfolgt über …</p>
                </div>
            </div>

        </div>

    </section>

</template>

<script setup lang="ts">

</script>

<style lang="scss">
@use "../../styles/_mixins.scss" as mixins;

.faq-wrapper {
    @include mixins.dflex-centered;
    flex-direction: column;
    gap: 24px;
    width: 100%;

    h3 {
        @include mixins.header03;
        max-width: 1344px;
        margin: 0 auto;
    }
}
</style>