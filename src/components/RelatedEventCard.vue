<template>
  <div>
    {{ event.title }}
  </div>
</template>
<script>
export default {
  name: "RelatedEventCard",
  props: {
    event: Object,
  },
};
</script>
