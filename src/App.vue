<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main {
  position: relative;
  padding-top: 137px;
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
  text-decoration: none;
  padding: 18px 20px;
  background-color: #000;
}
ul, li {
  list-style: none;
}
</style>
