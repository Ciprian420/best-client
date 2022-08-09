<template>
    <div class="container auction-slider-wrapper">
        <div class="auction-slider-top">
            <h3 class="auction-slider-title">Акционные товары</h3>
            <div class="auction-slider-arrows">
                <div @click="prevSlide" class="auction-slider-prev" :class="{active: isPrevArrowActive}">
                    <img src="@/assets/images/arrow.png" alt="">
                </div>
                <div @click="nextSlide" class="auction-slider-next" :class="{active: isNextArrowActive}">
                    <img src="@/assets/images/arrow.png" alt="">
                </div>
            </div>
        </div>
        <div class="auction-slider">
            <div class="auction-slider-item" v-for="(item, index) in products" :key="index"
            :class="{active: index + 1 >= firstActiveSlide && index + 1 <= lastActiveSlide,
                     prev: index + 1 < firstActiveSlide, next: index + 1 > lastActiveSlide}">>
                <div class="auction-slider-card">
                    <div class="auction-slider-item-img"><img :src="item.imageURL" alt=""></div>
                    <h4 class="auction-slider-item-title">{{item.name}}</h4>
                    <p class="auction-slider-item-subtitle">
                       {{item.description}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'AuctionSlider',
  data() {
    return {
      products: [],
      firstActiveSlide: 1,
      lastActiveSlide: 1,
      slidesNumber: 1,
      isPrevArrowActive: false,
      isNextArrowActive: true
    };
  },
  mounted() {
    axios.get('http://localhost:3002/api/v1/products')
        .then(response => response.data.products.forEach(item =>{
          if (item.isPromo === true ){
            this.products.push(item)
          }
        }))
        .then(() => console.log(this.products))
  },
  methods: {
        prevSlide() {
            if (this.lastActiveSlide - this.slidesNumber === 0) {
                this.isPrevArrowActive = false;
                return;
            }
            this.isPrevArrowActive = true;
            this.isNextArrowActive = true;
            this.firstActiveSlide--;
            this.lastActiveSlide--;
            if (this.lastActiveSlide - this.slidesNumber === 0) {
                this.isPrevArrowActive = false;
            }
        },
        nextSlide() {
            if (this.products.length === this.firstActiveSlide + this.slidesNumber - 1) {
                this.isNextArrowActive = false;
                return;
            }
            this.isPrevArrowActive = true;
            this.isNextArrowActive = true;
            this.firstActiveSlide++;
            this.lastActiveSlide++;
            if (this.products.length === this.firstActiveSlide + this.slidesNumber - 1) {
                this.isNextArrowActive = false;
            }
        }
    }
};
</script>

<style scoped>
.auction-slider {
    position: relative;
    display: flex;
    justify-content: center;
    overflow: hidden;
}
.auction-slider-wrapper {
    position: relative;
    margin-bottom: 185px;
}
.auction-slider-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}
.auction-slider-arrows {
    display: flex;
    justify-content: space-between;
    width: 70px;
    user-select: none;
}
.auction-slider-prev, .auction-slider-next {
    opacity: 0.4;
}
.auction-slider-prev.active, .auction-slider-next.active {
    opacity: 1;
    cursor: pointer;
}
.auction-slider-item {
    transition: all .15s;
}
.auction-slider-item.prev {
    position: absolute;
    left: -5000px;
    transform: translateX(-100%);
}
.auction-slider-item.next {
    position: absolute;
    right: -5000px;
    transform: translateX(100%);
}
.auction-slider-item.active {
    position: static;
    display: block;
    transform: translateX(0);
}
.auction-slider-prev img {
    transform: rotate(-180deg);
}
.auction-slider-card {
    width: 900px;
    margin: 0 auto;
}
.auction-slider-item-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    height: 450px;
    text-align: center;
    margin-bottom: 5px;
}
.slider-item-img img {
    max-width: 100%;
    max-height: 100%;
}
.auction-slider-item-title {
    font-size: 48px;
    line-height: 130%;
    font-weight: 700;
    letter-spacing: 0.0375em;
    text-transform: uppercase;
    margin-bottom: 10px;
}
.slider-item-subtitle {
    display: inline-block;
    max-width: 200px;
    color: #5C5C66;
}
</style>