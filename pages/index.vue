<template>
  <div class="container">
    <Header></Header>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default Vue.extend({
  components: { Header, Footer },
});
</script>

<style>
</style>
