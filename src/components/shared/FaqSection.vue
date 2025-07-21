<template>
    <section aria-labelledby="faq-heading" class="faq-wrapper">
        <h3 id="faq-heading">Got Questions? We've got Answers.</h3>

        <div class="faq-box">

            <template v-for="faq in faqButtons" :key="faq.id">
                <div class="faq-item">
                    <button @click="toggle(faq.id)" :aria-expanded="openIds.has(faq.id)" :aria-controls="faq.id"
                        :id="`${faq.id}-button`">
                        {{ faq.titleEN }}

                        <svg class="arrow-icon" width="25" height="24" viewBox="0 0 25 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <mask :id="`${faq.id}-mask`" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                width="25" height="24">
                                <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g :mask="`url(#${faq.id}-mask)`">
                                <path
                                    d="M7.9 15.3751L6.5 13.9751L12.5 7.9751L18.5 13.9751L17.1 15.3751L12.5 10.7751L7.9 15.3751Z"
                                    fill="#2D2C2F" />
                            </g>
                        </svg>
                    </button>
                    

                    <div :id="faq.id" v-if="openIds.has(faq.id)" role="region" :aria-labelledby="`${faq.id}-button`"
                        class="faq-answer">
                        <p>{{ faq.textEN }}</p>
                    </div>
                </div>
            </template>
        </div>
    </section>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import faqButtons from "../../data/FaqButtons";

const openIds = ref<Set<string>>(new Set())

function toggle(id: string) {
    if (openIds.value.has(id)) {
        openIds.value.delete(id)
    } else {
        openIds.value.add(id)
    }
    openIds.value = new Set(openIds.value)
}
</script>

<style lang="scss">
@use "../../styles/_mixins.scss" as mixins;
@use "../../styles/_variables.scss" as variables;

.faq-wrapper {
    @include mixins.dflex-centered;
    justify-content: flex-start;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    min-height: 360px;

    h3 {
        @include mixins.header03;
        max-width: 1344px;
        margin: 0 auto;
    }
}

.faq-box {
    @include mixins.faq-box;

    button {
        @include mixins.faq-button;

        
            @include mixins.font-style-small;
            font-weight: 600;
            
       

        .arrow-icon {
            @include mixins.faq-arrow-icon;
        }

        &[aria-expanded="true"] .arrow-icon {
            transform: rotate(180deg);
        }
    }
}

.faq-answer {
    @include mixins.faq-button;
    width: auto;
    overflow: hidden;

}

.faq-enter-from,
.faq-leave-to {
    max-height: 0;
    opacity: 0;
}

.faq-enter-to,
.faq-leave-from {
    max-height: 500px; // beliebiger Maxwert, der größer als dein Content ist
    opacity: 1;
}

.faq-enter-active,
.faq-leave-active {
    transition: max-height 0.4s ease, opacity 0.4s ease;
}
</style>