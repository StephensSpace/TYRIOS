<template>
  <form @submit.prevent="onSubmit">
    <div class="input-row">
      <div class="form-group">
        <label for="email">Email address</label>
        <input id="email" type="email" placeholder="Deine E-Mail" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="website">Website Url</label>
        <input id="website" type="url" placeholder="https://website.com" v-model="websiteUrl" required />
      </div>
    </div>

    <div v-if="variant === 'text'" class="form-group">
      <label for="message"></label>
      <textarea id="message"
        placeholder="e.g., Increase brand awareness, generate more leads, improve conversion rates.."
        v-model="message"></textarea>
    </div>

    <div v-else-if="variant === 'dropdown'" class="form-group" role="group" aria-labelledby="selection-label">
      <label id="selection-label" for="selection">Intent for analysis?</label>
      <select id="selection" v-model="dropdownSelection" required aria-required="true"
        aria-describedby="selection-help">
        <option v-for="item in truncatedOptions" :key="item.id || 'default'" :value="item.id" :disabled="item.disabled">
          {{ item.textEN }}
        </option>
      </select>
      <span id="selection-help" class="sr-only">
        Please select an option of the list.
      </span>
    </div>

    <div class="submit-box">
      <button type="submit" class="submit-button">
        Get my free analysis
        <img src="../../assets/icons/arrow.png" aria-hidden="true">
      </button>

      <p class="form-note">{{ note }}</p>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import formDropItems from "../../data/FormDropdown";

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

// Originaltexte speichern
const originalOptions = formDropItems.map(item => ({ ...item }));

// Gekürzte Optionen (reaktiv)
const truncatedOptions = ref([...originalOptions]);

function truncateOptions() {
  truncatedOptions.value = originalOptions.map(item => ({
    ...item,
    textEN: item.textEN.length > 25 ? item.textEN.slice(0, 25) + "…" : item.textEN,
  }));
}

function resetOptions() {
  truncatedOptions.value = [...originalOptions];
}

function handleResize() {
  if (window.innerWidth <= 550) {
    truncateOptions();
  } else {
    resetOptions();
  }
}

onMounted(() => {
  handleResize(); 
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

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

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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

    &::placeholder {
      font-family: 'Poppins', sans-serif;
      @include mixins.font-style-small;
      font-weight: 400;
      color: var(--tyrios-medium-grey);
    }
  }

  textarea {
    min-height: 40px;
    max-height: 300px;
    resize: vertical;
  }

  option {
    @include mixins.dropdown-option;
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
    @include mixins.font-style-xsmall;
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

@media (max-width: 560px) {
  form {
    padding: 12px;
  }
}

@media (max-width: 490px) {
  .input-row {
    flex-direction: column;
  }
}
</style>