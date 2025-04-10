<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// --- Logic moved from App.vue ---
const email = ref('');
const message = ref('');
const messageType = ref(''); // 'success' or 'error'

const sublines = [
    'Novelized: Prepare for something huge.',
    'A new era of storytelling begins...',
    'Where your next obsession awaits.',
    'Stepping into the market with a burst!',
    'Beyond reading, into the story.',
    'The future of fiction is Novelized.',
    'Your next obsession starts here...',
    //'Novelized: Prepare for the Wattpad killer.',
    'A reader lives a thousand lives before they die...',
    'Where stories come to life.',
    'Unlock worlds within words.',
    'Your portal to endless imagination.',
    'The future of storytelling is here.'
];

const currentSublineIndex = ref(0);
const displayedSublineText = ref('');
const charIndex = ref(0);
const isDeleting = ref(false);
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseDuration = 1800;
const timeoutId = ref(null);

const typeEffect = () => {
    const currentFullText = sublines[currentSublineIndex.value];
    let speed;

    if (isDeleting.value) {
        displayedSublineText.value = currentFullText.substring(0, charIndex.value - 1);
        charIndex.value--;
        speed = deletingSpeed;
    } else {
        displayedSublineText.value = currentFullText.substring(0, charIndex.value + 1);
        charIndex.value++;
        speed = typingSpeed;
    }

    if (!isDeleting.value && charIndex.value === currentFullText.length) {
        speed = pauseDuration;
        isDeleting.value = true;
    } else if (isDeleting.value && charIndex.value === 0) {
        speed = pauseDuration / 2;
        isDeleting.value = false;
        currentSublineIndex.value = (currentSublineIndex.value + 1) % sublines.length;
    }

    clearTimeout(timeoutId.value);
    timeoutId.value = setTimeout(typeEffect, speed);
};

const isValidEmail = (emailToTest) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(emailToTest).toLowerCase());
};

const subscribe = () => {
    message.value = '';
    messageType.value = '';
    if (!isValidEmail(email.value)) {
        message.value = 'Please enter a valid email address.';
        messageType.value = 'error';
        return;
    }
    console.log('Subscribing with:', email.value);
    message.value = 'Thanks for subscribing! We\'ll keep you updated.';
    messageType.value = 'success';
    email.value = '';
    setTimeout(() => {
        message.value = '';
        messageType.value = '';
    }, 5000);
};

onMounted(() => {
    timeoutId.value = setTimeout(typeEffect, pauseDuration);
});

onBeforeUnmount(() => {
    clearTimeout(timeoutId.value);
});
</script>

<template>
  <div class="coming-soon-panel">
      <h1>Novelized</h1>
      <div class="subtitle-container">
            <p class="subtitle">{{ displayedSublineText }}</p>
      </div>

      <form id="signup-form" @submit.prevent="subscribe">
          <div class="form-group">
              <input type="email" v-model="email" class="form-control" placeholder="Enter your email for launch updates" required>
          </div>
          <button type="submit" class="btn btn-primary">Notify Me!</button>

            <transition name="fade">
                <div v-if="message" :class="['form-message', messageType]">
                    {{ message }}
                </div>
            </transition>
      </form>
  </div>
</template>

<style scoped>
/* Styles specific to the panel can optionally be moved here */
/* For now, keeping styles global in App.vue */
.coming-soon-panel {
    /* Example if moving styles: */
    /* background: var(--glass-background); ... etc */
}
</style> 