<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from '@/components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>
<style lang="scss">
@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";

* {
  box-sizing: border-box;
}
</style>
