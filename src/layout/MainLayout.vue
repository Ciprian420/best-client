<template>
  <div id="layout">
    <Header></Header>
      <div class="layout-wrapper">
        <router-view></router-view>
      </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export default {
  name: "MainLayout",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
 .layout-wrapper {
   margin-top: 0;
 }
</style>