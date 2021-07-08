<template>
  <div>
    <h1>Servicios</h1>
    <p v-if="$route.query.s">{{ $route.query.s }}</p>
    <p v-else-if="$route.query.t">{{ $route.query.t }}</p>
    <p v-else-if="$route.query.c">{{ $route.query.c }}</p>
    <p v-else>todos</p>
    <hr />
    <router-link to="servicio/1/titulo-del-servicio"
      >titulo del servicio</router-link
    >
  </div>
</template>
<script>
export default {
  name: "Services",
};
</script>
