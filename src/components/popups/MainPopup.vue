<template>
    <div class="popup-wrapper" v-if="isPopupActive === true">
        <div class="popup" :class="{active: isPopupActive}">
            <div class="close-btn" @click="isPopupActive = false"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainPopup',

    data() {
        return {
            isPopupActive: true,
        };
    },

    mounted() {
        
    },

    methods: {
    },
};
</script>

<style scoped>
.popup-wrapper {
    display: flex;
    justify-content: end;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0, 0, 0, 0.4);
    z-index: 200;
}
.popup {
    position: relative;
    height: 100%;
    width: fit-content;
    padding: 85px 100px;
    background-color: #fff;
    transition: all 0.3s;
    transform: translateX(100%);
}
.popup.active {
    transform: translateX(0);
}
.close-btn {
    position: relative;
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-left: auto;
    transform: translate(80px, -50px);
    z-index: 1000;
}
.close-btn::before, .close-btn::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 3px;
    background-color: #000;
}
.close-btn::before {
    transform: translate(-50%, -50%) rotate(-45deg);
}
.close-btn::after {
    transform: translate(-50%, -50%) rotate(45deg);
}
</style>