<template>
  <div class="text-center">
    <h1 class="text-6xl font-bold mb-2">404</h1>
    <p class="text-2xl font-semibold text-gray-800 mb-5">
      Vi kunne ikke finde den efterspurgte side
    </p>
    <Button variant="tealish" @click="goBack()">Gå tilbage</Button>
  </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  name: "NotFoundPage",
  components: { Button },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
