<template>
    <div class="header-popup-wrapper">
        <div class="header-popup">
            <div class="container">
                <ul class="tab-links">
                    <li class="tab-link" v-for="(item, index) in tabList" :key="index" @click="currentTab = index" 
                    :class="{active: currentTab === index}">
                        {{item.tabName}}
                    </li>
                </ul>
                <div class="tabs-content">
                    <div class="tab-content-item" v-for="(item, index) in tabList" :key="index">
                        <ul class="tab-content-inner" v-if="currentTab === index">
                            <li class="tab-content-link" v-for="(linkItem, linkIndex) in item.tabContent" :key="linkIndex">
                                {{linkItem}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderPopup',

    data() {
        return {
            tabList: [
                       {
                        tabName:'Все товары',
                        tabContent: ['Кремовые маски']
                       },
                       {
                        tabName:'Очищение',
                        tabContent: []
                       },
                       {
                        tabName:'Пилинги и скрабы',  
                        tabContent: []
                       },
                       {
                        tabName:'Концентраты',
                        tabContent: []
                       },
                       {
                        tabName:'Тоники',
                        tabContent: []
                       },
                       {
                        tabName:'Сыворотки', 
                        tabContent: []
                       },
                       {
                        tabName:'Эссенции',
                        tabContent: []
                       },
                       {
                        tabName:'Кремы',
                        tabContent: []
                       },
                       {
                        tabName:'Эмульсии и гели',
                        tabContent: []
                       },
                       {
                        tabName:'Маски для лица', 
                        tabContent: []
                       },
                       {
                        tabName:'Жемчужная линия',
                        tabContent: []
                       },
                       {
                        tabName:'Уход за телом',
                        tabContent: []
                       },
                       {
                        tabName:'Уход за волосами',
                        tabContent: []
                       },
                       {
                        tabName:'Наборы и аксессуары',
                        tabContent: []
                       },
                    ],
            currentTab: 0,

        };
    }
};
</script>

<style scoped>
.header-popup-wrapper {
    position: fixed;
    top: 137px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.4);
    z-index: 100;
}
.header-popup {
    width: 100%;
    height: 500px;
    background-color: #fff;
    padding: 10px 0;
}
.header-popup .container {
    display: flex;
    height: 500px;
    padding-bottom: 20px;
}
.tab-links {
    overflow: auto;
    -ms-overflow-style: none;  
    scrollbar-width: none;  
}
.tab-links::-webkit-scrollbar { 
    display: none;  
}

.tab-link {
    position: relative;
    width: 300px;
    font-size: 18px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    margin-bottom: 20px;
}
.tab-link::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 0; 
    height: 0; 
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 8px solid #37373780;
}
.tab-link.active {
    color: rgba(0, 0, 0);
}
.tabs-content {
    padding: 0 20px 10px 40px;
    overflow: auto;
    -ms-overflow-style: none;  
    scrollbar-width: none; 
}
.tabs-content::-webkit-scrollbar { 
    display: none;  
}
</style>