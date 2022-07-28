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
            <div class="slider-item" v-for="(item, index) in 8" :key="index">
                <div class="slider-card">
                    <div class="slider-item-img"><img src="@/assets/images/product-1.png" alt=""></div>
                    <h4 class="slider-item-title">Slimming Gel Body</h4>
                    <p class="slider-item-subtitle">Гель для тела для похудения</p>
                    <p class="slider-item-price">2 480 руб <span>3579 руб</span></p>
                </div>
            </div>
        </agile>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
    name: 'ProjectsSlider',
    components: {
        agile: VueAgile 
    },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
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
    margin-bottom: 5px;
}
.slider-item-img img {

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