<template>
    <div class="container auction-slider-wrapper">
        <div class="auction-slider-top">
            <h3 class="auction-slider-title">Акционные товары</h3>
            <div class="auction-slider-arrows">
                <div @click="$refs.carousel.goToPrev()" class="auction-slider-prev"><img src="@/assets/images/arrow.png" alt=""></div>
                <div @click="$refs.carousel.goToNext()" class="auction-slider-next"><img src="@/assets/images/arrow.png" alt=""></div>
            </div>
        </div>
        <agile ref="carousel" :slidesToShow="1" :infinite="false" :navButtons="false" :dots="false">
            <div class="auction-slider-item" v-for="(item, index) in products" :key="index">
                <div class="auction-slider-card">
                    <div class="auction-slider-item-img"><img :src="item.imageURL" alt=""></div>
                    <h4 class="auction-slider-item-title">{{item.name}}</h4>
                    <p class="auction-slider-item-subtitle">
                       {{item.description}}
                    </p>
                </div>
            </div>
        </agile>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'
import axios from "axios";

export default {
    name: 'AuctionSlider',
    components: {
        agile: VueAgile 
    },
  data() {
    return {
      products: []
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
};
</script>

<style scoped>
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
    cursor: pointer;
}
.auction-slider-prev img {
    transform: rotate(-180deg);
}
.auction-slider-card {
    width: 900px;
    margin: 0 auto;
}
.auslider-item-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
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