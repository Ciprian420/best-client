<template>
  <div class="faq">
    <div class="container">
      <h2 class="faq-title">Доставка и Оплата</h2>
      <div class="faq-top">
        <div class="faq-top-item" v-for="(item, index) in deliveryInfoList" :key="index">
          <h4 class="faq-top-title">{{item.title}}</h4>
          <p class="faq-top-info">{{item.text}}</p>
        </div>
      </div>
      <div class="faq-delivery">
        <div class="faq-delivery-content">
          <h4 class="faq-delivery-title">Варианты доставки в г. Санкт-Петербург</h4>
          <div class="faq-delivery-price">
            Доставка от 400 ₽
            <span>при заказе от 40 000 ₽ - Бесплатно</span>
          </div>
          <div class="faq-delivery-method">Самовывоз</div>
          <div class="faq-delivery-shops">12 магазинов</div>
          <div class="faq-delivery-info">Добавьте товары в корзину, и мы рассчитаем точные условия доставки для вашего заказа</div>
          <a href="" class="faq-delivery-btn button">Перейти в каталог</a>
        </div>
        <div class="faq-delivery-img"><img src="@/assets/Images/faq-img.jpg" alt=""></div>
      </div>
      <div class="faq-info">
        <h4 class="faq-info-title">Правила предоставления услуг</h4>
        <div class="faq-tab">
          <ul class="faq-tab-links">
            <li class="faq-tab-link" v-for="(item, index) in tabLinks" :key="index" @click="currentTab = index" 
            :class="{active: currentTab === index}">{{item}}</li>
          </ul>
          <div class="faq-tab-content">
            <div class="faq-tab-content-item" v-if="currentTab === 0">
              <ol class="faq-tab-content-list">
                <li>
                  <p class="faq-list-text">
                    Быстрая доставка из магазина. В городах присутствия супермаркетов «KK Shop» действует быстрая доставка из 
                    магазина день в день. Доступные способы оплаты: банковской картой, подарочной картой. Возможно 
                    применение бонусов. Применение подарочной карты и бонусов возможно только при онлайн-оплате.
                    Как оформить заказ с доставкой из магазина в вашем городе:
                  </p>
                  <p class="faq-list-text light">
                    Выберите нужные средства на сайте.
                    Проверьте их наличие в магазине вашего города.
                    Оформите заказ на сайте, выбрав способ «быстрая доставка из магазина».
                    Вы получите SMS-сообщение, как только заказ будет собран и передан курьеру.
                    Ждите курьера с посылкой!
                  </p>
                  <p class="faq-list-text">
                    Быстрая доставка действует во всех городах присутствия. Обращаем внимание, в Екатеринбурге доставка 
                    из магазина действует только в Универмаге BOLSHOY; в Казани - только в супермаркете по адресу ул. 
                    Пушкина, 2; в Москве - только в ТЦ Афимолл Сити, ТЦ Кунцево Плаза, ТЦ Метрополис, ТЦ Саларис.
                    **Быстрая доставка из магазина в день заказа действует во всех городах присутствия, кроме Москвы.
                  </p>
                  <h4 class="faq-list-title">
                    Интервалы доставки:
                  </h4>
                  <p class="faq-list-text">
                    В Москве: заказы, оформленные до 21:00, доставляем на следующий день. Доступные интервалы
                    доставки: 10:00 - 18:00, 10:00 - 14:00, 14:00 - 18:00, 18:00 - 22:00. В Санкт-Петербурге:
                    заказы, оформленные до 04:00, доставляем в этот же день. Доступные интервалы доставки:
                    10:00 - 18:00, 10:00 - 14:00, 14:00 - 18:00. Заказы, оформленные до 14:00, доставляем в
                    этот же день в интервале 18:00 - 23:00.
                  </p>
                  <p class="faq-list-text">
                    В Екатеринбурге, Челябинске, Казани, Нижнем Новгороде, Волгограде, Новосибирске, Ростове-на-Дону, 
                    Самаре, Саратове и Хабаровске: заказы, оформленные до 18:00, доставляем в этот же день. 
                    Доступные интервалы доставки: 10:00 − 13:00, 13:00 − 16:00, 16:00 − 19:00, 19:00 − 23:00.
                  </p>
                  <p class="faq-list-text">
                    Обращаем ваше внимание, при выборе способа доставки “быстрая доставка из магазина” в Москве доступна 
                    оплата на сайте при оформлении заказа или банковской картой при получении.
                  </p>
                </li>
                <li>
                  <p class="faq-list-text">
                    Самовывоз из магазина. Доступные способы оплаты: банковской картой, наличными, подарочными картами.
                  </p>
                  <p class="faq-list-text">
                    Как оформить заказ с самовывозом из магазина:
                  </p>
                  <p class="faq-list-text light">
                    Выберите нужные средства на сайте. Проверьте их наличие в магазине вашего города. 
                    При оформлении заказа выберите способ доставки «самовывоз из магазина». Как только заказ 
                    будет собран, вы получите SMS-сообщение.Заберите ваш заказ из магазина.
                  </p>
                  <p class="faq-list-min-title">
                    Обращаем ваше внимание:
                  </p>
                  <p class="faq-list-text">
                    – Срок хранения заказа - 3 дня с момента сбора. <br>
                    – Если товара из корзины не окажется в наличии, с вами свяжется оператор для уточнения деталей заказа. <br>
                    *Самовывоз действует во всех городах присутствия. Обращаем внимание, в Москве самовывоз 
                    действует только в ТЦ Афимолл Сити, ТЦ Метрополис, ТЦ Кунцево Плаза, ТРЦ Саларис.
                  </p>
                </li>
                <li>
                  <p class="faq-list-text">
                    Курьерская доставка на выбранный адрес. Доставка осуществляется курьерскими компаниями.
                    Доступные способы оплаты: банковской картой, наличными, применение подарочной карты невозможно.
                    Обращаем ваше внимание, курьерская служба Золотого Яблока принимает только безналичный расчёт.
                  </p>
                </li>
                <li>
                  <p class="faq-list-text">
                    Самовывоз из пунктов выдачи заказов курьерских служб. Перечень адресов выдачи доступен при 
                    выборе данного способа доставки. Доступные способы оплаты: банковской картой при наличии 
                    технической возможности, наличными, применение бонусов невозможно. Подарочные карты к оплате не принимаются.
                  </p>
                </li>
                <li>
                  <p class="faq-list-text">
                    Самовывоз из почтовых отделений Почты России, доставку осуществляет ФГУП «Почта России».
                    Доступные способы оплаты: банковской картой при наличии технической возможности, наличными, 
                    применение бонусов невозможно. Подарочные карты к оплате не принимаются.
                  </p>
                </li>
              </ol>
            </div>
            <div class="faq-tab-content-item" v-if="currentTab === 1">p</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaqPage',

  data() {
    return {
      deliveryInfoList: [
        {
          title: 'Пункты выдачи',
          text: 'Выбирайте наиболее удобный для вас пункт выдачи и дату получения заказа'
        },
        {
          title: 'Экспресс-доставка',
          text: 'Получайте товар уже на следующий день действует на товары с пометкой )'
        },
        {
          title: 'Профессионально и безопасно',
          text: 'Мы серьёзно относимся к процессу доставки и доверяем её только профессионалам своего дела.'
        },
      ],
      tabLinks: ['Доставка', 'Правила приема товара'],
      currentTab: 0
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
.faq {
  padding: 50px 0 150px;
}
.faq-title {
  font-weight: 700;
  font-size: 80px;
  line-height: 200%;
  margin-bottom: 26px;
}
.faq-top {
  display: flex;
  flex: 1;
  background-color: #F3F3F3;
  margin-bottom: 75px;
}
.faq-top-item {
  position: relative;
  padding: 40px;
}
.faq-top-item::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 60%;
  background-color: #E3E3E3;
}
.faq-top-item:last-child::after {
  width: 0;
}
.faq-top-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  margin-bottom: 8px;
}
.faq-top-info {
  font-size: 16px;
  line-height: 150%;
}
.faq-delivery {
  display: flex;
  justify-content: space-between;
  margin-bottom: 95px;
}
.faq-delivery-content {
  max-width: 717px;
  margin-right: 30px;
}
.faq-delivery-title {
  position: relative;
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  padding-bottom: 22px;
  margin-bottom: 18px;
}
.faq-delivery-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #CACACA;

}
.faq-delivery-price {
  font-size: 22px;
  line-height: 150%;
  margin-bottom: 15px;
}
.faq-delivery-price span {
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: #565656;
}
.faq-delivery-method, .faq-delivery-shops {
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
}
.faq-delivery-shops {
  color: #D785A1;
  margin-bottom: 25px;
}
.faq-delivery-info {
  position: relative;
  width: 100%;
  padding: 35px 35px 35px 127px;
  font-size: 18px;
  line-height: 150%;
  color: #828282;
  background-color: #F3F3F3;
  margin-bottom: 20px;
}
.faq-delivery-info::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  width: 74px;
  height: 74px;
  background-image: url('@/assets/Images/basket-gray.png');
}
.faq-delivery-btn {
  width: 100%;
  justify-self: flex-end;
}
.faq-delivery-img img {
  width: 800px;
  height: auto;
}
.faq-info {
}
.faq-info-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  margin-bottom: 43px;
}
.faq-tab-links {
  margin-bottom: 45px;
}
.faq-tab-link {
  display: inline-block;
  min-width: 270px;
  height: 53px;
  padding: 17px 10px;
  color: #000;
  text-align: center;
  background-color: #F3F3F3;
  margin-right: 20px;
  cursor: pointer;
}
.faq-tab-link.active {
  background-color: #000;
  color: #fff;
}
.faq-tab-content {
}
.faq-tab-content-item {
}
.faq-tab-content-list {
  padding-left: 20px;
}
.faq-tab-content-list li {
  list-style: decimal;
  margin-bottom: 80px;
}
.faq-list-text {
  line-height: 150%;
  margin-bottom: 30px;
}
.faq-list-text.light {
  color: rgba(0, 0, 0, 0.5);
}
.faq-list-title {
  font-weight: 700;
  font-size: 22px;
  line-height: 150%;
  margin-bottom: 20px;
}
.faq-list-min-title {
}
</style>