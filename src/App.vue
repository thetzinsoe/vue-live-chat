<template>
  <div>
    <router-view />
    <footer>&copy; at 2023 | created by Thetzinsoe</footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a.router-link-exact-active {
  color: #42b983;
}
footer {
  position: fixed;
  bottom: 0;
  right: 0;
  font-size: small;
  color: rgb(162, 158, 158);
}
</style>
