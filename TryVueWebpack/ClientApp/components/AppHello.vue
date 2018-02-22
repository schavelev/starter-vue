<!-- ClientApp/components/AppHello.vue -->
<template>
  <div>
    Name: <input v-model="name" type="text" />
    <HelloComponent :name="name" :initialEnthusiasm="5" />
  </div>
</template>
<script src="./AppHello.ts" lang="ts"></script>
<style src="./AppHello.css"></style>