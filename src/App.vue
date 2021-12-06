<script setup lang="ts"></script>

<template>
  <router-view></router-view>

  <div class="bg-crimson-500"></div>
  <div class="bg-indigo-500"></div>
  <div class="bg-yellowish-500"></div>
  <div class="bg-tealish-500"></div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  background: #f8f8f8;

  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}
</style>
