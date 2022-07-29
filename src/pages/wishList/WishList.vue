<template>
<main class="main">
  <div class="container">
    <div class="title-and-profile-container">
      <div class="profile">
        <p class="user-name">Esther Howard</p>
        <img src="@/assets/images/profile-pic.png" alt="" class="profile-pic">
      </div>
      <div class="title-container">
        <p class="page-title">Мой лист пожеланий</p>
      </div>
  </div>
    <div class="tab-and-categories-container">
      <div class="categories">
        <ul>
          <li class="category-text" v-for="(item, index) in categories" :key="index" @click="currentTab = index"
              :class="{active: currentTab === index}"> {{item}} </li>
        </ul>
      </div>
      <user-info></user-info>
    </div>
  </div>
</main>
</template>

<script>
import UserInfo from "@/components/userInfo/UserInfo";
export default {
  name: "WishList",
  components: {UserInfo},
  data() {
    return{
      categories: [ "мои карты" ," мои клиентские дни " , "личная информация" , "избранное" , "мои покупки", "чат с консультантом", "настройки" ,"выйти" ],
      currentTab: 0
    }
  }
}
</script>

<style scoped>
.tab-and-categories-container{
  display: flex;
  flex-direction: row;
}
.title-and-profile-container{
  display: flex;
  flex-direction: row;
}
.page-title{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 90px;
  margin-left:250px;
  line-height: 60px;
}
.container{
  height: 1000px;
margin-top: 20px;
}
.category-text{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  color: #828282;
  cursor: pointer;
}
.active{
  color: black;
}
.categories{
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  margin-top: 50px;
  width: 700px;
  cursor: pointer;
}
.user-name{
  width: 115px;
  height: 96px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 150%;
}
.profile-pic{
  width: 100px;
  height: 100px;
}
.profile{
  display: flex;
  flex-direction: row;
}
</style>