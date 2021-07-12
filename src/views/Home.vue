<template>
  <div class="home text-center">
    <HelloWorld msg="Home Visitá Río Cuarto" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
