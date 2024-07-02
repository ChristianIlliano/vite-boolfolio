<script>
import AppMain from './components/AppMain.vue';
import ProjectCard from './components/ProjectCard.vue';
import AppHeader from './components/AppHeader.vue';

export default {
components: {
  AppMain,
  ProjectCard,
  AppHeader,
},
};
</script>

<template>
<AppHeader/>
<router-view></router-view>

</template>

<style  scoped lang="scss">

</style>