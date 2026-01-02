<script setup lang="ts">
import Avatar from '~/components/Avatar.vue';
</script>

<template>
  <div class="preview-page">
    <h1 class="page-title">Component Preview</h1>
    
    <section class="preview-section">
      <h2>Avatar Component</h2>
      <div class="avatar-examples">
        <div class="example">
          <Avatar initial="D" bgColor="default" />
          <p>Default</p>
        </div>
        <div class="example">
          <Avatar initial="P" bgColor="primary" />
          <p>Primary</p>
        </div>
        <div class="example">
          <Avatar initial="S" bgColor="secondary" />
          <p>Secondary</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.preview-page {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  margin-bottom: 2rem;
  text-align: center;
}

.preview-section {
  background-color: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.preview-section h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.avatar-examples {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.example {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
</style>
