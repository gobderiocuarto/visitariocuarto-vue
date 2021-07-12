<template>
  <b-form inline @submit.prevent="onSubmit">
    <b-form-input
      v-model="form.query"
      size="sm"
      class="mr-sm-2"
      placeholder="Buscá tu evento"
    ></b-form-input>
    <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="primary"
      >Buscar</b-button
    >
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
