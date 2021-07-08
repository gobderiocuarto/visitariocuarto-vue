<template>
  <div>
    <h1>Listado de eventos</h1>
    <div v-for="(event, index) in events" :key="index">
      <router-link :to="'/evento/' + event.id + '/' + event.slug">{{
        event.title
      }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "ListOfEvents",
  props: {
    events: Array,
  },
};
</script>
