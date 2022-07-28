<template>
    <div class="advantages">
        <div class="container">
            <div class="advantages-content">
                <div class="advantages-image"><img src="@/assets/images/advantages-img.jpg" alt=""></div>
                <div class="advantages-info">
                    <h4 class="advantages-title">
                        Ведущий эксперт на российском рынке профессиональной косметики из Кореи—ККshop™
                    </h4>
                    <p class="advantages-text">
                        Мы делаем мир профессиональной корейской косметики доступным для каждого косметолога
                        в России, предоставляя возможность работать с лучшими достижениями корейских учёных
                        и специалистов в области сохранения здоровья и ухода за кожей
                    </p>
                    <a href="" class="advantages-link">Подробнее</a>
                </div>
            </div>
            <ul class="advantages-list">
                <li v-for="(item, index) in advantagesList" :key="index">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeAdvantages',

    data() {
        return {
            advantagesList: ['Безупречный состав и эффективность', 'Натуральность и экологичность', 'Наличный и безналичный расчет',
                            'Доставка по всей России'],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.advantages {
    margin-bottom: 150px;
}
.advantages-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
}
.advantages-image img {
    width: 700px;
    height: auto;
}
.advantages-info {
    max-width: 700px;
}
.advantages-title {
    font-size: 32px;
    line-height: 130%;
    margin-bottom: 15px;
}
.advantages-text {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 24px;
}
.advantages-link {
    color: #CC4C6E;
    text-decoration: none;
}
.advantages-list {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    line-height: 150%;
    color: #464646;
}
.advantages-list li {
    display: inline-block;
    width: 360px;
    height: 87px;
    padding: 18px 150px 18px 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>