<template>
  <button class="bg-smoky font-bold text-1xl text-orange rounded-[30px] lg:rounded-[16px] transition-all hover:bg-smoky-light active:shadow-14">
      <slot />
  </button>
</template>
/* Фон внутри */

position: absolute;
left: 0.87%;
right: 0.87%;
top: 4.17%;
bottom: 4.17%;

/* Nue/white/2 */
background: #EEEEEE;
box-shadow: inset -5.79167px -5.79167px 5.79167px rgba(255, 255, 255, 0.7), inset 5.79167px 5.79167px 5.79167px rgba(174, 174, 192, 0.15);
border-radius: 28.9583px;
