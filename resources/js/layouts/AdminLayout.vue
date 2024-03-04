<script setup>
import SidebarArea from '@components/sidebar/SidebarArea.vue'
import AdminHeader from '@components/header/AdminHeader.vue'
</script>

<template>
    <!-- ===== Page Wrapper Start ===== -->
    <div class="flex h-screen overflow-hidden">
        <!-- ===== sidebar Start ===== -->
        <SidebarArea />
        <!-- ===== sidebar End ===== -->

        <!-- ===== Content Area Start ===== -->
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <!-- ===== Header Start ===== -->
            <AdminHeader />
            <!-- ===== Header End ===== -->

            <!-- ===== Main Content Start ===== -->
            <main>
                <div class="mx-auto w-full p-4 md:p-6 sm:p-2 2xl:p-10 min-h-screen bg-black">
                    <slot></slot>
                </div>
            </main>
            <!-- ===== Main Content End ===== -->
        </div>
    </div>
    <!-- ===== Page Wrapper End ===== -->
</template>
