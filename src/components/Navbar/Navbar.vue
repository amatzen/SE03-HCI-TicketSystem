<template>
  <header class="py-4 mb-5 bg-white shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <span class="font-bold">Ticket<span class="text-green-500">o</span></span>
      <nav>
        <ul class="flex items-center h-full">
          <li v-for="item of navElements" class="p-2 h-full inline-block">
            <router-link :to="item.to" :title="item.title">{{ item.title }}</router-link>
          </li>
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
  components: {NBUserSnippet},
  data() {
    return {
      navElements: [
        {
          title: 'Oversigt',
          to: '/',
        },
        {
          title: 'Kundeadministration',
          to: '/crm',
        },
        {
          title: 'Statistik',
          to: '/stats',
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
