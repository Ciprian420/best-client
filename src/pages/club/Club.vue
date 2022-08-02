<template>
  <div class="main">
    <div class="club">
      <div class="container club-inner">
        <div class="club-image-wrapper">
          <img src="@/assets/Images/club-img.jpg" alt="">
          <div class="club-image-content">
            <p class="club-image-subtitle">Тоник для лица освежающий охлаждающий</p>
            <p class="club-image-title">Skindom</p>
            <a href="" class="button">Перейти в каталог</a>
          </div>
        </div>
        <div class="club-content">
          <h2 class="club-title">Клуб косметологов</h2>
          <div class="club-item">
            <h4 class="club-item-title">
              Как вступить вклубкосметологов?
            </h4>
            <p class="club-item-text">
              Вступить в клуб косметологов могут только специалисты индустрии красоты. Участникам клуба доступны 
              специальные цены и профобъёмы на продукцию. Вступление в клуб остается на усмотрение администрации.
            </p>
          </div>
          <div class="club-item">
            <h4 class="club-item-title">Для регистрации косметологов необходимо</h4>
            <div class="club-item flex">
              <div class="club-item min">
                <h5 class="club-item-mintitle">
                  Московская область и др
                </h5>
                <p class="club-item-text gray">
                  Приехать к нам в офис по адресу: г. Москва, ул. Шаболовка, д. 34, стр. 7
                  Предъявить документ о профессиональном образовании и паспорт
                </p>
              </div>
              <div class="club-item min">
                <h5 class="club-item-mintitle">
                  Регионам
                </h5>
                <p class="club-item-text gray">
                  Прислать сканы документа о профессиональном образовании и паспорт на электронную почту sale@kkshop.ru
                </p>
              </div>
            </div>
          </div>
          <div class="club-item">
            <h4 class="club-item-title">
              Для вступления в клуб косметологов после предоставления документов вам необходимо
            </h4>
            <p class="club-item-text">
              Пройти регистрацию на нашем сайте. После регистрации Вам будет дана возможность совершать 
              покупки в нашем интернет-магазине по специальным ценам с выбором профобъёмов на продукцию.  
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClubPage',

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
.club {
  padding: 75px 0;
}
.club-inner {
  display: flex;
  justify-content: space-between;
}
.club-image-wrapper {
  position: relative;
  height: fit-content;
}
.club-image-content {
  position: absolute;
  left: 16px;
  bottom: 16px;
  width: 370px;
  height: 220px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.8);
}
.club-image-subtitle {
  line-height: 200%;
  margin-bottom: 7px;
}
.club-image-title {
  font-weight: 700;
  font-size: 66px;
  line-height: 130%;
  text-transform: uppercase;
  letter-spacing: 0.0375em;
}
.club-content {
  max-width: 760px;
}
.club-title {
  font-size: 80px;
  line-height: 85px;
  font-weight: 700;
  margin-bottom: 40px;
}
.club-item {
  margin-bottom: 40px;
}
.club-item.min {
  max-width: 340px;
}
.club-item.flex {
  display: flex;
  justify-content: space-between;
}
.club-item-title {
  font-size: 22px;
  line-height: 150%;
  font-weight: 700;
  margin-bottom: 20px;
}
.club-item-text {
  font-weight: 400;
font-size: 16px;
line-height: 150%;
}
.flex {
}
.club-item-mintitle {
  font-size: 16px;
  line-height: 150%;
  font-weight: 700;
  margin-bottom: 10px;
}
.gray {
}
</style>