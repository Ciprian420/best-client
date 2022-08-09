<template>
  <home-top></home-top>
  <home-advantages></home-advantages>
  <slider :title="'Новинки'" :slider-param="{firstActiveSlide: 1, lastActiveSlide: 4, slidesNumber: 4,}"></slider>
  <auction-slider></auction-slider>
  <slider :title="'Рекомендуемые товары'"></slider>
  <home-mail></home-mail>
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
