<script>
import axios from "axios";
export default {
    data() {
        return {

        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get('http://127.0.0.1:8000/api/projects/${slug}').then((resp) => {

        });
    },
}
</script>

<template>
<div class="container mt-4">
<h1>HomePage</h1>
</div>
</template>

<style>

</style>