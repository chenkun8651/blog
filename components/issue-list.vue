<template>
  <aside class="flex-1 lg:ml-8">
    <div class="mb-8" v-for="(value, index) in issueList" :key="index">
      <IssueItem :issueItem="value"></IssueItem>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";

import IssueItem from "./issue-item.vue";
import { queryPostsFromIssues } from "../utils/service";

export default Vue.extend({
  async created() {
    const res = await queryPostsFromIssues();
    this.issueList = res.repository.issues.nodes;
  },
  data() {
    return {
      issueList: [] as any[],
    };
  },
  components: {
    IssueItem,
  },
});
</script>

<style>
</style>