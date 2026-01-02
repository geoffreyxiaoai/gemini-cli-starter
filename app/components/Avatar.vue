<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  initial: string;
  bgColor: 'default' | 'primary' | 'secondary';
}>();

const bgClass = computed(() => {
  return `bg-${props.bgColor}`;
});
</script>

<template>
  <div class="avatar" :class="bgClass">
    <span class="initial">{{ initial }}</span>
  </div>
</template>

<style scoped>
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  user-select: none;
}

.bg-default {
  background-color: var(--component-bg-color);
  color: var(--text-color);
}

.bg-primary {
  background-color: var(--primary-accent-color);
  color: #fff;
}

.bg-secondary {
  background-color: var(--secondary-accent-color);
  color: var(--component-bg-color);
}
</style>
