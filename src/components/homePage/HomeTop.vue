<template>
    <div class="top">
        <div class="container top-inner">
            <h1 class="top-title">SKINDOM</h1>
            <p class="top-subtitle">
                Специальные цены только до 30 апреля
            </p>
            <a href="" class="top-btn button">Перейти в каталог</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTop',
};
</script>

<style scoped>
.top {
    height: 698px;
    padding-top: 90px;
    background-image: url('@/assets/Images/top-bg.jpg');
    background-size: cover;
    margin-bottom: 68px;
}
.top-inner {
    padding-left: 150px;
}
.top-title {
    font-weight: 600;
    font-size: 99px;
    line-height: 150%;
}
.top-subtitle {
    font-size: 24px;
    line-height: 150%;
    margin-bottom: 45px;
}
</style>