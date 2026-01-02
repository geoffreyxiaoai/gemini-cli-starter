<script setup lang="ts">
import { ref } from 'vue'
import { X } from 'lucide-vue-next'

const foodOne = ref('')
const foodTwo = ref('')
const description = ref('')
const tags = ref<string[]>([])
const tagInput = ref('')

const addTag = (event: KeyboardEvent) => {
  if (event.key === ',' || event.key === 'Enter') {
    event.preventDefault()
    
    const value = tagInput.value.trim().replace(/,$/, '')
    
    if (!value) return
    
    if (tags.value.length >= 5) {
      alert('You can only add up to 5 tags.')
      tagInput.value = ''
      return
    }

    if (tags.value.includes(value)) {
      alert('Tag already exists.')
      tagInput.value = ''
      return
    }

    tags.value.push(value)
    tagInput.value = ''
  }
}

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const handleSubmit = () => {
  if (!foodOne.value || !foodTwo.value || !description.value) {
    alert('Please fill out all required fields.')
    return
  }
  
  const comboData = {
    foodOne: foodOne.value,
    foodTwo: foodTwo.value,
    description: description.value,
    tags: tags.value,
  };

  console.log('New Combo Data:', comboData)

  // Clear form
  foodOne.value = ''
  foodTwo.value = ''
  description.value = ''
  tags.value = []
  tagInput.value = ''
};
</script>

<template>
  <div class="create-page">
    <h1 class="page-title">Create a New Combo</h1>
    <form @submit.prevent="handleSubmit" class="create-form">
      <div class="form-group">
        <label for="foodOne">Food One</label>
        <input
          type="text"
          id="foodOne"
          v-model="foodOne"
          required
        />
      </div>
      <div class="form-group">
        <label for="foodTwo">Food Two</label>
        <input
          type="text"
          id="foodTwo"
          v-model="foodTwo"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Tags (comma-separated)</label>
        <input
          type="text"
          id="tags"
          v-model="tagInput"
          @keydown="addTag"
          placeholder="e.g. sweet, savory, crunchy"
        />
        <div class="tags-container" v-if="tags.length > 0">
          <span v-for="(tag, index) in tags" :key="index" class="tag-pill">
            {{ tag }}
            <button type="button" @click="removeTag(index)" class="remove-tag-btn">
              <X :size="14" />
            </button>
          </span>
        </div>
      </div>
      <button type="submit" class="btn submit-btn">Create Combo</button>
    </form>
  </div>
</template>

<style scoped>
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.tag-pill {
  display: inline-flex;
  align-items: center;
  background-color: rgba(134, 229, 255, 0.2);
  color: var(--secondary-accent-color);
  padding: 0.3rem 0.7rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.remove-tag-btn {
  background: none;
  border: none;
  color: inherit;
  margin-left: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.remove-tag-btn:hover {
  opacity: 1;
}
</style>
