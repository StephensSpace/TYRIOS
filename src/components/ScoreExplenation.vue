<template>
    <section class="explain-wrapper">
        <h5>How Our Scoring System Works?</h5>
        <p>Our scoring system rates each key area
            of your website on a scale from 1 to 10,
            making it easy to understand where you stand
            and where you can improve.</p>
        <div class="score-explain">
            <div class="score-explain-card">
                <div class="score-label-explain">
                    <p class="one-four">
                        1-4
                    </p>
                    <div class="label-red">
                        Poor
                    </div>
                </div>
                <p>Room for improvement. Address these areas
                    to boost your website’s effectiveness.</p>
            </div>
            <div class="score-explain-card">
                <div class="score-label-explain">
                    <p class="five-seven">
                        5-7
                    </p>
                    <div class="label-yellow">
                        Average
                    </div>
                </div>
                <p>These sections are functional but could improve.
                    Implement our suggestions to go from average to
                    excellent.</p>
            </div>
            <div class="score-explain-card">
                <div class="score-label-explain">
                    <p class="eight-ten">
                        8-10
                    </p>
                    <div class="label-green">
                        Good
                    </div>
                </div>
                <p>
                    Strong performance here. Minor enhancements may
                    be needed to reach top standards.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
@use '../styles/mixins' as mixins;

.explain-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    h5 {
        @include mixins.header05;
        text-align: start;
    }

    p {
        margin: 0;
        @include mixins.font-style-small;
        font-weight: 400;
    }

    .score-explain {
        display: flex;
        gap: 24px;
        border-radius: 8px;
        width: 100%;

        .score-explain-card {
            display: flex;
            flex-direction: column;
            background-color: var(--tyrios-white);
            border: 2px solid #F1EBFF;
            max-width: 280px;
            width: 100%;
            border-radius: 8px;
            gap: 8px;
            padding: 16px;
            box-sizing: border-box;
        }

        .score-label-explain {
            display: flex;
            gap: 8px;
            width: 100%;

            .one-four {
                @include mixins.font-style-medium;
                font-weight: 600;
                color: var(--tyrios-dark-red);
            }

            .five-seven {
                @include mixins.font-style-medium;
                font-weight: 600;
                color: var(--tyrios-warning-yellow);
            }

            .eight-ten {
                @include mixins.font-style-medium;
                font-weight: 600;
                color: var(--tyrios-strong-green);
            }

            .label-red {
                max-width: 40px;
                width: 100%;
                padding-right: 4px;
                padding-left: 4px;
                gap: 4px;
                background: var(--tyrios-dark-red);
                height: 24px;
                border-radius: 4px;
                color: var(--tyrios-white);
            }

            .label-yellow {
                max-width: 64px;
                width: 100%;
                padding-right: 4px;
                padding-left: 4px;
                gap: 4px;
                background: var(--tyrios-warning-yellow);
                height: 24px;
                border-radius: 4px;
                color: var(--tyrios-white);
            }

            .label-green {
                max-width: 64px;
                width: 100%;
                padding-right: 4px;
                padding-left: 4px;
                gap: 4px;
                background: var(--tyrios-strong-green);
                height: 24px;
                border-radius: 4px;
                color: var(--tyrios-white);
            }
        }

    }


}

@media (max-width: 600px) {
    .score-explain {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>