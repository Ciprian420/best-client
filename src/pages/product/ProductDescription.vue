<template>
  <div class="offers">
    <p class="description">Описание</p>
    <p class="uses">Применение</p>
    <p class="brand">Бренд</p>
  </div>
  <div class="line">
    <div class="bolder-line"></div>
  </div>
  <div class="description-container">

    <p class="description-title">Skindom Luxury cell pepride Deep Cleansing oil</p>
    <p class="product-number">Артикул: 19000000618</p>
    <div class="text-container">
      <p class="description-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto beatae commodi consequatur corporis,
        cum cumque delectus doloremque earum et itaque libero maiores molestiae nam nihil perferendis perspiciatis placeat
        possimus praesentium quae quaerat quas quia, repudiandae sequi similique soluta tempora vero vitae voluptatem voluptatum.
        Adipisci alias animi cumque distinctio doloribus non, possimus voluptas voluptate. Dicta dolorem error ex fugit incidunt minima
        officia placeat veritatis! Alias autem beatae debitis dolorum harum laudantium magnam natus neque quibusdam quis? Adipisci aliquid
        animi beatae consequatur, dolorum error labore laborum nisi quasi recusandae reiciendis repudiandae, tempora totam! Dolores et ex
        maiores molestiae natus nemo similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur culpa cumque eos
        incidunt labore neque praesentium quasi reiciendis tenetur. Ab aperiam esse est hic quod. Est facilis fugit vero! Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Aut doloremque esse exercitationem iure, iusto mollitia natus nulla sapiente ut veniam! Accusamus d
        ignissimos incidunt numquam praesentium qui, recusandae rem repellat sequi?</p>
    </div>
    <p class="description-title" style="font-size: 18px">Подробные характеристики</p>
  </div>

  <div class="product-info">
    <div class="product-info-titles">
      <p style="color: #AFAFAF; font-size: 16px;">Вид ухода</p>
      <p style="color: #AFAFAF; font-size: 16px;">Эффект</p>
      <p style="color: #AFAFAF; font-size: 16px;">Вес</p>
      <p style="color: #AFAFAF; font-size: 16px;">Объем</p>
      <p style="color: #AFAFAF; font-size: 16px;">Страна производитель</p>
      <p style="color: #AFAFAF; font-size: 16px;">Тип волос</p>
    </div>
    <div class="product-info-description">
      <p>Для домашнего ухода, Для косметологов</p>
      <p>Блеск, Восстановление, Питание, Против перхоти, Против секущихся кончиков, Увлажнение</p>
      <p>1590 г</p>
      <p>1500 мл</p>
      <p>Южная Корея</p>
      <p>Жирная кожа головы, Непослушные волосы, Нормальные волосы, Окрашенные волосы, Сухие и поврежденные волосы</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDescription"
}
</script>

<style scoped>
.offers{
  display: flex;
  flex-direction: row;
  margin-left: 50px;
}
p{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
}
.description, .uses, .brand{
  font-family:'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-right: 30px ;
}
.line{
  height: 1px;
  width: 100%;
  background-color: black;
  margin-left: 50px;
}
.bolder-line{
  height: 3px;
  width: 5%;
  background-color: black;
}
.description-title{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
}
.description-container{
  margin-left: 50px;
  margin-top: 30px;
}
.text-container{
  width: 70%;
}
.product-info{
  display: flex;
  justify-content: space-between;
  margin-left: 50px;
}
.product-info-description{
  margin-right: 900px;
}
</style>