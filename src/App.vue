
<template>
  <div class="container-fluid p-0" style="height:100%">
    <div class="row" style="height:100%">
      <Heading class="d-lg-none"/>
      <Navigation class="col-md-3 col-lg-3 col-xl-2  d-none d-lg-block"/>
      <router-view class="col-lg-9"/>
      <NavigationMobile class="d-lg-none"/>
    </div>
  </div>
</template>

<script lang="ts">
import Navigation from './components/Navigation.vue'
import NavigationMobile from './components/NavigationMobile.vue'
import Heading from './components/Heading.vue'

export default {
  data() {
    return {
      mobile: null
    }
  },
  components: {
    Navigation,
    NavigationMobile,
    Heading
  },
  created() {
    /*  */
  },
  methods: {
    /*  */
  }

};
</script>
<style lang="scss">
  @import "./src/assets/scss/style.scss";
</style>