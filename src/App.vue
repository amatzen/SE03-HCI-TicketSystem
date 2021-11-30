<script setup lang="ts">
</script>

<template>
  <router-view></router-view>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}
</style>
