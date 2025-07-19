<template>
    <section class="overlay-wrapper">
        <div class="connected-head-wrap">
            <div class="img-box">
                <img src="../../assets/icons/close_cross.png" alt="Close Icon" @click="emit('close')" class="cross">
            </div>
            <div class="connected-box">
                <div class="join-subs">
                    <img src="../../assets/icons/groups_black.png" alt="Group Icon">
                    <p>Join 1,000+ subscribers</p>
                </div>
                <h5>Stay Connected with TYRIOS</h5>
                <p class="subtitle">
                    Get Exclusive Digital Insights, Updates & Resources
                </p>
                <p>
                    Join thousands of businesses receiving our weekly newsletter with
                    tips, resources, updates, and ideas to help you grow.
                </p>
                <div class="benefit-box">
                    <img src="../../assets/icons/check.png" alt="Check Icon">
                    <p>Actionable guides and strategies</p>
                </div>
                <div class="benefit-box">
                    <img src="../../assets/icons/check.png" alt="Check Icon">
                    <p>Product updates and important announcements</p>
                </div>
            </div>
        </div>
        <form @submit.prevent="submitForm" class="registration-form">
            <div class="input-label-box">
                <label for="email" class="sr-only">Email address</label>
                <input id="email" type="email" v-model="email" placeholder="your@email.com" autocomplete="email"
                    required aria-label="Email address" />
            </div>
            <button type="submit">
                <img src="../../assets/icons/mail.png" alt="Mail icon">
                <p>
                    Register Now
                </p>
            </button>
        </form>
        <p class="unsubscribe">Unsubscribe anytime. We respect your<a href="#">privacy.</a></p>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');

function submitForm() {
    console.log('Submitted Email:', email.value);

}

const emit = defineEmits<{
    (e: 'close'): void
}>()
</script>

<style lang="scss">
@use '../../styles/mixins' as mixins;

.overlay-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 484px;
    width: 100%;
    gap: 24px;
    background: var(--tyrios-white);
    opacity: 1;
    border-radius: 8px;
    padding: 24px;
    box-sizing: border-box;

    .cross {
        cursor: pointer;
    }
    
    h5 {
        @include mixins.header05;
        height: 32px;
        display: flex;
        align-items: center;
    }

    img {
        width: 24px;
        height: 24px;
    }

    p {
        margin: 0;
        font-weight: 400;
        @include mixins.font-style-xsmall;
    }

    .img-box {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    .connected-head-wrap {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
    }

    .connected-box {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;

        .join-subs {
            display: flex;
            gap: 4px;

        }

        .subtitle {
            font-weight: 500;
            @include mixins.font-style-small;
            margin: 0;
            height: 32px;
            display: flex;
            align-items: center;
        }

        .benefit-box {
            display: flex;
            width: 100%;
            gap: 8px;
        }
    }

    .registration-form {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .input-label-box {
            display: flex;
            flex-direction: column;
            gap: 8px;

            input {
                width: 100%;
                box-sizing: border-box;
                border: 1px solid #969A9E;
                height: 40px;
                border-radius: 4px;
                display: inline-flex;
                gap: 8px;
                padding: 8px;

                &::placeholder {
                    font-family: 'Poppins', sans-serif;
                    @include mixins.font-style-small;
                    font-weight: 400;
                    color: var(--tyrios-medium-grey);

                }
            }
        }

        button {
            @include mixins.form-button;
        }

    }

    .unsubscribe {
        font-size: 12px;
        line-height: 20px;
        font-weight: 400;
        display: flex;
        gap: 3px;

        a {
            font-weight: 400;
            color: var(--tyrios-purple);
        }
    }

}
</style>