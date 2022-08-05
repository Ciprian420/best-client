<template>
  <main class="main">
  <router-view>

  </router-view>
</main>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 18px;
}
.container {
  max-width: 1698px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
}

.button {
  display: inline-block;
  height: 58px;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding: 18px 20px;
  background-color: #000;
}
ul, li {
  list-style: none;
}
</style>

