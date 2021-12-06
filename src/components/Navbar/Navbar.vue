<template>
  <header class="py-4 mb-10 bg-white shadow-sm">
    <div class="container mx-auto flex justify-between items-center">
      <span class="font-bold text-lg tracking-tight select-none"
        >Ticket<span class="text-tealish-500">o</span>
      </span>
      <nav>
        <ul class="flex items-center h-full">
          <li v-for="item of navElements" class="p-2 h-full inline-block">
            <router-link :to="item.to" :title="item.title" class="font-semibold focus:text-indigo-500 hover:underline ; " exact-active-class="text-indigo-800">{{
              item.title
            }}</router-link>
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
  components: { NBUserSnippet },
  data() {
    return {
      navElements: [
        {
          title: "Oversigt",
          to: "/",
        },
        {
          title: "Kundeadministration",
          to: "/crm",
        },
        {
          title: "Statistik",
          to: "/stats",
        },
      ],
    };
  },
};
</script>
