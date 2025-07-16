<template>
  <form @submit.prevent="onSubmit">
    <!-- FIXE INPUTS IN EINER ROW -->
    <div class="input-row">
      <div class="form-group">
        <label for="email">E-Mail</label>
        <input id="email" type="email" placeholder="Deine E-Mail" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="website">URL deiner Website</label>
        <input id="website" type="url" placeholder="https://deine-website.de" v-model="websiteUrl" required />
      </div>
    </div>

    <div v-if="variant === 'text'" class="form-group">
      <label for="message">Beschreibe dein Anliegen</label>
      <textarea id="message" placeholder="Ich wünsche mir ..." v-model="message"></textarea>
    </div>

    <div v-else-if="variant === 'dropdown'" class="form-group">
      <label for="selection">Intent for analysis?</label>
      <select id="selection" v-model="dropdownSelection" required>
        <option disabled value="">Bitte auswählen</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>

    <div class="submit-box">
      <button type="submit" class="submit-button">
        <p>Get my free analysis</p>
        <img src="../../assets/icons/arrow.png" alt="Arrow right">
      </button>

      <p class="form-note">{{ note }}</p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  variant: {
    type: String,
    default: "dropdown", // 'text' oder 'dropdown'
  },
  note: {
    type: String,
    default: "No credit card required. Actionable insides.",
  },
});

const email = ref("");
const websiteUrl = ref("");
const message = ref("");
const dropdownSelection = ref("");

function onSubmit() {
  // laters: send Data to Backend Queque
  console.log("Form submitted", {
    email: email.value,
    websiteUrl: websiteUrl.value,
    message: message.value,
    dropdownSelection: dropdownSelection.value,
  });
}

</script>

<style scoped lang="scss">
@use "../../styles/_mixins.scss" as mixins;

form {
  @include mixins.dflex-centered;
  box-sizing: border-box;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 4px 8px 0px #00000029;
  background: var(--tyrios-white);
  padding: 24px;
  gap: 24px;
  border-radius: 8px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  label {
    font-weight: 600;
    color: #333;
  }

  input,
  textarea,
  select {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
}

.describe-intend-box {
  width: 100%;
}

.input-row {
  display: flex;
  width: 100%;
  gap: 24px;
}

.submit-box {
  @include mixins.dflex-centered;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  
  p {
    margin-block: 0;
    width: 100%;
    color: var(--tyrios-dark-grey);
    text-align: center;
  }

  button {
    @include mixins.form-button;
    width: 100%;
    
  }
 
}
</style>