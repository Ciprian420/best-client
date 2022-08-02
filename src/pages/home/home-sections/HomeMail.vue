<template>
    <div class="mail">
        <div class="container mail-inner">
            <img src="@/assets/images/mail-bg.jpg" alt="" class="mail-img">
            <div class="mail-content">
                <div class="mail-info">
                    <h4 class="mail-title">
                        Подпишитесь на рассылку
                    </h4>
                    <p class="mail-text">
                        Узнай первым о старте скидок и специальных предложений!
                    </p>
                    <form action="" class="mail-form">
                        <input type="email" name="" id="" class="mail-form-email" placeholder="Введите почту">
                        <button type="submit" class="mail-form-btn button">Подписаться</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsHomeMail',

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
.mail {
    margin-bottom: 150px;
}
.mail-inner {
    position: relative;
}
.mail-img {
    position: absolute;
    top: 51px;
    left: 10px;
}
.mail-content {
    width: 1100px;
    padding: 98px 98px 98px 450px;
    background-color: #F3F3F3;
    margin-left: auto;
}
.mail-info {
    max-width: 530px;
}
.mail-title {
    font-size: 48px;
    line-height: 110%;
    font-weight: 700;
    margin-bottom: 20px;
}
.mail-text {
    font-size: 22px;
    line-height: 130%;
    color: #5A5A5A;
    margin-bottom: 45px;
}
.mail-form-email {
    width: 100%;
    height: 37px;
    padding: 0 10px;
    font-size: 22px;
    background-color: #F3F3F3;
    border: none;
    border-bottom: 1px solid #C4C4C4;
    margin-bottom: 24px;
}
.mail-form-btn {
    width: 100%;
    font-size: 22px;
    padding: 13px 20px !important;
}
</style>