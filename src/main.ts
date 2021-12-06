import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "./pages/routes";
import { createRouter, createWebHashHistory } from "vue-router";
import seeder from "./seeder";

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
});

seeder();

createApp(App).use(router).mount("#app");
