<template>
  <main class="main">
    <home-top></home-top>
    <home-advantages></home-advantages>
    <slider></slider>
    <auction-slider></auction-slider>
    <slider></slider>
    <home-mail></home-mail>
  </main>
</template>

<script>
import HomeTop from '@/pages/home/home-sections/HomeTop.vue'
import HomeAdvantages from '@/pages/home/home-sections/HomeAdvantages.vue'
import Slider from '@/components/sliders/Slider.vue'
import AuctionSlider from '@/components/sliders/AuctionSlider.vue'
import HomeMail from '@/pages/home/home-sections/HomeMail.vue'

export default {
  name: 'HomePage',
  components: {
    HomeTop,
    HomeAdvantages,
    Slider,
    AuctionSlider,
    HomeMail,
  }
}
</script>
