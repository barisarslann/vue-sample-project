<template>
  
    <Slide left v-if="handleView" class="header__mobile" :closeOnNavigation="true">
      <NavigationMobile />
    </Slide>
    <Navigation v-if="!handleView"/>
    <router-view />
</template>

<script>
import Navigation from './components/partials/Nav.vue';
import NavigationMobile from './components/partials/NavMobile.vue';
import { Slide } from 'vue3-burger-menu'
import './assets/main.scss'

export default {
  name: 'App',
  components: {
    Navigation,
    NavigationMobile,
    Slide
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth
    }
  },
  computed: {
    handleView() {
      return this.windowWidth <= 992;
    }
  }
}

</script>

<style>
</style>