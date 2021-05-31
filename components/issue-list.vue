<template>
  <aside class="flex-1 lg:mx-4">
    <div v-for="(value, index) in issueList.nodes" :key="index">
      <IssueItem :issueItem="value"></IssueItem>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";

import IssueItem from "./issue-item.vue";
import { queryPostsFromIssues } from "../utils/service";
import { Issues } from "../types/interface";

export default Vue.extend({
  async created() {
    const res = await queryPostsFromIssues();
    this.issueList = res.repository.issues;
  },
  data() {
    return {
      issueList: {
        nodes: [],
        pageInfo: {
          hasNextPage: true,
          endCursor: "",
        },
        totalCount: 0,
      } as Issues,
    };
  },
  components: {
    IssueItem,
  },
});
</script>