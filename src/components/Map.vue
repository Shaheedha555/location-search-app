<template>
  <!-- <div> -->
  <div class="div" v-show="isClicked">{{ description }}</div>
  <GoogleMap
    api-key="AIzaSyC9ABf9jMy2vBDTUjadPB-ukqv2qf8AyJo"
    style="width: 100%; height: 500px"
    :center="{ lat: lat, lng: lng }"
    :zoom="3"
  >
    <Marker
      @click="clicked"
      :options="{
        position: { lat: lat, lng: lng },
        label: name,
        title: description,
      }"
    />
  </GoogleMap>
  <!-- </div> -->
</template>

<script>
import { defineComponent, ref, watch, computed } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  props: ["lat", "lng", "name", "description"],
  components: { GoogleMap, Marker },
  setup(props) {
    const lat = ref(props.lat);
    const lng = ref(props.lng);
    const name = ref(props.name);
    const description = ref(props.description);
    const isClicked = ref(false);
    function clicked() {
      isClicked.value = !isClicked.value;
      console.log("clicked", isClicked.value);
    }
    watch(
      () => [props.lat, props.lng, props.description, props.name, isClicked],
      (newValue) => {
        lat.value = newValue[0];
        lng.value = newValue[1];
        description.value = newValue[2];
        name.value = newValue[3];
        isClicked.value = newValue[4];
      }
    );

    return { lat, lng, name, description, watch, isClicked, clicked };
  },
});
</script>
<style scoped>
.div {
  position: fixed;
  top: 10%;
  right: 40%;
  padding: 2rem;
  background-color: black;
  color: aliceblue;
  z-index: 1;
}
</style>
