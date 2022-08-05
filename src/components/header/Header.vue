<template>
  <header class="main-header">
    <div class="main-header-top">
      <div class="container main-header-top-inner">
        <select name="" id="" class="main-header-city">
          <option value="Санкт-Петербург">Санкт-Петербург</option>
        </select>
        <a href="tel:+84952592500" class="main-header-tel">8 495 259 25 00</a>
      </div>
    </div>
    <nav class="main-header-nav">
      <div class="container main-header-nav-inner">
        <div class="main-header-links">
          <router-link to="/home">
          <div class="main-header-logo"><a href="#"><img src="@/assets/images/logo.png" alt=""></a></div>
          </router-link>
          <ul class="main-header-menu">
            <li v-for="(item, index) in menuLinks"
                @mouseover="hoverOnThisElement = index"
                @mouseout="hoverOnThisElement = null"
                :class="[ hoverOnThisElement === index ? { active: hoverOnThisElement } : null ]"
                :key="index"  @click="index === 0 ? showPopup = !showPopup : ''">
              <router-link :to="item.link" class="main-header-menu">{{item.name}}</router-link>
            </li>
          </ul>
        </div>
        <ul class="main-header-buttons">
          <li @click="toggleSearchPopupState"><img src="@/assets/images/search-icon.png" alt=""></li>
          <li><img src="@/assets/images/heart-icon.png" alt=""></li>
          <li @click="toggleProductPopupState"><img src="@/assets/images/basket-icon.png" alt=""></li>
          <li @click="toggleUserPopupState"><img src="@/assets/images/profile-icon.png" alt=""></li>
        </ul>
      </div>
    </nav>
  </header>
  <header-popup v-if="showPopup === true"></header-popup>
  <main-popup v-show="isSearchPopupVisible" :active="toggleSearchPopupState">
    <div class="row">
      <div class="input-field col s6">
        <input id="first_name2" type="text" class="validate">
        <label class="active" for="first_name2">Search</label>
      </div>
    </div>
  </main-popup>
  <main-popup v-show="isProductPopupVisible" :active="toggleProductPopupState">
    <p class="popup-title">Корзина / 1 шт.</p>
    <p class="popup-description">быстрая доставка</p>
    <cart-product v-for="product in products" :key="product.id" :productInfo="product"></cart-product>
  </main-popup>
  <main-popup v-show="isUserPopupVisible" :active="toggleUserPopupState">
    <div class="user-container">
      <p class="popup-title">Покупай со скидкой</p>
      <p class="user-popup-description">Зарегистрируйтесь, чтобы получить скидку по бонусной карте, начать копить бонусы и оплачивать покупки подарочными сертификатами.</p>
      <button class="waves-effect waves-light btn submit-btn">Войти / Зарегистрироваться</button>
    </div>
  </main-popup>
</template>

<script>
import HeaderPopup from "@/components/header/HeaderPopup.vue";
import MainPopup from "@/components/popups/MainPopup";
import cartProduct from "@/components/header/cartProduct";

export default {
  name: 'HeaderComponent',
  components: {
    HeaderPopup,
    MainPopup,
    cartProduct
  },
  data() {
    return {
      menuLinks: [
        {name:'Каталог', link: ''},
        {name:'Клуб косметологов', link: '/club'},
        {name:'Сертификаты', link: ''},
        {name:'Доставка и оплата', link: '/faq'},
        {name:'Контакты', link: '/contacts'},
        {name:'Блог', link: '/blog'}
      ],
      showPopup: false,
      hoverOnThisElement: null,
      products: []
    };
  },
  computed: {
    isSearchPopupVisible() {
      return this.$store.getters.getSearchPopupState
    },
    isProductPopupVisible() {
      return this.$store.getters.getProductPopupState
    },
    isUserPopupVisible() {
      return this.$store.getters.getUserPopupState
    }
  },
  methods: {
    toggleSearchPopupState(value) {
      this.$store.commit("toggleSearchPopupState", value)
    },
    toggleProductPopupState(value) {
      this.$store.commit("toggleProductPopupState", value)
      if (localStorage.products) {
        let productsData = JSON.parse(localStorage.getItem('products'));
        this.$store.commit('toggleProductsState', productsData);
        this.products = this.$store.getters.getProductsState;
      }
    },
    toggleUserPopupState(value) {
      this.$store.commit("toggleUserPopupState", value)
    }
  }
}
</script>
<style scoped>
.user-popup-description{
  width: 500px;
  margin-top: 40px;
  margin-bottom: 40px;
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
.popup-title{
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  line-height: 150%;
  margin-top: -40px;

}
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 101;
}
.main-header-top {
  height: 50px;
  background-color: #323232;
}
.main-header-top-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
}
.main-header-tel {
  font-size: 22px;
  line-height: 150%;
  color: #fff;
  text-decoration: none;
}
.main-header-nav {
  height: 87px;
  background-color: #fff;
}
.main-header-nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 87px;
}
.main-header-links {
  display: flex;
  align-items: center;
}
.main-header-logo {
  margin-right: 40px;
}
.main-header-menu {
  font-size: 18px;
  line-height: 150%;
  color: #000;
  text-decoration: none;
  background: transparent;
}
.main-header-menu li {
  position: relative;
}
.main-header-menu li:after {
  position: absolute;
  background: #5C5C66;
  content: '';
  height: 2px;
  bottom: -4px;
  left: 0;
  width: 100%;
  transition: transform 300ms;
  transform: scale(0);
}
.main-header-menu li:hover::after {
  transform-origin: center;
  transform: scale(1);
}
.main-header-menu,.main-header-buttons {
  display: flex;
}
.main-header-menu li, .main-header-buttons li {
  margin-right: 25px;
  cursor: pointer;
}
.main-header-menu li:hover, .main-header-buttons li:hover {
  opacity: 0.6;
}
.main-header-menu li:last-child, .main-header-buttons li:last-child {
  margin-right: 0;
}
.active {
  background: transparent;
  opacity: 0.7;
  color: #5C5C66;
}
input{
  width: 400px!important;
}
</style>
