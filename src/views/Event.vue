<template>
  <div>
    <h1>Evento</h1>
    <p>{{ $route.params.id }}</p>
    <p>{{ $route.params.slug }}</p>
  </div>
</template>
<script>
export default {
  name: "Event",
};
</script>
