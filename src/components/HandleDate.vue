<template>
  <div>
    <template v-if="end && end !== start">
      <!-- Del {{ start | moment("D [de] MMMM YYYY") }} al
      {{ end | moment("D [de] MMMM YYYY") }} -->
      <!-- Del {{ start | moment("D/MM/YYYY") }} al
      {{ end | moment("D/MM/YYYY") }} -->
      Del <span>{{ start | moment("dddd D/MM") }}</span> al
      <span>{{ end | moment("dddd D/MM") }}</span>
    </template>
    <template v-else
      ><span>{{ start | moment("dddd D [de] MMMM") }}</span></template
    >
  </div>
</template>
<script>
export default {
  name: "HandleDate",
  props: {
    start: String,
    end: String,
  },
};
</script>
