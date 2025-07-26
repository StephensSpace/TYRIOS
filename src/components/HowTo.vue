<template>
    <section class="how-to-body">
        <div class="h2-subtitle-box">
            <h2>How It Works</h2>
            <p>Get comprehensive website analysis in three simple steps</p>
        </div>
        <div class="steps-wrapper">
            <template v-for="(item, index) in howToList" :key="item.id">
                <div class="three-steps-box" :aria-label="`Step ${item.id}: ${item.title}`" role="group">
                    <div class="step-circle" aria-hidden="true">
                        {{ item.id }}
                    </div>
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.subtitle }}</p>
                </div>
                <img v-if="index !== howToList.length - 1" src="../assets/icons/arrow_black.svg"
                    alt="Arrow to next step" class="step-arrow" />
            </template>
        </div>

    </section>
</template>

<script setup lang="ts">
import howToList from '../data/HowTo';

</script>

<style scoped lang="scss">
@use "../styles/_mixins.scss" as mixins;

.how-to-body {
    @include mixins.dflex-centered;
    flex-direction: column;
    width: 100%;
    background-color: var(--how-to-bg-colour);
    max-width: 1440px;
    padding: 32px 48px;
    gap: 24px;
    opacity: 1;
    box-sizing: border-box;
}

.h2-subtitle-box {
    @include mixins.dflex-centered;
    flex-direction: column;
    gap: 16px;
    max-width: 1344px;
    width: 100%;
    margin: 0 auto;

    h2 {
        @include mixins.header03;
    }

    p {
        @include mixins.dflex-centered;
        @include mixins.font-style-medium;
        font-weight: 400;
        margin: 0;
    }
}

.steps-wrapper {

    @include mixins.dflex-centered;
    gap: 24px; // Abstand zwischen den Box
    margin-bottom: 32px;

    .step-circle {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-color: var(--tyrios-purple);
        color: white;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        @include mixins.font-style-medium;
    }

    .three-steps-box {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        padding: 16px;
        gap: 8px;
        max-width: 394.67px;
        box-sizing: border-box;
        height: 212px;

        h3 {
            @include mixins.header06;
        }

        p {
            @include mixins.how-to-subtitle;
        }

        .step-arrow {
            display: flex;

        }
    }
}

@media (max-width: 940px) {
    .steps-wrapper {
        flex-wrap: wrap;
        /* ab hier dürfen die Boxen umbrechen */
        flex-direction: column;
    }
}
</style>