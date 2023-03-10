import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

const app = createApp(App);
const router = createRouter({ history: createWebHistory() }, [
  { path: "/", component: App },
]);

app.use(router);
app.mount("#app");
