<template>

    <section class="discover-wrapper">
        <div class="pro-cons-box">
            <div class="cons-box">
                <h5>The Common Mistakes</h5>
                <div class="pro-con-list">
                    <template  v-for="(item) in proConList" :key="item.id">
                        <div class="procon-list-item">
                            <img src="../assets/icons/cross.png" alt="Warning Cross icon">
                            <div class="paragraph-box">
                                <p class="paragraph-header">
                                    {{ item.cons.titleEN }}
                                </p>
                                <p class="paragraph-subtitle">
                                    {{ item.cons.textEN }}
                                </p>
                            </div>
                        </div>

                    </template>

                </div>
            </div>
            <div class="pro-box">
                <h5>Our Framework Fixes This</h5>
                <div class="pro-con-list">
                    <template  v-for="(item) in proConList" :key="item.id">
                        <div class="procon-list-item">
                            <img src="../assets/icons/check.png" alt="Succes icon">
                            <div class="paragraph-box">
                                <p class="paragraph-header">
                                    {{ item.pros.titleEN }}
                                </p>
                                <p class="paragraph-subtitle">
                                    {{ item.pros.textEN }}
                                </p>
                            </div>
                        </div>
                    </template>

                </div>
            </div>
        </div>
        <div class="discover-list-box">
            <h5>
                What You'll Discover
            </h5>
            <p>
                Comprehensive insights about your website's story
            </p>
            <div class="discover-list-items">
                <template v-for="(item) in discoverList" :key="item.id">
                    <div class="list-item">
                        <img :src="item.imgUrl" :alt="item.alt" />
                        <div class="header-column">
                            <h6>{{ item.titleEN }}</h6>
                            <p>
                                {{ item.subtitleEN }}
                            </p>
                        </div>
                    </div>
                </template>
            </div>
        </div>

    </section>

</template>

<script setup lang="ts">
import discoverList from '../data/DiscoverList';
import proConList from '../data/ProConList';
</script>

<style lang="scss">
@use "../styles/_mixins.scss" as mixins;

.discover-wrapper {
    display: flex;
    gap: 24px;
    max-width: 1376px;
    width: 100%;
    margin: 0 auto;

    .paragraph-header {
        @include mixins.font-style-small;
        font-weight: 500;
        margin: 0;
    }

    .paragraph-subtitle {
        @include mixins.font-style-small;
        font-weight: 400;
        margin: 0;
    }

    .procon-list-item {
        display: flex;
        gap: 8px;
    }

    .pro-cons-box {
        display: flex;
        flex-direction: column;
        max-width: 676px;
        width: 100%;
        gap: 24px;

        .pro-con-list {
            display: flex;
            flex-direction: column;
            gap: 16px;

            img {
                width: 24px;
                height: 24px;
            }

            .paragraph-box {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
        }

        .cons-box {
            @include mixins.pro-contra-box;
            background-color: var(--tyrios-error-red);    

            h5 {
                @include mixins.header05;
                color: var(--tyrios-dark-red)
            }

        }

        .pro-box {
            @include mixins.pro-contra-box;
            background-color: var(--tyrios-succes-green);

            h5 {
                @include mixins.header05;
                color: var(--tyrios-strong-green)
            }
        }
    }

    .discover-list-box {
        display: flex;
        flex-direction: column;
        gap: 24px;
        background-color: var(--tyrios-medium-purple);
        max-width: 676px;
        width: 100%;
        border-radius: 2px;
        border: 2px solid;
        padding: 24px;
        border-color: var(--tyrios-medium-purple);
        box-sizing: border-box;

        h5 {
            @include mixins.header05;
        }

        p {
            margin: 0;
            @include mixins.font-style-xsmall;
            font-weight: 400;
        }
    }
}

.discover-list-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 628px;
    width: 100%;
    margin: 0 auto;

    .list-item {
        display: flex;
        gap: 8px;
        width: 100%;
        border-radius: 8px;
        padding: 16px;
        background-color: var(--tyrios-white);
        box-sizing: border-box;

        img {
            width: 48px;
            height: 48px;
        }

        .header-column {
            display: flex;
            flex-direction: column;
            gap: 8px;

            h6 {
                @include mixins.header06;
                text-align: start;
            }

            p {
                @include mixins.font-style-xsmall;
                margin: 0;
                width: 100%;
            }

        }


    }
}
</style>