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
          <li><img src="@/assets/images/search-icon.png" alt=""></li>
          <li><img src="@/assets/images/heart-icon.png" alt=""></li>
          <li><img src="@/assets/images/basket-icon.png" alt=""></li>
          <li><img src="@/assets/images/profile-icon.png" alt=""></li>
        </ul>
      </div>
    </nav>
  </header>
  <header-popup v-if="showPopup === true"></header-popup>
</template>

<script>
import HeaderPopup from "@/components/header/HeaderPopup.vue";

export default {
  name: 'HeaderComponent',
  components: {
    HeaderPopup
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
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
