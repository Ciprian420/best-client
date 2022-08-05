<template>
    <div class="container slider-wrapper">
        <div class="slider-top">
            <h3 class="slider-title">Новинки</h3>
            <div class="slider-arrows">
                <div @click="$refs.carousel.goToPrev()" class="slider-prev"><img src="@/assets/images/arrow.png" alt=""></div>
                <div @click="$refs.carousel.goToNext()" class="slider-next"><img src="@/assets/images/arrow.png" alt=""></div>
            </div>
        </div>
        <agile ref="carousel" :slidesToShow="4" :infinite="false" :navButtons="false" :dots="false">
            <div class="slider-item" v-for="(item, index) in products" :key="index">
                <div class="slider-card">
                    <div class="slider-item-img"><img :src="item.imageURL" alt=""></div>
                    <h4 class="slider-item-title">{{item.name}}</h4>
                    <p class="slider-item-subtitle">{{item.shortDescription}}</p>
                    <p class="slider-item-price">{{item.price}} руб <span>{{item.oldPrice}} руб</span></p>
                </div>
            </div>
        </agile>
    </div>
</template>

<script>
import axios from 'axios';
import { VueAgile } from 'vue-agile'

export default {
    name: 'ProjectsSlider',
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
            .then(response => response.data.products.forEach(item => this.products.push(item)))
            .then(() => console.log(this.products))
            .catch(err => console.log(err))
    },
};
</script>

<style scoped>
.slider-wrapper {
    position: relative;
    margin-bottom: 185px;
}
.slider-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}
.slider-arrows {
    display: flex;
    justify-content: space-between;
    width: 70px;
    user-select: none;
}
.slider-prev, .slider-next {
    cursor: pointer;
}
.slider-prev img {
    transform: rotate(-180deg);
}
.slider-card {
    width: 350px;
}
.slider-item-img {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    width: 400px;
    margin-bottom: 5px;
}
.slider-item-img img {
    width: 300px;
    height: 300px;
    /* object-fit: cover; */
}
.slider-item-title {
    margin-bottom: 5px;
}
.slider-item-subtitle {
    display: inline-block;
    max-width: 200px;
    color: #5C5C66;
}
.slider-item-price {
    display: inline-block;
    font-weight: 700;
}
.slider-item-price span {
    font-size: 14px;
    color: #BCBCBC;
}
</style>