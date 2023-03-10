<template>
  <GoogleMap
    api-key="AIzaSyC9ABf9jMy2vBDTUjadPB-ukqv2qf8AyJo"
    style="width: 100%; height: 500px"
    :center="{ lat: lat, lng: lng }"
    :zoom="3"
  >
    <Marker
      :options="{
        position: { lat: lat, lng: lng },
        label: name,
        title: description,
      }"
    />
  </GoogleMap>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  props: ["lat", "lng", "name", "description"],
  components: { GoogleMap, Marker },
  setup(props) {
    const lat = ref(props.lat);
    const lng = ref(props.lng);
    const name = ref(props.name);
    const description = ref(props.description);
    watch(
      () => [props.lat, props.lng, props.description, props.name],
      (newValue) => {
        console.log(newValue, " new");
        lat.value = newValue[0];
        lng.value = newValue[1];
        description.value = newValue[2];
        name.value = newValue[3];
      }
    );

    return { lat, lng, name, description, watch };
  },
});
</script>
