<template>
  <div class="image-background">
    <img :src="productInfo.imgURL" alt="" class="product-image">
  </div>
  <p style="color: #828282">Доступно бонусов</p>
  <div class="row">
    <div class="input-field col s12">
      <input id="email" type="email" class="validate" style="width: 200px" placeholder="Введите сумму">
    </div>
  </div>
  <div class="row">
    <div class="input-field col s12">
      <input id="email" type="email" class="validate" style="width: 200px" placeholder="Введите промокод">
    </div>
  </div>
  <div class="price">
    <p style="color: #828282">Доступно бонусов</p>
    <p>{{productInfo.price}}</p>
  </div>
  <div class="delivery">
    <p style="color: #828282">Доступно бонусов</p>
    <p >Не выбрано</p>
  </div>
  <hr>
  <p style="display: flex; justify-content: flex-end; font-size: 25px">2600 руб</p>
</template>

<script>
export default {
  name: "ProductTemplate",
  data() {
    return {
      productInfo: {
        imgURL: "../assets/Images/product-image.png",
        price: "2600 руб"
      }
    }
  }
}
</script>

<style scoped>
.product-image{
  width: 100px;
  height: 150px;
}
.image-background{
  background-color: #F3F3F3;
  width: 200px;
  height: 170px;
  display: flex;
  justify-content: center;
}
.price, .delivery, .product-header{
  display: flex;
  justify-content: space-between;

}
</style>