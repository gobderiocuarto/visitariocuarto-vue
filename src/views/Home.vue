<template>
  <div class="home text-center">
    <slide-events />
    <carousel-of-events />
    <div>categorias de eventos</div>
    <div>próximos eventos</div>
    <div>categoria de servicios</div>
    <div>descubrí nuestra ciudad</div>
  </div>
</template>

<script>
import CarouselOfEvents from "../components/CarouselOfEvents.vue";
import SlideEvents from "../components/SlideEvents.vue";

export default {
  name: "Home",
  components: {
    SlideEvents,
    CarouselOfEvents,
  },
};
</script>
