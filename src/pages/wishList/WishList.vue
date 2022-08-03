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
          <li class="category-text" v-for="(item, index) in tabList" :key="index" @click="currentTab = index"
              :class="{active: currentTab === index}"> {{item.tabName}}</li>
          <router-link to="/home" class="category-text">выйти</router-link>

        </ul>
      </div>
      <div class="tab-content-container">
        <div v-if="currentTab === 0"><user-info></user-info></div>
        <div v-else-if="currentTab === 1"></div>
        <div v-else-if="currentTab === 2"></div>
        <div v-else-if="currentTab === 3"></div>
        <div v-else-if="currentTab === 4"></div>
        <div v-else-if="currentTab === 5"></div>
        <div v-else-if="currentTab === 6"></div>
        <div v-else-if="currentTab === 7"></div>
      </div>
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
      tabList: [
          {
            tabName:'мои карты',
            tabContent: []
          },
          {
            tabName:' мои клиентские дни ',
                tabContent: []
          },
          {
            tabName:'личная информация',
                tabContent: []
          },
          {
            tabName:'избранное',
                tabContent: []
          },
          {
            tabName:'мои покупки',
                tabContent: []
          },
          {
            tabName:'чат с консультантом',
                tabContent: []
          },
          {
            tabName:'настройки',
                tabContent: []
          }
        ],
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