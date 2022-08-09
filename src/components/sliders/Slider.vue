<template>
    <div class="container slider-wrapper">
        <div class="slider-top">
            <h3 class="slider-title">{{title}}</h3>
            <div class="slider-arrows">
                <div @click="prevSlide" class="slider-prev" :class="{active: isPrevArrowActive}">
                    <img src="@/assets/images/arrow.png" alt="">
                </div>
                <div @click="nextSlide" class="slider-next" :class="{active: isNextArrowActive}">
                    <img src="@/assets/images/arrow.png" alt="">
                </div>
            </div>
        </div>
        <div class="slider">
            <div class="slider-item" v-for="(item, index) in products" :key="index" 
            :class="{active: index + 1 >= firstActiveSlide && index + 1 <= lastActiveSlide,
                     prev: index + 1 < firstActiveSlide, next: index + 1 > lastActiveSlide}">
                <div class="slider-card">
                    <div class="slider-item-img"><img :src="item.imageURL" alt=""></div>
                    <h4 class="slider-item-title">{{item.name}}</h4>
                    <p class="slider-item-subtitle">{{item.shortDescription}}</p>
                    <p class="slider-item-price">{{item.price}} руб <span>{{item.oldPrice}} руб</span></p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
// import { VueAgile } from 'vue-agile';

export default {
    name: 'ProjectsSlider',
    props: {
        title: String
    },
    data() {
        return {
            products: [],
            firstActiveSlide: 1,
            lastActiveSlide: 4,
            slidesNumber: 4,
            isPrevArrowActive: false,
            isNextArrowActive: true
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
.slider {
    position: relative;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
}
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
    opacity: 0.4;
}
.slider-prev.active, .slider-next.active {
    opacity: 1;
    cursor: pointer;
}
.slider-prev img {
    transform: rotate(-180deg);
}
.slider-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 350px;
    height: 100%;
}
.slider-item {
    transition: all .15s;
}
.slider-item.prev {
    position: absolute;
    left: -5000px;
    transform: translateX(-100%);
}
.slider-item.next {
    position: absolute;
    right: -5000px;
    transform: translateX(100%);
}
.slider-item.active {
    position: static;
    display: block;
    transform: translateX(0);
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
    margin-right: 10px;
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