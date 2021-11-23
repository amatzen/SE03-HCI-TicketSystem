<template>
  <div class="flex">
    <div>
      <p class="font-semibold">{{ name }}</p>
      <p class="text-gray-400 text-sm">{{ position }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NBUserSnippet",
  props: {
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
