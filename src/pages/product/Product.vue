<template>
    <div class="container">
    <div class="product-container">
      <div class="product-image-container">
        <div class="image-background">
          <img :src="productInfo.imageUrl" alt="" class="product-image">
        </div>
      </div>
      <div class="product-info-container">
        <p class="product-uses">{{productInfo.name}}</p>
        <p class="product-name">{{productInfo.title}}</p>
        <p class="product-number">Артикул: {{productInfo.id}}</p>
        <p class="product-quantity"><span>{{productInfo.quantity}}</span>  объем / мл</p>
        <div class="product-price">
          <p class="current-price">{{productInfo.price}} rub</p>
          <p class="old-price" style="color: #B9B9B9"><del v-if="isPromoActive">{{productInfo.oldPrice}} rub</del></p>
        </div>
        <div class="product-price-info">
          <p class="current-price-info">Со скидкой {{productInfo.promoPercent}}%</p>
          <p class="old-price-info" style="color: #B9B9B9" v-if="isPromoActive">Без скидки</p>
        </div>
        <div class="buttons">
          <button class="add-to-cart-button waves-effect waves-light btn" @click="saveToLocalStorage">Добавить в корзину</button>
          <button class="add-to-fav-button waves-effect waves-light btn"><img src="@/assets/images/fav-icon.png" alt="" class="fav-icon"></button>
          <button class="compare-button waves-effect waves-light btn"><img src="@/assets/images/compare-icon.png" alt="" class="compare-icon"></button>
        </div>
      </div>
    </div>
    <div class="offers">
      <div class="first-offer">
        <img src="@/assets/images/firstoffer.png" alt="" class="first-offer-photo">
        <p>Бесплатная
          доставка от 1000 руб</p>
      </div>
      <div class="second-offer">
        <img src="@/assets/images/secondoffer.png" alt="" class="second-offer-photo" >
        <p>Доставка по всей
          территории РФ</p>
      </div>
      <div class="third-offer">
        <img src="@/assets/images/thirdoffer.png" alt="" class="third-offer-photo">
        <p>Гарантия качества
          продукции </p>
      </div>
    </div>
    <ProductDescription></ProductDescription>
  </div>
</template>

<script>
import ProductDescription from "./ProductDescription";
export default {
  name: "ProductPage",
  components: {ProductDescription},
  data() {
    return {
      productInfo: {
        id: '1',
        name: 'Не  для лица освежающий охлаждающий',
        title: 'Something 2',
        imageUrl: require('@/assets/images/product-image.png'),
        price: 1300,
        oldPrice: 2300,
        promoPercent: (this.price / this.oldPrice) * 100,
        quantity: 1500
      },
      isPromoActive: true
    };
  },
  methods: {
    saveToLocalStorage() {
      if (!localStorage.products) {
        localStorage.setItem('products', JSON.stringify([this.productInfo]))
      } else {
        let productsData = JSON.parse(localStorage.getItem('products'));
        productsData.push(this.productInfo);
        localStorage.setItem('products', JSON.stringify(productsData));
        console.log(JSON.parse(localStorage.products));
        this.$store.commit('toggleProductsState', productsData)
        console.log(productsData);
      }
    }
  }
}

</script>

<style scoped>
.product-container{
  display: flex;
  padding: 100px 0;
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
  max-width: 732px;
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
.product-quantity span{
  border: 1px solid;
  font-family: "Exo 2 SemiBold", sans-serif;
  padding: 5px;
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