<template>
  <div class="container" @click="navigateTo('/glert')">
    <span class="title">glert</span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  cursor: pointer;
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
