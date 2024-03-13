<template>
    <SectionPromo @showDialog="dialogVisible = !dialogVisible"/>
    <SectionAuthorInfo />
    <SectionBenefits/>
    <SectionReviews/>
    <SectionOrder @showDialog="dialogVisible = !dialogVisible"/>

    <Modal v-model="dialogVisible">
        <FeedbackForm
            v-model="isFormSent"
            class="form mx-auto bg-black/70 text-white border-black/10 backdrop-blur-2xl max-w-[800px] shadow-3 max-h-[420px] md:max-h-[500px] sm:w-[90%] md:mx-4"
        >
            Отправить
        </FeedbackForm>
    </Modal>
</template>

<script setup>

import {ref} from 'vue'
import SectionPromo from "@components/sections/SectionPromo.vue";
import SectionBenefits from "@components/sections/SectionBenefits.vue";
import SectionOrder from "@components/sections/SectionOrder.vue";
import SectionAuthorInfo from "@components/sections/SectionAuthorInfo.vue";
import SectionReviews from "@components/sections/SectionReviews.vue";
import Modal from "@components/modal/Modal.vue";
import FeedbackForm from "@components/form/FeedbackForm.vue";
const dialogVisible = ref(false)
const isFormSent = ref(false);


</script>

<style scoped>
.form :deep(input),
.form :deep(textarea) {
    background-color: rgba(22, 26, 26, .25);
}

.form :deep(.modalLoading) {
    background-color: transparent;
}
</style>
