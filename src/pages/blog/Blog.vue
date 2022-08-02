<template>
  <div class="container">
    <p class="page-title">Блог</p>
    <div class="card-row">
      <blog-card></blog-card>
      <blog-card></blog-card>
      <blog-card></blog-card>
    </div>
    <div class="card-row">
      <blog-card></blog-card>
      <blog-card></blog-card>
      <blog-card></blog-card>
    </div>
    <div class="card-row">
      <blog-card></blog-card>
      <blog-card></blog-card>
      <blog-card></blog-card>
    </div>
  </div>
  <product-popup></product-popup>
</template>

<script>

import BlogCard from "@/pages/blog/Card";
import ProductPopup from "@/components/productPopup/ProductPopup";
export default {
  name: 'blog-page',
  components: {ProductPopup, BlogCard}
}
</script>

<style>
.container{
  height: 1600px;
}
.page-title{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 200%;
  margin-top: 150px;
}
.card-row{
  display: flex;
  flex-direction: row;
}
</style>