<template>
  <v-app>
    <Header v-if="$route.meta.showNavbar !== false" />
    <router-view />
    <Footer v-if="$route.meta.showFooter !== false" />
  </v-app>
</template>

<script>
import Header from "./views/CommonViews/CommonComponents/Header.vue";
import Footer from "./views/CommonViews/CommonComponents/Footer.vue";
export default {
  name: "App",
  components: { Header, Footer },
};
</script>
<style>
.v-progress-linear__content {
  justify-content: left !important;
}
.v-progress-linear__background {
  background-color: #808080 !important;
}
.progressBarContainer {
  padding: 10px 0px 0px 0px !important;
}
</style>
