<script setup lang="ts">
import {ref} from 'vue'

import AdminLayout from "@layouts/AdminLayout.vue";

const pageTitle = ref('Управление')

</script>

<template>
    <AdminLayout>
        <div class="flex flex-col gap-10">
            <router-view></router-view>
        </div>
    </AdminLayout>
</template>
