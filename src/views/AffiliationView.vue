<template>
  <div class="affiliation-container">
    <h1>Our Relationship with DashSoft</h1>

    <!-- Quick Summary -->
    <p class="summary">
      <strong>In Short:</strong> Novelized utilizes resources and infrastructure from DashSoft to help bring our platform to life. While DashSoft is a vital partner, Novelized operates as an independent entity.
    </p>

    <hr class="separator">

    <!-- Detailed Explanation -->
    <h2>The Details</h2>
    <p>
      Novelized is an independent project focused on bringing the future of storytelling to life.
      To make this vision a reality, we leverage the robust infrastructure and resources provided by DashSoft.
      This includes utilizing their server infrastructure and benefiting from their technical expertise.
    </p>
    <p>
      While DashSoft provides essential support that helps power Novelized, it's important to clarify that Novelized operates as its own entity.
      DashSoft does not own Novelized, but their contribution is vital to our development and operation.
      We are grateful for their partnership in helping us build this platform for writers and readers.
    </p>
    <router-link to="/" class="back-link">Go Back Home</router-link>
  </div>
</template>

<script setup>
// No specific script logic needed for this simple informational page
</script>

<style scoped>
.affiliation-container {
  max-width: 850px;
  width: 90%; /* Make width responsive, constrained by max-width */
  margin: 2rem auto;
  padding: 2rem 3rem;
  background: var(--glass-background);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid var(--border);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  color: var(--text-primary);
  text-align: left; /* Align text to the left for readability */
}

.affiliation-container h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center; /* Center the heading */
   background: linear-gradient(135deg, var(--gradient-primary-start), var(--gradient-primary-end));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: var(--neon-primary-glow-subtle);
}

/* Style for the summary */
.summary {
  font-size: 1.15rem; /* Slightly larger */
  color: var(--text-primary); /* Brighter text */
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05); /* Subtle background highlight */
  border-left: 3px solid var(--gradient-primary-start);
  border-radius: 4px;
}

.separator {
  border: none;
  height: 1px;
  background-color: var(--border);
  margin: 2rem 0;
}

.affiliation-container h2 {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  text-align: center; /* Center the sub-heading */
}

.affiliation-container p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
}

.back-link {
  display: inline-block; /* Allow margin and padding */
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, var(--gradient-secondary-start), var(--gradient-secondary-end));
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: var(--neon-secondary-glow-strong); /* Use secondary glow */
  text-align: center; /* Center text if display block */
}

.back-link:hover {
  background: linear-gradient(135deg, #1ad0ff, #5a8ce0); /* Slightly adjusted hover */
  box-shadow: 0 0 20px 6px rgba(0, 210, 255, 0.6), 0 0 40px 12px rgba(58, 123, 213, 0.4); /* Stronger secondary glow */
  transform: translateY(-2px);
}

/* Media Query for smaller screens */
@media (max-width: 768px) {
  .affiliation-container {
    padding: 1.2rem 1rem; /* Further reduced padding */
    margin: 1rem auto; /* Further reduced margin */
  }

  .affiliation-container h1 {
    font-size: 1.8rem; /* Further reduced heading size */
    margin-bottom: 1rem;
  }

  .affiliation-container h2 {
    font-size: 1.3rem; /* Further reduced sub-heading size */
     margin-bottom: 0.8rem;
  }

  .summary {
      font-size: 1rem; /* Adjust summary font size */
      padding: 0.8rem;
  }
  
  .affiliation-container p {
    font-size: 0.95rem; /* Further reduced paragraph font size */
    line-height: 1.6;
  }

  .back-link {
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
  }
}
</style> 