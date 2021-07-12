<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="catd-title">
        {{ event.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
  },
};
</script>
