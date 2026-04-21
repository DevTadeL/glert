<template>
  <div class="container" @click="navigateTo('/')">
    <img src="/glert.svg" class="logo" alt="glert" />
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

.logo {
  width: 340px;
  animation: floatIn 2.0s cubic-bezier(0.16, 1, 0.3, 1) both;
  user-select: none;
  pointer-events: none;
  -webkit-user-drag: none;
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
