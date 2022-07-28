<template>
  <div class="image-background">
    <img :src="productInfo.imgURL" alt="" class="product-image">
  </div>
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
    <p class="gray">Сумма заказа</p>
    <p>{{productInfo.price}}</p>
  </div>
  <div class="delivery">
    <p class="gray">Доставка</p>
    <p >Не выбрано</p>
  </div>
  <hr>
  <p class="move-to-right price-text">{{productInfo.price}}</p>
</template>

<script>
export default {
  name: "ProductTemplate",
  data() {
    return {
      productInfo: {
        imgURL: require("../assets/Images/product-image.png"),
        price: "2600 руб"
      }
    }
  }
}
</script>

<style scoped>
.price-text{
  font-size: 20px;
}
.move-to-right{
  display: flex;
  justify-content: flex-end;
}
.gray{
  color: #828282
}
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
.price, .delivery{
  display: flex;
  justify-content: space-between;
margin-top: 20px;
  margin-bottom: 20px;
}
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
</style>