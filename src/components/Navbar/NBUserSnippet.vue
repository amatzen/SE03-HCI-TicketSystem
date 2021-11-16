<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ position }}</p>
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
