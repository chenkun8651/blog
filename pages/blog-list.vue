<template>
  <div class="blog-list">
    <div v-html="cs"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { queryPostsFromIssues, queryPostByNumber } from "../utils/service.ts";

export default Vue.extend({
  async created() {
    queryPostsFromIssues();
    const data = await queryPostByNumber(1);
    console.log(data.repository.issue.bodyHTML);
    this.cs = data.repository.issue.bodyHTML;
    const params = {
      state: "closed",
    };
    const res = await this.$api.queryIssues(params);
    console.log(res);
    this.list = res.data;
    const params2 = {
      ID: 1,
    };
    const res2 = await this.$api.queryIssuesByNumber(params2);
    console.log(res2);
    // this.cs = res2.data.body
  },
  data() {
    return {
      list: [],
      cs: "<h1>cs<h1>",
    };
  },
});
</script>

<style>
</style>