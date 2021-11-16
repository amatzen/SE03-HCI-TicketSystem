<template>
  <div>
    <Navbar />
    <div class="container mx-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";
export default {
  name: "DefaultLayout",
  components: {Navbar}
}
</script>

<style scoped>

</style>
