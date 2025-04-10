<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import {
  Book,
  PenTool,
  Feather,
  Scroll,
  Keyboard,
  BookOpen,
  Library,
  FileText,
  Edit3,
  Type,
  Glasses,
  MessageSquare
} from 'lucide-vue-next';

// Define the pool of icons to choose from
const iconPool = [
  Book, PenTool, Feather, Scroll, Keyboard, BookOpen, Library, FileText, Edit3, Type, Glasses, MessageSquare
];

const numIcons = 45; // Increased number slightly
const icons = ref([]);
const mouseX = ref(window.innerWidth / 2);
const mouseY = ref(window.innerHeight / 2);

const updateMousePosition = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

// Function to calculate icon style, including enhanced mouse interaction
const getIconStyle = (icon) => {
  const dx = mouseX.value - icon.x;
  const dy = mouseY.value - icon.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const repelStrength = 120; // Slightly stronger repel
  const maxDist = 280; // Slightly larger interaction radius

  let tx = 0;
  let ty = 0;
  let scaleFactor = 1;
  let finalOpacity = icon.opacity;

  if (dist < maxDist && dist > 0) { // Added dist > 0 check
    const force = (maxDist - dist) / maxDist; // Proximity factor (0 to 1)
    // Repel effect
    tx = -(dx / dist) * force * repelStrength;
    ty = -(dy / dist) * force * repelStrength;
    // Scale effect
    scaleFactor = 1 + force * 0.2; // Scale up to 1.2 when very close
    // Opacity effect
    finalOpacity = Math.min(0.4, icon.opacity + force * 0.2); // Increase opacity, cap at 0.4
  } else if (dist === 0) {
      // Apply max effect if directly on icon
      scaleFactor = 1.2;
      finalOpacity = 0.4;
  }


  return {
    position: 'absolute',
    top: `${icon.y}px`,
    left: `${icon.x}px`,
    width: `${icon.size}px`,
    height: `${icon.size}px`,
    opacity: finalOpacity,
    color: 'var(--text-secondary)',
    animationName: icon.animationName, // Apply random animation name
    animationDuration: `${icon.duration}s`,
    animationDelay: `${icon.delay}s`,
    transform: `translate(${tx}px, ${ty}px) scale(${scaleFactor})`,
    // Faster transition for more responsive feel
    transition: 'transform 0.15s ease-out, opacity 0.15s ease-out'
  };
};

onMounted(() => {
  const animationNames = ['float-icon-1', 'float-icon-2', 'float-icon-3'];
  for (let i = 0; i < numIcons; i++) {
    const size = Math.random() * 30 + 20; // Size between 20px and 50px
    icons.value.push({
      id: i,
      component: iconPool[Math.floor(Math.random() * iconPool.length)],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: size,
      opacity: Math.random() * 0.15 + 0.05, // Base opacity 0.05-0.20 (Increased min)
      duration: Math.random() * 30 + 40, // Animation duration 40s-70s
      delay: Math.random() * -70, // Stagger animation start
      animationName: animationNames[Math.floor(Math.random() * animationNames.length)] // Assign random animation
    });
  }
  window.addEventListener('mousemove', updateMousePosition);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateMousePosition);
});

</script>

<template>
  <div class="floating-icons-background">
    <component
      v-for="icon in icons"
      :key="icon.id"
      :is="icon.component"
      class="floating-icon"
      :style="getIconStyle(icon)"
      :stroke-width="1.5"
    />
  </div>
</template>

<style scoped>
.floating-icons-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Below blur overlay, above aurora */
  pointer-events: none; /* Prevent interactions */
  overflow: hidden;
}

.floating-icon {
  /* animation-name is now set via inline style */
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

/* Define multiple float animations */
@keyframes float-icon-1 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  50% { transform: translate(25px, 35px) rotate(6deg); }
  100% { transform: translate(-20px, -30px) rotate(-4deg); }
}

@keyframes float-icon-2 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  50% { transform: translate(-30px, 20px) rotate(-5deg); }
  100% { transform: translate(20px, -35px) rotate(3deg); }
}

@keyframes float-icon-3 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  50% { transform: translate(15px, -40px) rotate(4deg); }
  100% { transform: translate(-25px, 25px) rotate(-6deg); }
}

/* Note: The mouse repel/scale transform is applied via inline style and overrides the keyframe transform */
</style> 