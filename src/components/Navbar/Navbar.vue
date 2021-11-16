<template>
  <header class="py-6 mb-5 bg-white shadow-md">
    <div class="container mx-auto flex">
      <span class="font-bold">Ticket<span class="text-green-500">o</span></span>
      <nav>
        <ul>
          <!-- TODO: Set up router links instead of default a tags -->
          <li><a href="/">Oversigt</a></li>
          <li><a href="/">Kundeadministration</a></li>
          <li><a href="/">Statistik</a></li>
        </ul>
      </nav>

      <NBUserSnippet name="Dorte" position="Kunderådgiver" />
    </div>
  </header>
</template>

<script>
import NBUserSnippet from "./NBUserSnippet.vue";
export default {
  name: "Navbar",
  components: {NBUserSnippet}
}
</script>

<style scoped>

</style>
