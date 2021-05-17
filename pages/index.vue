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

import { QueryIssueOptions } from "../types/interface.js";

export default Vue.extend({
  async asyncData({ app }) {
    console.log(app);
    const params = {
      state: "closed",
    };
    const res = await app.$api.queryIssues(params);
    console.log(res);
  },
  data() {
    return {};
  },
  components: { Header, Footer },
});
</script>

<style>
</style>
