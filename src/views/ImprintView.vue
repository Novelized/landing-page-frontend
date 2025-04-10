<template>
  <div class="imprint-container">
    <h1>Imprint</h1>

    <p><strong>Responsible for the content of this website:</strong></p>
    <p>
      Novelized<br>
      Represented by: Julian Richter<br> 
      Hausenerstrasse 2<br>
      97854 Steinfeld/Hausen<br>
      Germany
    </p>

    <h2>Contact Information</h2>
    <p>
      <strong>Email:</strong> contact@novelized.online<br>
      <!-- Phone line removed -->
    </p>

    <!-- Add other legally required information below -->
    <!-- Examples:
    <h2>Represented by:</h2>
    <p>[Name of Representative(s)]</p>

    <h2>Register Entry:</h2>
    <p>
      Register Court: [Your Register Court]
      Register Number: [Your Register Number]
    </p>

    <h2>VAT ID:</h2>
    <p>
      VAT identification number according to §27a Value Added Tax Act:
      [Your VAT ID]
    </p>

    <h2>Dispute Resolution:</h2>
    <p>
      The European Commission provides a platform for online dispute resolution (OS):
      <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.
      You can find our email address in the imprint above.
      We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
    </p>
    -->

    <p class="placeholder-notice">
      <strong>Please review and complete any additional legally required information for your location (e.g., Register Entry, VAT ID, specific dispute resolution clauses if applicable).</strong>
    </p>

    <router-link to="/" class="back-link">Go Back Home</router-link>

  </div>
</template>

<script setup>
// No specific script logic needed
</script>

<style scoped>
/* Using similar styling to AffiliationView for consistency */
.imprint-container {
  max-width: 850px; /* Match affiliation width */
  width: 90%;
  margin: 2rem auto;
  padding: 2rem 3rem;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  color: var(--text-primary);
  text-align: left;
}

.imprint-container h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(135deg, var(--gradient-primary-start), var(--gradient-primary-end));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: var(--neon-primary-glow-subtle);
}

.imprint-container h2 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 0.8rem;
  color: var(--text-secondary);
}

.imprint-container p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.imprint-container p strong {
    color: var(--text-primary);
}

.imprint-container a {
    color: var(--gradient-secondary-start);
    text-decoration: none;
    transition: color 0.2s ease;
}

.imprint-container a:hover {
    color: var(--gradient-secondary-end);
    text-decoration: underline;
}

.placeholder-notice {
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(255, 215, 0, 0.1); /* Subtle yellow highlight */
    border-left: 3px solid #FFD700; /* Gold color */
    border-radius: 4px;
    color: #FFD700;
}

.placeholder-notice strong {
    color: #FFEB3B; /* Brighter yellow */
}

.back-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, var(--gradient-secondary-start), var(--gradient-secondary-end));
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: var(--neon-secondary-glow-strong);
  text-align: center;
}

.back-link:hover {
  background: linear-gradient(135deg, #1ad0ff, #5a8ce0);
  box-shadow: 0 0 20px 6px rgba(0, 210, 255, 0.6), 0 0 40px 12px rgba(58, 123, 213, 0.4);
  transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .imprint-container {
    padding: 1.2rem 1rem;
    margin: 1rem auto;
  }

  .imprint-container h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .imprint-container h2 {
    font-size: 1.3rem;
     margin-bottom: 0.8rem;
  }

  .imprint-container p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .back-link {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
  }
}
</style> 