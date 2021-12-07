<template>
  <header class="py-4 mb-10 bg-white shadow-sm">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/">
        <span class="font-bold text-lg tracking-tight select-none"
          >Ticket<span class="text-tealish-500">o</span>
        </span>
      </router-link>
      <nav>
        <ul class="flex items-center h-full">
          <li v-for="item of navElements" class="p-2 h-full inline-block">
            <div class="fill-current text-tealish-500 flex justify-center">
              <Icons :name="item.icon" />
            </div>
            <router-link
              :to="item.to"
              :title="item.title"
              class="
                font-semibold
                focus:text-tealish-500
                hover:underline
                underline-offset-medium
                ;
              "
              exact-active-class="text-tealish-500"
              >{{ item.title }}
            </router-link>
          </li>
        </ul>
      </nav>
      <NBUserSnippet name="Dorte" position="Kunderådgiver" />
    </div>
  </header>
</template>

<script>
import NBUserSnippet from "./NBUserSnippet.vue";
import Icons from "./Icons.vue";
export default {
  name: "Navbar",
  components: { NBUserSnippet, Icons },
  data() {
    return {
      navElements: [
        {
          title: "Oversigt",
          to: "/",
          icon: "View",
        },
        {
          title: "Kundeadministration",
          to: "/crm",
          icon: "UserGroup",
        },
        {
          title: "Statistik",
          to: "/stats",
          icon: "Chart",
        },
      ],
    };
  },
};
</script>
