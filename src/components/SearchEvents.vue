<template>
  <b-form @submit.prevent="onSubmit" class="search">
    <b-form-input
      v-model="form.query"
      placeholder="Buscá tu evento"
    ></b-form-input>
    <b-button type="submit" variant="secondary">Buscar</b-button>
  </b-form>
</template>
<script>
export default {
  name: "SearchEvents",
  data() {
    return {
      form: {
        query: "",
      },
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
