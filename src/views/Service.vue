<template>
  <div>
    <h1>Servicio</h1>
    <p>{{ $route.params.id }}</p>
    <p>{{ $route.params.slug }}</p>
  </div>
</template>
<script>
export default {
  name: "Service",
};
</script>
