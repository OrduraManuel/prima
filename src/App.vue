
<template>
  <div class="container-fluid px-0">
    <Navigation />
    <Carouselz />
    <router-view />
  </div>
</template>

<script>
import Carouselz from './components/Carouselz.vue';
import Navigation from './components/Navigation.vue'


export default {
  data() {
    return{
      mobile: null,
    }
  },
  components: {
  Navigation,
    Carouselz,

  },
  created(){
  },
  methods: {
  },

};
</script>
<style lang="scss">
@import "@/assets/scss/style.scss";
</style>