<template>
  <div class="card-image center error">
    <font-awesome-icon icon="image" :size="iconSize" />
    <small>imagen no disponible</small>
  </div>
</template>
<script>
export default {
  name: "CardImageNotFound",
  props: {
    iconSize: String,
  },
};
</script>
