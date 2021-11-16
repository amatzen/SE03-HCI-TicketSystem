<template>
  <div>
    <Navbar />
    <router-view></router-view>
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
