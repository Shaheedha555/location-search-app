<template>
  <!-- <div> -->
  <!-- <div class="div" >{{ description }}</div> -->
  <GoogleMap
    api-key="AIzaSyC9ABf9jMy2vBDTUjadPB-ukqv2qf8AyJo"
    style="width: 100%; height: 600px"
    :center="{ lat: lat, lng: lng }"
    :zoom="3"
  >
    <Marker
      :options="{
        position: { lat: lat, lng: lng },
      }"
      ><InfoWindow v-show="!isEmpty"
        ><h3>{{ name.trim() !== "" ? name : "Null Island" }}</h3>
        <p>
          {{
            description.trim() !== ""
              ? description
              : `The location in the Gulf of Guinea
           (South Atlantic Ocean) off the west African coast known as Null Island
            is named after the point where the prime meridian and the equator intersect.
             It is located at latitude 0 and longitude 0 degrees.`
          }}
        </p>
      </InfoWindow></Marker
    >
  </GoogleMap>
</template>

<script>
import { defineComponent, ref, watch, computed } from "vue";
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

export default defineComponent({
  props: ["lat", "lng", "name", "description"],
  components: { GoogleMap, Marker, InfoWindow },
  setup(props) {
    const lat = ref(props.lat);
    const lng = ref(props.lng);
    const name = ref(props.name);
    const description = ref(props.description);
    const isEmpty = computed(() => {
      return name.value.trim() === "" || description.value.trim() === "";
    });
    watch(
      () => [props.lat, props.lng, props.description, props.name],
      (newValue) => {
        lat.value = newValue[0];
        lng.value = newValue[1];
        description.value = newValue[2];
        name.value = newValue[3];
      }
    );

    return { lat, lng, name, description, watch, isEmpty };
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
