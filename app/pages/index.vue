<template>
  <div class="container" @click="navigateTo('/glert')">
    <span class="title">glert</span>
    <div class="actions">
      <Icon name="mdi:cards-outline" size="2rem" @click.prevent="navigateTo('/ebssd2')" />
    </div>
  </div>
</template>

<style scoped>
.actions {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #4a2e1a;
  cursor: pointer;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  cursor: pointer;
  overflow: hidden;
}

.title {
  font-family: 'Libre Barcode 39 Text', serif;
  font-size: 8rem;
  color: #4a2e1a;
  user-select: none;
  animation: floatIn 2.0s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes floatIn {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
