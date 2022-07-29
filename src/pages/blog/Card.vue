<template>
<div class="main-container">
  <div class="card-container">
    <img src="@/assets/Images/card-image.png" alt="">
    <p class="card-title">Эксперт назвал способный удивить любую женщину цветок</p>
    <p class="card-description">Протея — это тот цветок, который может вызвать умиление, восторг и восхищение у любой женщины. Такую точку зрения выразили эксперты, опрошенны..</p>
  </div>
</div>
</template>

<script>
export default {
  name: "blog-card"
}
</script>

<style scoped>
.card-container{
  margin-right: 100px;
}
img{
  width: 470px;
  height: 300px;
}
.card-title{
  width: 400px;
  height: 70px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 150%;
  color: #000000;
}
.card-description{
  width: 400px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #636363;
}
</style>