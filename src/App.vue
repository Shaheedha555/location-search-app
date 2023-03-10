<script>
import { reactive } from "vue";
import Form from "./components/Form.vue";
import Map from "./components/Map.vue";

export default {
  name: "App",
  components: {
    Form,
    Map,
  },
  setup() {
    const state = reactive({
      name: "",
      description: "",
      lat: 0,
      lng: 0,
    });

    function onFormSubmitted(formData) {
      state.lat = formData.lat;
      state.lng = formData.lng;
      state.name = formData.name;
      state.description = formData.description;
    }

    return { state, onFormSubmitted };
  },
};
</script>

<template>
  <main>
    <div>
      <Form @formSubmitted="onFormSubmitted" />
      <Map
        :lat="state.lat"
        :lng="state.lng"
        :description="state.description"
        :name="state.name"
      />
    </div>
  </main>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
}
</style>
