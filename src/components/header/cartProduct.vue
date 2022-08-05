<template>
    <div class="product">
      <div class="product-actions">
        <img src="@/assets/images/decrease-quantity.png" alt="" class="icon">
        <p class="product-quantity">1</p>
        <img src="@/assets/images/add-button-icon.png" alt="" class="icon">
        <img src="@/assets/images/delete-button.png" alt="" class="icon">
      </div>

      <div class="product-container">
        <img src="@/assets/images/product-image.png" alt="" class="product-image">
        <div class="product-text">
          <p class="product-description">{{productInfo.name}}</p>
          <p class="product-title">{{productInfo.title}}</p>
          <p class="product-volume">{{productInfo.quantity}} мл</p>
        </div>
        <div class="product-price-container">
          <p class="old-price">{{productInfo.oldPrice}} руб</p>
          <div class="real-price-container">
            <p class="discount-info">Скидка {{productInfo.oldPrice - productInfo.price}} руб</p>
            <p class="current-price">{{productInfo.price}} руб</p>
          </div>
        </div>
      </div>
      <div class="footer-container">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12 column">
              <textarea id="textarea1" class="materialize-textarea input-width" placeholder="Введите сумму"></textarea>
              <textarea id="textarea1" class="materialize-textarea input-width" placeholder="Введите промокод"></textarea>
            </div>
          </div>
        </form>
        <div class="total-price-container">
          <div class="column">
            <p class="discount">Скидка</p>
            <p class="total-discount">-2000 руб</p>
          </div>
          <div class="column">
            <p class="price">К оплате</p>
            <p class="total-price">2600 руб</p>
          </div>
        </div>
      </div>
      <button class="waves-effect waves-light btn submit-btn">Оформить заказ</button>
    </div>
</template>

<script>
export default {
    name: 'ProjectsCartProduct',
    props: {
        productInfo: Object
    },
    data() {
        return {
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.product {
    margin-bottom: 120px;
}
.footer-container{
  display: flex;
  justify-content: space-between;
}
.total-price-container{
  display: flex;
  justify-content: flex-end;
  align-items: self-end;
}
.total-price{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;
}
.price{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: #545454;
}
.total-discount{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;
  color: #915167;
}
.discount{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: #545454;
}
.submit-btn{
  background-color: black;
  color: white;
  width: 600px;
  height: 50px;
}
.column{
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  width: 81px;
  height: 100px;
}
.input-width{
  width: 200px;
}
.current-price{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;
}
.discount-info{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 200%;
  color: #915167;

}
.old-price{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 200%;
  color: #B9B9B9;
  margin-top: 23px;
}
.product-price-container{
  display: flex;
  justify-content: flex-end;
}
.real-price-container{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.product-quantity{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 110%;
  margin: 3px 15px 0 15px;
}
.icon{
  width: 28px;
  height: 28px;
  cursor: pointer;
}
.product-actions{
  display: flex;
  justify-content: flex-end;
}
.product-volume{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 110%;
  margin-top: 30px;
}
.product-title{
  font-family: 'Bebas Neue', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0.0375em;
  margin-top: 15px;
}
.product-description{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  width: 386px;
  height: 30px;
}
.product-container{
  display: flex;
  flex-direction: row;
  margin-top: 40px;
}
.product-image{
  width: 126px;
  height: 170px;
}
.popup-description{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  margin-top: 20px;
}
input{
  width: 400px!important;
}
</style>