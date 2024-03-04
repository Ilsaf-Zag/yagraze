<template>
    <div class="illustrations__block ">
        <img :src="'/images/illustration/' + illustration.url" :alt="illustration.name" class="illustrations__img border-2 border-white">
        <div class="illustrations__block-blackout">
            <div class="illustrations__block-text">Развернуть</div>
        </div>
    </div>
</template>

<script setup >

defineProps(['illustration'])

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
</style>
