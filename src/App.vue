<template>
  <div id="app" class="main">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
