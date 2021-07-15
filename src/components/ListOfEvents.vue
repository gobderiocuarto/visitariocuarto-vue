<template>
  <div class="list-of-events">
    <div class="row">
      <div
        class="col-md-6 col-xl-4"
        v-for="(event, index) in events"
        :key="index"
      >
        <EventCard :event="event" />
      </div>
    </div>
  </div>
</template>
<script>
import EventCard from "@/components/EventCard";
export default {
  name: "ListOfEvents",
  props: {
    events: Array,
  },
  components: {
    EventCard,
  },
};
</script>
