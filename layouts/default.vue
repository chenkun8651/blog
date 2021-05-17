<template>
  <div>
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>
