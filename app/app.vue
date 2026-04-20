<template>
  <div class="container">
    <span class="title">glert</span>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #eae3d9;
  overflow: hidden;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
}

.title {
  font-family: 'Libre Barcode 39 Text',serif;
  font-size: 8rem;
  color: #673137;
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
