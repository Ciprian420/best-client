<template>
  <main class="main">
    <div class="container">
    <div class="main-container">
      <div class="order-and-address">
        <p class="step-one" @click="isShowStepOne = !isShowStepOne">Адрес и доставка</p>
        <div class="address" v-show="isShowStepOne">
          <div class="category-container">
            <p class="address-category">Населенный пункт</p>
            <p class="address-description">г. Красноярск Красноярский край</p>
          </div>
          <button class="city-change-btn waves-effect waves-light btn">Изменить город</button>
          <div class="category-container">
            <p class="address-category"> Способ доставки</p>
            <div class="delivery-select active">
              <p class="delivery-type">Курьер</p>
              <p class="delivery-info">Служба доставки</p>
              <p class="delivery-price">Бесплатно</p>
            </div>
            <div class="delivery-select">
              <p class="delivery-type">Курьер</p>
              <p class="delivery-info">Служба доставки</p>
              <p class="delivery-price">Бесплатно</p>
            </div>
          </div>
          <div class="category-container">
            <p class="address-category">Адрес</p>
            <p class="address-description">г. Красноярск, ул. Республики, д. 33А, кв. 64</p>
          </div>
          <button class="city-change-btn waves-effect waves-light btn">Изменить адрес</button>
          <div class="category-container">
            <p class="address-category">Дата и время</p>
            <div class="date-and-time">
              <div class="day-of-the-week active">
                <p class="day">Пн</p>
                <p class="date">19.04</p>
              </div>
              <div class="day-of-the-week">
                <p class="day">Вт</p>
                <p class="date">20.04</p>
              </div>
              <div class="day-of-the-week">
                <p class="day">Ср</p>
                <p class="date">21.04</p>
              </div>
              <div class="day-of-the-week">
                <p class="day">Чт</p>
                <p class="date">22.04</p>
              </div>
              <div class="day-of-the-week">
                <p class="day">Пт</p>
                <p class="date">23.04</p>
              </div>
            </div>
          </div>
          <p class="instruction">Как только ваш заказ будет передан курьеру, вы получите SMS-сообщение.</p>
        </div>
        <p class="step-two" @click="isShowStepTwo = !isShowStepTwo">Получатель</p>
        <div class="step-two-container" v-show="isShowStepTwo">
        <div class="category-container">
          <p class="address-category">Ваши данные</p>
          <div class="input-container">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" placeholder="First Name">
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate input-width" placeholder="Last Name">
            </div>
          </div>
        </div>
        <div class="category-container">
          <p class="address-category">Ваши данные</p>
          <div class="input-container">
            <div class="input-field col s6">
              <input id="icon_telephone" type="tel" class="validate input-width"  placeholder="Telephone">
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate input-width"  placeholder="E-mail">
              </div>
            </div>
          </div>
          </div>
        </div>
        <p class="step-three" @click="isShowStepThree = !isShowStepThree">Получатель>Оплата</p>
        <div class="step-three-container" v-show="isShowStepThree">
        <div class="pay-method-container move-to-right">
          <div class="delivery-select active center">
            <img :src="require('@/assets/images/card-icon.png')" alt="">
          </div>
          <div class="delivery-select center">
            <img :src="require('@/assets/images/gpay.png')" alt="">
          </div>
          <div class="delivery-select center">
            <p >при получении</p>
          </div>
        </div>
        <p class="instruction">Оплата курьеру банковской картой или наличными.</p>
        <p class="instruction">Обратите внимание! Подарочные сертификаты и бонусы
          к оплате не принимаются.</p>
        </div>
        <button class="city-change-btn waves-effect waves-light btn input-width">Оформить заказ</button>
      </div>
      <div class="product-info-container">
        <div class="product-header">
          <p class="product-name">Ваш заказ / 1 шт.</p>
          <p class="product-name center ">Доступно бонусов</p>
        </div>
        <OrderDescriptionCard></OrderDescriptionCard>
      </div>
    </div>
    </div>
  </main>
</template>

<script>
import OrderDescriptionCard from "@/pages/order/OrderDescriptionCard";
export default {
  name: "OrderConfirmation",
  components: {OrderDescriptionCard},
  data() {
    return {
      isShowStepOne: true,
      isShowStepTwo: true,
      isShowStepThree: true,
    };
  },
}
</script>

<style scoped>
.input-width{
  width: 300px;
}
.pay-method-container{
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  height: 200px;
}
.product-name{
  font-size: 19px;
  margin-bottom: 10px;
}
.product-header{
  display: flex;
  justify-content: space-between;
}
.main-container{
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-left: 150px;
}
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-info-container{;
  width: 500px;
  margin-left: 100px;
}
.step-one, .step-two, .step-three{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 200%;
  letter-spacing: 1px;
}
.step-one:before{
  content: "1 / 3 ";
  margin-right: 30px;
}
.step-two:before{
  content: "2 / 3 ";
  margin-right: 30px;
}
.step-three:before{
  content: "3 / 3 ";
  margin-right: 30px;
}
.address-category, .address-description{
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  margin-right: 50px;
  width: 166px;
  height: 54px;
}
.address-description{
  font-weight: 500!important;
  width: 250px!important;
}
.category-container{
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  height: 150px;
}
.delivery-select{
  border: 1px solid gray;
  width: 200px;
  height: 150px;
}
.delivery-type{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 150%;
  margin-left: 30px;
}
.delivery-info, .delivery-price{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  margin-left: 30px;
}
.active{
  border: 3px solid!important;
}
.city-change-btn{
  width: 200px;
  height: 50px;
  background-color: rgba(196, 188, 188, 0.62);
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  color: #000000;
  margin-left: 215px;
  margin-top: 20px;
}
.day-of-the-week{
  width: 80px;
  height: 80px;
  border: 1px solid;
}
.day, .date{
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 150%;
  justify-content: center;
  margin-top: 5px;
}
.date{
  font-weight: 500;
}
.date-and-time{
  display: flex;
  flex-direction: row;
}
.instruction{
  width: 342px;
  height: 42px;
  font-family:  'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  margin-left: 230px;

}
.input-container{
  display: flex;
  flex-direction: column;
}
</style>