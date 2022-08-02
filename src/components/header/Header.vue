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
          <div class="main-header-logo"><a href="#"><img src="@/assets/Images/logo.png" alt=""></a></div>
          <ul class="main-header-menu">
            <li v-for="(item, index) in menuLinks" :key="index"  @click="index === 0 ? showPopup = !showPopup : ''">{{item}}</li>
          </ul>
        </div>
        <ul class="main-header-buttons">
          <li><img src="@/assets/Images/search-icon.png" alt=""></li>
          <li><img src="@/assets/Images/heart-icon.png" alt=""></li>
          <li><img src="@/assets/Images/basket-icon.png" alt=""></li>
          <li><img src="@/assets/Images/profile-icon.png" alt=""></li>
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
      menuLinks: ['Каталог', 'Клуб косметологов', 'Сертификаты', 'Доставка и оплата', 'Контакты', 'Блог'],
      showPopup: false
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
}
.main-header-menu,.main-header-buttons {
  display: flex;
}
.main-header-menu li, .main-header-buttons li {
  margin-right: 25px;
  cursor: pointer;
}
.main-header-menu li:last-child, .main-header-buttons li:last-child {
  margin-right: 0;
}
</style>
