<template>
  <div>
    <h1>Eventos</h1>
    <p v-if="$route.query.s">{{ $route.query.s }}</p>
    <p v-else-if="$route.query.t">{{ $route.query.t }}</p>
    <p v-else-if="$route.query.c">{{ $route.query.c }}</p>
    <p v-else>todos</p>
    <hr />
    <router-link to="evento/1/titulo-del-evento">titulo del evento</router-link>
  </div>
</template>
<script>
export default {
  name: "Events",
};
</script>
