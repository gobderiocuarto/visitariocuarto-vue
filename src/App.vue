<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/eventos">Eventos</router-link> |
      <router-link to="/eventos/filter?s=museos">E.Search</router-link>
      | <router-link to="/eventos/filter?t=infantiles">E.Tag</router-link> |
      <router-link to="/eventos/filter?c=resto-bares">E.Category</router-link> |
      <router-link to="/eventos/filter?d=month">E.Date</router-link> |
      <!-- <router-link to="/servicios">Servicios</router-link> |
      <router-link to="/servicios/filter?s=search">S.Filter</router-link>
      | <router-link to="/servicios/filter?t=tag">S.Tag</router-link> |
      <router-link to="/servicios/filter?c=category">S.Category</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
