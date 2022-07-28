<template>
  <div class="container">
    <p class="page-title">Заполните профиль и получите 10% бонусную карту</p>
    <div class="input-field col s6">
      <input placeholder="Фамилия" id="first_name" type="text" class="validate">
      <input placeholder="Имя" id="first_name" type="text" class="validate">
      <input placeholder="Отчество" id="first_name" type="text" class="validate">
      <div class="align-checkboxes">
      <p class="checkbox">
        <label>
          <input type="checkbox" />
          <span>Мужской</span>
        </label>
      </p>
        <p class="checkbox">
          <label>
            <input type="checkbox" />
            <span>Женский</span>
          </label>
        </p>
        <p class="checkbox">
          <label>
            <input type="checkbox" />
            <span>Не указан</span>
          </label>
        </p>
      </div>
      <p class="birthday-text">Дата рождения:</p>
      <input type="date" class="datepicker">
      <div class="input-field col s12">
        <input id="email" type="email" class="validate" placeholder="Ваша почта">
      </div>
        <input id="icon_telephone" type="tel" class="validate" placeholder="Tелефон">
      <input id="email" type="email" class="validate" placeholder="Город">
      <p class="checkbox">
        <label>
          <input type="checkbox" />
          <span class="terms-text">Я даю согласие на обработку своих персональных данных в соответсвии с Политикой в отношении обработки персональных данных и Пользовательским соглашением.</span>
        </label>
      </p>
      <button class="waves-effect waves-light btn submit-button">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo"
}
</script>

<style scoped>
.submit-button{
  background-color: black;
  color: white;
  margin-top: 30px;
  width: 350px;
  height: 50px;
  margin-left: 40px;
}
.terms-text{
  width: 480px;
  height: 54px;
}
.birthday-text{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 150%;
  margin-top: 30px;
}
.checkbox{
  margin-right: 30px;
}
.align-checkboxes{
  display: flex;
  flex-direction: row;
}
.container{
  margin-top: 60px;
}
.page-title{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 150%;
}
input{
  width: 550px!important;
  margin-bottom: 30px!important;
}
</style>