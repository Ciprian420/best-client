<template>
  <main class="main">
    <div class="main-container">
      <div class="order-and-adress">
        <div class="adress">
          <p class="step-one">Адрес и доставка</p>
          <div class="category-container">
            <p class="adress-category">Населенный пункт</p>
            <p class="adress-description">г. Красноярск Красноярский край</p>

          </div>
          <button class="city-change-btn waves-effect waves-light btn">Изменить город</button>
          <div class="category-container">
            <p class="adress-category"> Способ доставки</p>
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
            <p class="adress-category">Адрес</p>
            <p class="adress-description">г. Красноярск, ул. Республики, д. 33А, кв. 64</p>
          </div>
          <button class="city-change-btn waves-effect waves-light btn">Изменить адрес</button>
          <div class="category-container">
            <p class="adress-category">Дата и время</p>
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
        <p class="step-two">Получатель</p>
        <div class="category-container">
          <p class="adress-category">Ваши данные</p>
          <div class="input-container">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" placeholder="First Name">
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" style="width: 300px" placeholder="Last Name">
            </div>
          </div>
        </div>
        <div class="category-container">
          <p class="adress-category">Ваши данные</p>
          <div class="input-container">
            <div class="input-field col s6">
              <input id="icon_telephone" type="tel" class="validate" style="width: 300px" placeholder="Telephone">
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" style="width: 300px" placeholder="E-mail">
              </div>
            </div>
          </div>
        </div>
        <p class="step-three">Оплата</p>
        <p class="instruction">бесконтактная доставка действует для всех заказов, оплаченных онлайн</p>
        <div class="category-container move-to-right">
          <div class="delivery-select active center">
            <img src="../assets/Images/card-icon.png" alt="">
          </div>
          <div class="delivery-select center">
            <img src="../assets/Images/gpay.png" alt="">
          </div>
          <div class="delivery-select center">
            <p style="font-family: 'Roboto', sans-serif;
              font-weight: 500;
              font-size: 20px">при получении</p>
          </div>
        </div>
        <p class="instruction" style="margin-top: 50px; width: 594px">Оплата курьеру банковской картой или наличными.</p>
        <p class="instruction">Обратите внимание! Подарочные сертификаты и бонусы
          к оплате не принимаются.</p>
        <button class="city-change-btn waves-effect waves-light btn" style="width: 500px;">Оформить заказ</button>
      </div>
      <div class="product-info-container">
        <div class="product-header">
          <p class="product-name">Ваш заказ / 1 шт.</p>
          <p style="color: #828282; font-size: 19px; margin-top" class="product-name center">Доступно бонусов</p>
        </div>
        <div class="image-background">
          <img src="../assets/Images/product-image.png" alt="" class="product-image">
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
          <p >2600 руб</p>
        </div>
        <div class="delivery">
          <p style="color: #828282">Доступно бонусов</p>
          <p >Не выбрано</p>
        </div>
        <hr>
        <p style="display: flex; justify-content: flex-end; font-size: 25px">2600 руб</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "OrderConfirmation"
}
</script>

<style scoped>
.price, .delivery, .product-header{
  display: flex;
  justify-content: space-between;

}
.main-container{
  display: flex;
  flex-direction: row;
}
.move-to-right{
  margin-left: 229px;
}
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-info-container{
  margin-top: 100px;
  margin-left: 333px;
  width: 600px;
}
.step-one, .step-two, .step-three, .product-name{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 200%;
  color: #000000;
  letter-spacing: 1px;
  margin-top: 76px;
}
.product-image{
  width: 100px;
  height: 150px;
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
.order-and-adress{
  margin-top: 100px;
  margin-left: 333px;
}
.image-background{
  background-color: #F3F3F3;
  width: 200px;
  height: 170px;
  display: flex;
  justify-content: center;
}
.adress-category, .adress-description{
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  margin-right: 50px;
  width: 166px;
  height: 54px;
}
.adress-description{
  font-weight: 500!important;
  width: 250px!important;
}
.category-container{
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  height: 100px;
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
  font-size: 18px;
  line-height: 150%;
  margin-left: 30px;
}
.delivery-info, .delivery-price{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: black;
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
  font-size: 18px;
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
  font-size: 16px;
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
  font-size: 16px;
  line-height: 150%;
  margin-left: 230px;
}
.input-container{
  display: flex;
  flex-direction: column;
}
</style>