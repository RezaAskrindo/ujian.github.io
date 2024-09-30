<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="card">
    <div class="card-body">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  color: var(--color-text);
  word-wrap: break-word;
  background-color: var(--color-background);
  background-clip: border-box;
  border: 2px solid var(--color-border);
  border-radius: .75rem;
}

.card:hover {
  border-color: var(--color-border-hover);
}

.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
}
</style>