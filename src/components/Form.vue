<template>
  <div>
    <h1>Find Location</h1>
    <form @submit.prevent="submitForm">
      <label for="">Name</label>
      <input type="text" placeholder="Enter name of location" v-model="name" />
      <label for="">Description</label>

      <textarea placeholder="Enter description" v-model="description" />
      <label for="">Latitude</label>

      <input
        type="number"
        step="any"
        placeholder="Enter latitude"
        v-model="formattedLat"
      />
      <label for="">Longitude</label>

      <input
        type="number"
        step="any"
        placeholder="Enter longitude"
        v-model="formattedLng"
      />
      <button :disabled="isDisabled" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  setup(_, { emit }) {
    const name = ref("");
    const description = ref("");
    const lat = ref(0);
    const lng = ref(0);

    function submitForm() {
      // console.log("submitted", { lat, lng });
      emit("formSubmitted", {
        name: name.value,
        description: description.value,
        lat: lat.value,
        lng: lng.value,
      });
    }
    const isDisabled = computed(() => {
      return name.value.trim() === "" || description.value.trim() === "";
    });
    watch(
      () => [name, description],
      (newValue) => {
        console.log(newValue, " new");
        name.value = newValue[0];
        description.value = newValue[1];
      }
    );
    const formattedLat = computed({
      get() {
        return lat.value.toFixed(2);
      },
      set(newValue) {
        lat.value = parseFloat(newValue);
      },
    });
    const formattedLng = computed({
      get() {
        return lng.value.toFixed(2);
      },
      set(newValue) {
        lng.value = parseFloat(newValue);
      },
    });
    return {
      lat,
      lng,
      description,
      name,
      formattedLat,
      formattedLng,
      isDisabled,
      watch,
      submitForm,
    };
  },
};
</script>

<style scoped>
h1 {
  padding: 0rem 5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
form {
  padding: 0.5rem 5rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
label {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
input,
textarea {
  width: 100%;
  height: 2.5rem;
  font-size: 1.25rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border: 3px solid rgb(200, 198, 198);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
textarea {
  height: 5rem;
}
button {
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border-radius: 0.25rem;
  transition-duration: 0.4s;

  border: 3px solid #6fb378;
  background-color: #a7fbb2;
  color: #1b5423;
}
button:hover {
  cursor: pointer;
  background: white;
}
button:disabled {
  background: rgb(198, 196, 196);
  border: 0;
  color: rgb(53, 52, 52);
}
</style>
