<template>
  <div class="bg-primary text-white py-5">
    <div
      class="container d-flex align-items-center justify-content-between py-5"
    >
      <h3>{{ frame.title }}</h3>
      <!-- <router-link
        class="btn btn-secondary"
        :to="'/eventos/filter?f=' + frame.id + '&' + frame.slug"
        custom
        v-slot="{ navigate }"
      >
        <span @click="navigate" @keypress.enter="navigate" role="link"
          >Ver</span
        >
      </router-link> -->
      <div>
        <b-link
          class="btn btn-secondary ml-2"
          :to="'/evento/' + frame.id + '/' + frame.slug"
          >mas info</b-link
        >
        <b-link
          class="btn btn-secondary ml-2"
          :to="'/eventos/filter?f=' + frame.id + '&' + frame.slug"
          >ver eventos</b-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroEventFrame",
  props: {
    frame: Object,
  },
};
</script>
