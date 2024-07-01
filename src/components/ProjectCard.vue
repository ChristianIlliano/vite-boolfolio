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
    <h1>Tutti i miei progetti</h1>
    <div class="row row-cols-4 g-3">
        <div class="col" v-for="project in projects">
            <div class="card h-100">
                <div class="card-body">
                    <h4>{{project.title}}</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>