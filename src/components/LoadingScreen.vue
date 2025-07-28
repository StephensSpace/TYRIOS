<script setup>
import Header from "./shared/Header.vue";
import Footer from "./shared/Footer.vue";
</script>

<template>
    <div class="loadingpage-body">

        <header>
            <Header />
        </header>

        <main>
            <div class="loading-wrapper">
                <div class="header-subtitle">
                    <h1>
                        We’re working on your analysis…
                    </h1>
                    <p>
                        Your website report is progressing through our analysis stages.
                    </p>
                </div>
                <div class="queue-box">
                    <div class="queue-position">
                        <p>Your position in the queue: </p>
                        <p class="queue-number">6</p>
                    </div>
                    <div class="queue-position">
                        <p>Estimated wait time: </p>
                        <p class="queue-number">~10 minutes</p>
                    </div>
                </div>
                <div class="queue-steps">
                    <div class="step-box">
                        <div class="circle-filled">
                            1
                        </div>
                        <h2>
                            Queued
                        </h2>
                    </div>
                    <div class="step-box">
                        <div class="circle-empty">
                            2
                        </div>
                        <h2>
                            Processing
                        </h2>
                    </div>
                    <div class="step-box">
                        <div class="circle-empty">
                            3
                        </div>
                        <h2>
                            Finalizing
                        </h2>
                    </div>
                    <div class="step-box">
                        <div class="circle-empty">
                            4
                        </div>
                        <h2>
                            Completed
                        </h2>
                    </div>
                </div>
                <p>No need to wait—We will notify you via email whenever
                    your report is ready</p>
            </div>
        </main>

        <footer>
            <Footer />
        </footer>
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

.loadingpage-body {
    @include mixins.dflex-centered;
    flex-direction: column;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    gap: 60px;
    min-height: 100vh;

}

main {
    @include mixins.dflex-centered;
    flex-direction: column;
    max-width: 888px;
    width: 100%;
    gap: 60px;
    flex: 1;

    .queue-steps {
        display: flex;
        gap: 16px;
        width: 100%;

        .step-box {
            @include mixins.dflex-centered;
            flex-direction: column;
            padding: 16px;
            gap: 8px;
            box-sizing: border-box;
            max-width: 202px;
            width: 100%;

            h2 {
                @include mixins.header06;
            }

            .circle-filled {
                @include mixins.dflex-centered;
                width: 64px;
                height: 64px;
                gap: 4px;
                border-radius: 50%;
                padding: 4px;
                background-color: var(--tyrios-purple);
                color: var(--tyrios-white);
                box-sizing: border-box;
            }

            .circle-empty {
                @include mixins.dflex-centered;
                width: 64px;
                height: 64px;
                gap: 4px;
                border-radius: 50%;
                padding: 4px;
                background-color: var(--tyrios-white);
                color: var(--tyrios-purple);
                border: 2px solid #9761FF;
                box-sizing: border-box;
            }
        }
    }

    p {
        display: flex;
        margin: 0;
        font-weight: 400;
        @include mixins.font-style-small;
        gap: 3px;
        text-align: center
    }

    .loading-wrapper {
        @include mixins.dflex-centered;
        flex-direction: column;
        width: 100%;
        gap: 16px;

        .queue-box {
            display: flex;
            justify-content: center;
            gap: 16px;
            flex-wrap: wrap;

            .queue-position {
                display: flex;
                gap: 1px;
                white-space: nowrap;
            }

            .queue-number {
                color: var(--tyrios-purple);
            }
        }

        .header-subtitle {
            display: flex;
            flex-direction: column;
            gap: 8px;

            h1 {
                @include mixins.header05;
                text-align: center;
                font-weight: 600;
            }


        }
    }
}

@media (max-width: 600px) {
    
        .queue-steps {
            .step-box {

                .circle-filled,
                .circle-empty {
                    width: 48px !important;
                    height: 48px !important;
                }
            }
        }
    


}

@media (max-width: 500px) {

    .queue-steps {  
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0;

        .step-box {
            padding: 2px !important;
        }
    }
}
</style>