<template>
  <div class="home text-center">
    <slide-events />
    <HelloWorld msg="Home Visitá Río Cuarto" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import SlideEvents from "../components/SlideEvents.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SlideEvents,
  },
};
</script>
