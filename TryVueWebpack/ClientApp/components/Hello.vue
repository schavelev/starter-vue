<!-- ClientApp/components/Hello.vue -->
<template>
  <div>
    <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>
<script src="./Hello.ts" lang="ts"></script>
<style src="./Hello.css"></style>