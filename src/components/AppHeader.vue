<script>
export default {
    data() {
        return {
            navItemsArray: [
                    {
                        name: "Home",
                        source: "home",
                    },
                    {
                        name: "Lista Progetti",
                        source: "projects",
                    },
                    
                    ],
        };
    },
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Projects</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="item in navItemsArray">
                        <router-link class="nav-link active" :to="{name: item.source}"> {{ item.name }} </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss"></style>