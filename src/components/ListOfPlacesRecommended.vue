<template>
  <section>
    <div class="container">
      <h2>Descubrí Nuestra Ciudad</h2>

      <router-link
        class="btn btn-primary"
        to="/servicios/filter?t=lugares-destacados"
        >ver mas</router-link
      >
    </div>
  </section>
</template>
<script>
export default {
  name: "ListOfPlacesRecommended",
};
</script>
