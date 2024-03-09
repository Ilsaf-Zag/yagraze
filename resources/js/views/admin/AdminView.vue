<template>
    <AdminLayout>
        <div class="flex flex-col gap-10">
            <router-view></router-view>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from "@layouts/AdminLayout.vue";
</script>
