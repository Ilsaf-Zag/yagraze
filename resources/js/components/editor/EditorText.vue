<template>
    <Editor
        disabled="true"
        api-key="zh8yvlixwacb5t6ymp0xjb3awwwadmezlvrr8jen8rneudgt"
        v-model="text"
        :init="{
            toolbar_mode: 'sliding',
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            font_size_formats: '1.5rem',
            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
        }"
    />
</template>

<script setup>
import Editor from "@tinymce/tinymce-vue";

const text = defineModel()
</script>
