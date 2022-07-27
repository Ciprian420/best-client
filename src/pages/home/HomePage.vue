<template>
  <main class="main">
    <header-component></header-component>
    <home-top></home-top>
    <home-advantages></home-advantages>
    <slider></slider>
    <auction-slider></auction-slider>
    <slider></slider>
    <home-mail></home-mail>
    <footer-component></footer-component>
  </main>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from '@/components/header/Header.vue'
import HomeTop from '@/components/homePage/HomeTop.vue'
import HomeAdvantages from '@/components/homePage/HomeAdvantages.vue'
import Slider from '@/components/sliders/Slider.vue'
import AuctionSlider from '@/components/sliders/AuctionSlider.vue'
import HomeMail from '@/components/homePage/HomeMail.vue'
import FooterComponent from '@/components/footer/Footer.vue'

export default {
  name: 'HomePage',
  components: {
    HeaderComponent,
    HomeTop,
    HomeAdvantages,
    Slider,
    AuctionSlider,
    HomeMail,
    FooterComponent
  }
}
</script>
