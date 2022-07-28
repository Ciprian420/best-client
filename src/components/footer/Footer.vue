<template>
    <footer class="footer">
        <div class="container footer-inner">
            <div class="footer-items">
                <div class="footer-item">
                    <div class="footer-contacts">
                        <div class="footer-logo"><img src="@/assets/images/logo.png" alt=""></div>
                        <a href="" class="footer-tel">{{phoneNumber}}</a>
                        <a href="" class="footer-email">{{email}}</a>
                        <p class="footer-address">{{address}}</p>
                    </div>
                </div>
                <div class="footer-item">
                    <div class="footer-item-catalog">
                        <h4 class="footer-item-title">Каталог</h4>
                        <ul class="footer-list">
                            <li v-for="(item, index) in catalogList" :key="index"><a href="">{{item}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-item">
                    <div class="footer-lists">
                        <div class="footer-item-info">
                            <h4 class="footer-item-title">Информация</h4>
                            <ul class="footer-list">
                                <li v-for="(item, index) in infoList" :key="index"><a href="">{{item}}</a></li>
                            </ul>
                        </div>
                        <div class="footer-item-social">
                            <h4 class="footer-item-title">Мы в социальных сетях</h4>
                            <ul class="footer-list-social">
                                <li><a href=""><img src="@/assets/images/telegram.png" alt=""></a></li>
                                <li><a href=""><img src="@/assets/images/ok.png" alt=""></a></li>
                                <li><a href=""><img src="@/assets/images/facebook.png" alt=""></a></li>
                                <li><a href=""><img src="@/assets/images/watsapp.png" alt=""></a></li>
                                <li><a href=""><img src="@/assets/images/viber.png" alt=""></a></li>
                                <li><a href=""><img src="@/assets/images/instagram.png" alt=""></a></li>
                                <li><a href=""><img src="@/assets/images/vk.png" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                    <ul class="footer-pay-methods">
                        <li><a href=""><img src="@/assets/images/mir.png" alt=""></a></li>
                        <li><a href=""><img src="@/assets/images/googlePay.png" alt=""></a></li>
                        <li><a href=""><img src="@/assets/images/visa.png" alt=""></a></li>
                        <li><a href=""><img src="@/assets/images/webmoney.png" alt=""></a></li>
                        <li><a href=""><img src="@/assets/images/yandex.png" alt=""></a></li>
                        <li><a href=""><img src="@/assets/images/master-card.png" alt=""></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-copy">
                    <p>ООО «Шармира»</p>
                    <p>ОГРН 1167746492704</p>
                    <p>KK Shop © Москва 2021 Все права защищены.</p>
                </div>
                <p class="footer-info">
                    Все торговые марки принадлежат их владельцам. Копирование составляющих 
                    частей сайта в какой бы то ни было форме без разрешения владельца авторских прав запрещено.
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',

    data() {
        return {
            phoneNumber: '8 495 259 25 00',
            email: 'Sale@kkshop.ru',
            address: 'Москва, ул. Шаболовка, д. 34, стр. 7',
            catalogList: ['Очищение', 'Пилинги и скрабы', 'Тоники', 'Кремы', 'Концентраты', 'Концентраты с ферментами',
                          'Сыворотки', 'Эссенции', 'Эмульсии и гели', 'Маски для лица', 'Жемчужная линия', 'Уход за телом',
                          'Уход за волосами', 'Наборы и аксессуары'],
            infoList: ['Клуб косметологов', 'Сертификаты', 'Доставка и Оплата', 'Конфиденциальность', 'Контакты', 'Блог', 'Возврат'],
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.footer {
    padding: 36px 0 24px;
}
.footer-items {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.footer-contacts {
    font-size: 22px;
    line-height: 120%;
    font-weight: 700;
    color: #828282;
}
.footer-logo {
    margin-bottom: 15px;
}
.footer-tel, .footer-email {
    display: block;
    color: #828282;
    text-decoration: none;
    margin-bottom: 15px;
}
.footer-address {
    font-size: 16px;
    line-height: 150%;
    font-weight: 400;
    color: #828282;
}
.footer-item-title {
    font-size: 22px;
    line-height: 150%;
    margin-bottom: 10px;
}
.footer-list li {
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 8px;
}
.footer-list a {
    color: #4E4E4E;
    text-decoration: none;
}
.footer-lists {
    display: flex;
    justify-content: space-between;
    margin-bottom: 130px;
}
.footer-item-info {
}
.footer-list-social, .footer-pay-methods {
    display: flex;
    align-items: center;
}
.footer-list-social li {
    margin-right: 10px;
}
.footer-pay-methods li {
    margin-right: 45px;
}
.footer-list-social li:last-child, .footer-pay-methods li:last-child {
    margin-right: 0;
}
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 16px;
    line-height: 150%;
    color: #B7B7B7;
}
.footer-info {
    max-width: 708px;
}
</style>