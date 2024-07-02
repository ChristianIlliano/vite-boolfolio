<script>
export default {
    data() {
        return {
            projects: []
        }
    },
    created() {
        this.getProjects
    },

    methods: {
        // getProjects() {

        //     axios.get('http://127.0.0.1:8000/api/projects').then((resp) => {

        //     });
        // }
    }
}
</script>

<template>
    <div class="container mt-4">
        <h1>LISTA</h1>
    </div>
</template>

<style></style>