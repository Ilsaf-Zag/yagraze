<template>
    <div class="illustrations__block ">
        <img :src="'/images/illustration/' + illustration.url" :alt="illustration.name" class="illustrations__img border-2 border-white">
        <div class="illustrations__block-blackout">
            <div class="illustrations__block-text">Развернуть</div>
        </div>
    </div>
</template>

<script setup >

const props = defineProps(['illustration'])
</script>

<style scoped>

.illustrations__block {
    display: block;
    position: relative;
    cursor: pointer;
    margin-bottom: 30px;
    max-width: 320px;
}

.illustrations__block:hover .illustrations__block-blackout {
    opacity: 1;
    overflow: visible;
    transition: 0.5s all;
}

.illustrations__block_active {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1004;
    box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.5);
    cursor: auto;
}

.illustrations__block_active img {
    max-width: calc(100vw - 180px);
    max-height: calc(100vh - 20px);
}


.illustrations__img {
    width: 100%;
    pointer-events: none;
    border-radius: 25px;
    display: block;
}

.illustrations__block-blackout {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    overflow: hidden;
    transition: 0.5s all;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;

}

.illustrations__block-text {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 190px;
    width: 100%;
    border: 1px solid #fff;
    font-size: 17px;
    color: #fff;
    height: 40px;
    border-radius: 15px;
}

.illustrations__arrows {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1004;
}

.illustrations__arrows_hidden {
    opacity: 0;
    visibility: hidden;
}

.illustrations__arrow-left, .illustrations__arrow-right {
    width: 40px;
    height: 40px;
    position: absolute;
    fill: #C7C7C7;
    top: 50%;
    transform: translateY(-50%) scale(1.5);
    cursor: pointer;
}

.illustrations__arrow-left:hover, .illustrations__arrow-right:hover {
    transition: 0.5s all;
    fill: #707070;
}

.illustrations .arrow-hidden {
    opacity: 0;
    visibility: hidden;
    transition: 0.5s all;
}

.illustrations__arrow-left {
    left: 30px;
}

.illustrations__arrow-right {
    right: 30px;
}

.illustrations__block-info {
    position: fixed;
    left: 20px;
    top: 20px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    z-index: 1010;
}

.illustrations__block-info_hidden {
    opacity: 0;
    visibility: hidden;
}

.illustrations__block-info-icon {
    fill: rgba(0, 0, 0, 0);
    width: 100%;
    height: 100%;
    transition: 0.5s all;
}

.illustrations__block-info-icon:hover {
    fill: rgba(255, 255, 255, 0.5);
}

.illustrations__block-info_active {
    opacity: 1;
    visibility: visible;
}

.illustrations__cross {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1010;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.illustrations__cross::before, .illustrations__cross::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #c7c7c7;
    top: 50%;
    transition: 0.5s all;
}

.illustrations__cross::before {
    transform: rotate(-45deg);
}

.illustrations__cross::after {
    transform: rotate(45deg);
}

.illustrations__cross:hover::before, .illustrations__cross:hover::after {
    transition: 0.5s all;
    background-color: #ffffff;
}

.illustrations__cross_hidden {
    opacity: 0;
    visibility: hidden;
}
</style>
