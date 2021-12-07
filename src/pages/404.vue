<template>
  <div class="text-center">
    <h1 class="text-6xl font-bold text-crimson-500 mb-2">404</h1>
    <p class="text-2xl font-semibold text-gray-800 mb-5">Vi kunne ikke finde den efterspurgte side</p>

    <Button variant="crimson">Tilbage til forsiden</Button>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  name: "NotFoundPage",
  components: {Button},
};
</script>
