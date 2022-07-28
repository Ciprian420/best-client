<template>
  <div id="main">
    <Header></Header>
    <router-view></router-view>
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

</style>