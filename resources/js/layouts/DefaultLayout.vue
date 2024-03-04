<template>
    <div class="flex flex-col min-h-screen">
        <AppHeader class="shrink-0" />
        <main class="grow">
            <slot />
        </main>
        <AppFooter class="shrink-0" />
    </div>
</template>

<script setup>
import AppHeader from "@components/header/AppHeader.vue";
import AppFooter from "@components/footer/AppFooter.vue";

</script>
