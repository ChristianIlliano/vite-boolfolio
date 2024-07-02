<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
        }
    },

    created() {
        axios.get('http://127.0.0.1:8000/api/projects').then((resp) => {
            this.projects = resp.data.result;
            // console.log(resp); 
        })
    }
};
</script>

<template>
<h1>Ciao</h1>
<route-view>
</route-view>
</template>

<style scoped lang="scss"></style>