<template>
  <main class="main">
    <div class="product-container">
      <div class="product-image-container">
        <div class="image-background">
          <img src="../../img/product-image.png" alt="" class="product-image">
        </div>
      </div>
      <div class="product-info-container">
        <p class="product-uses">Тоник для лица освежающий охлаждающий</p>
        <p class="product-name">Skindom Luxury cell pepride Deep Cleansing oil</p>
        <p class="product-number">Артикул: 19000000618</p>
        <p class="product-quantity">  объем / мл</p>
        <div class="product-price">
          <p class="current-price">1300 rub</p>
          <p class="old-price" style="color: #B9B9B9"><del>2300 rub</del></p>
        </div>
        <div class="product-price-info">
          <p class="current-price-info">Со скидкой 44%</p>
          <p class="old-price-info" style="color: #B9B9B9">Без скидки</p>
        </div>
        <div class="buttons">
          <button class="add-to-cart-button waves-effect waves-light btn">Добавить в корзину</button>
          <button class="add-to-fav-button waves-effect waves-light btn"><img src="../../img/fav-icon.png" alt="" class="fav-icon"></button>
          <button class="compare-button waves-effect waves-light btn"><img src="../../img/compare-icon.png" alt="" class="compare-icon"></button>
        </div>
      </div>
    </div>
    <div class="offers">
      <div class="first-offer">
        <img src="../../img/firstoffer.png" alt="" class="first-offer-photo">
        <p>Бесплатная
          доставка от 1000 руб</p>
      </div>
      <div class="second-offer">
        <img src="../../img/secondoffer.png" alt="" class="second-offer-photo" >
        <p>Доставка по всей
          территории РФ</p>
      </div>
      <div class="third-offer">
        <img src="../../img/thirdoffer.png" alt="" class="third-offer-photo">
        <p>Гарантия качества
          продукции </p>
      </div>
    </div>
    <ProductDescription></ProductDescription>
  </main>
</template>

<script>
import ProductDescription from "./ProductDescription";
export default {
  name: "ProductPage",
  components: {ProductDescription}
}

</script>

<style scoped>
.product-container{
  display: flex;
}
.image-background{
  background-color: #F3F3F3;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  margin: 0 0 0 50px;
}
.product-image-container{
  width: 500px ;
  margin-right: 200px;
}
.product-name{
  width: 732px;
  height: 124px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 130%;
  letter-spacing: 0.0375em;
  text-transform: uppercase;
  color: #000000;
  margin: 0 0 0 0;
}
.product-number{
  margin-top: 50px;
  color: #AFAFAF;
}
.product-quantity{
  margin-top: 20px;
  font-family:'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
}
.product-quantity:before{
  border: 1px solid;
  font-family: "Exo 2 SemiBold", sans-serif;
  padding: 5px;
  content: "1500";
}
.product-price{
  height: 40px;
}
.current-price, .old-price{
  margin-right: 20px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
}
.old-price{
  color:#B9B9B9;
}
.product-price-info, .product-price{
  display: flex;
  justify-content: flex-start;
}
.current-price-info, .old-price-info{
  width: 91px;
  height: 18px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  margin-right: 30px;
}
.add-to-cart-button, .add-to-fav-button{
  width: 268px;
  height: 53px;
  background-color: black;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: white;
  margin-right: 16px;
}
.add-to-fav-button {
  width: 53px;
}
.fav-icon{
  width: 40px;
  height: 40px;
  margin-top: 6px;
  margin-left: -9.5px;
  -webkit-filter: invert(100%);
}
.compare-button{
  height: 53px;
  width: 53px;
  background-color: black;
}
.compare-icon{
  width: 40px;
  height: 40px;
  margin-top: 6px;
  margin-left: -9.5px;
  -webkit-filter: invert(100%);
}
.first-offer-photo, .second-offer-photo, .third-offer-photo{
  width: 50px;
  height: 58px;
}
.first-offer, .second-offer, .third-offer{
  display: flex;
  width: 180px;
}
.offers{
  display: flex;
  flex-direction: row;
  margin-left: 62px;
  margin-bottom: 40px;
  margin-top: 10px;
}
p{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
}
</style>