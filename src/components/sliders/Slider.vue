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
                    <h4 class="slider-item-title">fafafa</h4>
                    <p class="slider-item-subtitle">dadada</p>
                    <p class="slider-item-price">dadada руб <span>dada руб</span></p>
                </div>
            </div>
        </agile> 
    </div>
</template>

<script>
import axios from 'axios';
import { VueAgile } from 'vue-agile';

export default {
    name: 'ProjectsSlider',
    components: {
        agile: VueAgile 
        
    },
    data() {
        return {
            products: [],
            arr: [1, 2, 3, 1, 1, 1,1]
        };
    },
    mounted() {
        axios.get('http://localhost:3002/api/v1/products')
            .then(response => response.data.products.forEach(item => this.products.push(item)))
            .then(() => this.products)
            .then(() => {
                console.log(this.products[0]);
            })
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
    border: 1px solid red;
}
.slider-item-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 300px;
    margin-bottom: 5px;
}
.slider-item-img img {
    max-width: 100%;
    max-height: 100%;
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