<script setup>
// Removed refs and methods related to the panel (email, message, typeEffect, etc.)
// Keep only imports needed for App shell, like the background component
import { ref, onMounted, onBeforeUnmount } from 'vue' // Keep basic imports if needed elsewhere in App.vue
import IconGridBackground from './components/IconGridBackground.vue';

// If any app-level logic remains, keep it here.
// For now, this script might be nearly empty.

</script>

<template>
  <div class="app-container"> <!-- Main container for the App -->
    <!-- Background Elements -->
    <div class="aurora-bg aurora-bg-1"></div>
    <div class="aurora-bg aurora-bg-2"></div>
    <IconGridBackground />
    <div class="blur-overlay"></div>

    <header class="main-header">
        <div class="container">
            <a href="/" class="logo">Novelized</a>
        </div>
    </header>

    <!-- Router View will render the matched component (HomeView) -->
    <div class="content-wrapper">
        <router-view /> <!-- Use router-view to display the route component -->
    </div>

    <footer class="main-footer">
        <div class="container">
            <p>
              &copy; 2024 Novelized. All rights reserved.
              <span class="footer-separator">|</span>
              <router-link to="/affiliation" class="footer-link">Brought to you by DashSoft</router-link>
              <span class="footer-separator">|</span>
              <router-link to="/imprint" class="footer-link">Imprint</router-link>
            </p>
        </div>
    </footer>
  </div>
</template>

<style>
/* Keep all styles here for now (Global + App Shell + Component styles) */

/* --- Global Styles --- */
:root {
    --gradient-primary-start: #ff416c;
    --gradient-primary-end: #ff4b2b;
    --gradient-secondary-start: #00d2ff;
    --gradient-secondary-end: #3a7bd5;

    --background: #0A0A0A;
    --glass-background: rgba(255, 255, 255, 0.06);
    --text-primary: #FFFFFF;
    --text-secondary: rgba(255, 255, 255, 0.75);
    --text-tertiary: rgba(255, 255, 255, 0.5);
    --border: rgba(255, 255, 255, 0.15);

    --font-heading: 'Poppins', 'Inter', sans-serif;
    --font-body: 'Roboto', 'Inter', sans-serif;

    --neon-primary-glow-strong: 0 0 18px 5px rgba(255, 65, 108, 0.5), 0 0 35px 10px rgba(255, 75, 43, 0.35);
    --neon-primary-glow-medium: 0 0 12px 3px rgba(255, 65, 108, 0.45), 0 0 25px 6px rgba(255, 75, 43, 0.3);
    --neon-primary-glow-subtle: 0 0 8px 2px rgba(255, 65, 108, 0.4);

     --neon-secondary-glow-strong: 0 0 18px 5px rgba(0, 210, 255, 0.5), 0 0 35px 10px rgba(58, 123, 213, 0.35);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    overflow: hidden; /* Prevent scrollbars due to absolute elements */
}

/* Base styles applied directly to #app in App.vue */
/* Styles for #app and body from style.css might need adjustment here */

body {
    /* Minimal body styles if #app handles most */
    background-color: var(--background);
}

/* --- Component Specific Styles --- */

/* Styles moved from the old index.html - NOT scoped */

.app-container {
    flex-grow: 1; /* Allow container to fill space */
    display: flex;
    flex-direction: column;
    position: relative; /* Needed for absolute/fixed children positioning */
}

/* Add Blur Overlay Style */
.blur-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    backdrop-filter: blur(90px); /* Adjust blur intensity as needed */
    -webkit-backdrop-filter: blur(90px);
    /* Optional: slight tint */
    /* background: rgba(10, 10, 10, 0.05); */
    z-index: 1; /* Explicitly above icons */
    pointer-events: none;
}

/* Aurora Background Styles */
.aurora-bg {
    position: fixed;
    width: 1500px;
    height: 400px;
    border-radius: 80px;
    filter: blur(80px);
    opacity: 0.55;
    z-index: -1; /* Ensure aurora is explicitly behind */
    pointer-events: none;
    animation: aurora-flow 35s infinite ease-in-out alternate;
}

.aurora-bg-1 {
    background: radial-gradient(circle, var(--gradient-primary-start), transparent 65%);
    top: -150px;
    left: -550px;
    transform: rotate(-25deg);
    animation-delay: -2s;
}

.aurora-bg-2 {
    background: radial-gradient(circle, var(--gradient-secondary-start), transparent 65%);
    bottom: -120px;
    right: -600px;
    opacity: 0.45;
    transform: rotate(20deg);
    animation-name: aurora-flow-2;
}

@keyframes aurora-flow {
    0% { transform: scale(1) rotate(-25deg); }
    50% { transform: scale(1.1, 1.2) rotate(-20deg); }
    100% { transform: scale(0.95, 1.1) rotate(-30deg); }
}

@keyframes aurora-flow-2 {
    0% { transform: scale(1) rotate(20deg); }
    50% { transform: scale(1.15, 1.05) rotate(28deg); }
    100% { transform: scale(1, 0.9) rotate(15deg); }
}

/* Floating Icons Background (from IconGridBackground.vue styles, moved here for clarity) */
.floating-icons-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0; /* Explicitly above aurora */
    pointer-events: none;
    overflow: hidden;
    /* Temporary Debug Background */
    /* background-color: rgba(255, 0, 0, 0.1); */
}

.floating-icon {
     /* Styles for individual icons within the background component */
     /* position, animation-name, etc. are handled in the component */
     animation-timing-function: ease-in-out;
     animation-iteration-count: infinite;
     animation-direction: alternate;
}

/* Float Animations (from IconGridBackground.vue styles, moved here) */
@keyframes float-icon-1 { /* ... */ }
@keyframes float-icon-2 { /* ... */ }
@keyframes float-icon-3 { /* ... */ }

.content-wrapper {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    position: relative;
    z-index: 2; /* Explicitly above blur */
}

/* Header */
.main-header {
    padding: 2rem 0;
    position: absolute; /* Position over content */
    width: 100%;
    top: 0;
    left: 0;
    z-index: 3; /* Explicitly highest */
}

.main-header .container {
    display: flex;
    justify-content: center;
    align-items: center;
     max-width: 1200px; /* Optional: constrain width */
    margin: 0 auto;
    padding: 0 1rem;
}

.logo {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, var(--gradient-primary-start), var(--gradient-primary-end));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: var(--neon-primary-glow-medium);
    text-decoration: none; /* Added */
}

/* Main Content Panel */
.coming-soon-panel {
    background: var(--glass-background);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 20px;
    padding: 3rem 4rem;
    text-align: center;
    border: 1px solid var(--border);
    max-width: 650px;
    width: 90%;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.coming-soon-panel h1 {
    font-family: var(--font-heading);
    font-size: 4rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--gradient-primary-start), var(--gradient-primary-end));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: var(--neon-primary-glow-strong);
}

.subtitle-container {
     min-height: 4.2em;
     position: relative;
     margin-bottom: 2.5rem;
     display: flex;
     justify-content: center;
     align-items: center;
}

.coming-soon-panel p.subtitle {
    font-size: 1.3rem;
    color: var(--text-secondary);
    max-width: 450px;
    opacity: 1;
    white-space: pre-wrap;
}

.subtitle::after {
    content: '|';
    display: inline-block;
    margin-left: 2px;
    opacity: 1;
    animation: blink-caret 0.9s step-end infinite;
    color: var(--text-secondary);
}

@keyframes blink-caret {
    from, to { opacity: 1 }
    50% { opacity: 0 }
}

/* Form Styles */
#signup-form {
    max-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1.5rem;
    text-align: left;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.9rem 1.1rem;
    background-color: rgba(0, 0, 0, 0.25);
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
    color: var(--text-primary);
}

.form-control::placeholder {
    color: var(--text-tertiary);
}

.form-control:focus {
    outline: none;
    border-color: var(--gradient-primary-start);
    box-shadow: 0 0 0 3px rgba(255, 65, 108, 0.2);
}

.btn {
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease;
    width: 100%;
    font-size: 1rem;
}

.btn-primary {
    background: linear-gradient(135deg, var(--gradient-primary-start), var(--gradient-primary-end));
    color: white;
    box-shadow: var(--neon-primary-glow-medium);
}

.btn-primary:hover {
    background: linear-gradient(135deg, #ff5a80, #ff6a4f);
    box-shadow: var(--neon-primary-glow-strong);
    transform: translateY(-2px);
}

.form-message {
    margin-top: 1rem;
    padding: 0.75rem;
    border-radius: 6px;
    font-size: 0.9rem;
}

.form-message.success {
    background-color: rgba(0, 210, 255, 0.15);
    color: var(--gradient-secondary-start);
    border: 1px solid rgba(0, 210, 255, 0.2);
}

.form-message.error {
    background-color: rgba(255, 65, 108, 0.15);
    color: var(--gradient-primary-start);
    border: 1px solid rgba(255, 65, 108, 0.2);
}

/* Footer */
.main-footer {
    padding: 1.5rem 0;
    text-align: center;
    color: var(--text-tertiary);
    font-size: 0.9rem;
    position: relative; /* Ensure it's above fixed background */
    z-index: 2; /* Explicitly above blur */
}

/* Style for the footer link */
.footer-link {
    color: var(--text-secondary); /* Slightly brighter than tertiary */
    text-decoration: none;
    transition: color 0.2s ease, text-shadow 0.2s ease;
    margin: 0 0.25rem; /* Adjust margin slightly for separators */
}

.footer-link:hover {
    color: var(--text-primary);
    text-decoration: underline;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5); /* Subtle white glow on hover */
}

.footer-separator {
    color: var(--text-tertiary); /* Use tertiary color for the pipe */
    margin: 0 0.25rem; /* Match link margin */
    user-select: none; /* Prevent selecting the pipe */
}

/* Vue transition classes */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Media Query for App Layout adjustments */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 1rem; /* Reduce padding on smaller screens */
  }

  .main-header {
    padding: 1.5rem 0; /* Adjust header padding */
  }

  .logo {
     font-size: 2rem; /* Adjust logo size */
  }

  .main-footer {
      padding: 1rem 0;
      font-size: 0.85rem;
  }
}

</style> 