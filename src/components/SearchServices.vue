<template>
  <b-form @submit.prevent="onSubmit" class="search">
    <b-form-input
      v-model="form.query"
      placeholder="Buscá alojamientos, restaurantes, etc..."
    ></b-form-input>
    <b-button type="submit" variant="primary">Buscar</b-button>
  </b-form>
</template>
<script>
export default {
  name: "SearchServices",
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
        this.$router.push(`/servicios/filter?s=${this.form.query}`);
        this.form.query = "";
      }
    },
  },
};
</script>
