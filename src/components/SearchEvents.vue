<template>
  <b-form @submit.prevent="onSubmit" class="search">
    <b-form-input
      v-model="form.query"
      placeholder="Buscá tu evento..."
    ></b-form-input>
    <!-- <b-button type="submit">Buscar</b-button> -->
    <button
      type="submit"
      class="btn btn-primary"
      :class="frame && 'btn-secondary'"
    >
      Buscar
    </button>
    <!-- <p v-if="frame">yes</p>
    <p v-else>not</p> -->
  </b-form>
</template>
<script>
export default {
  name: "SearchEvents",
  props: {
    frame_id: [String, Number],
  },
  data() {
    return {
      form: {
        query: "",
      },
      frame: this.frame_id,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      if (this.form.query) {
        this.$router.push(`/eventos/filter?s=${this.form.query}`);
        this.form.query = "";
      }
    },
  },
};
</script>
