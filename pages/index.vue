<template>
  <div class="container flex flex-col lg:flex-row">
    <BlogUser></BlogUser>
    <IssueList :issueList="issueList"></IssueList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import BlogUser from "../components/blog-user.vue";
import IssueList from "../components/issue-list.vue";
import { queryPostsFromIssues } from "../utils/service";
import { Issues } from "../types/interface";

export default Vue.extend({
  async asyncData() {
    const issueList: Issues = (await queryPostsFromIssues()).repository.issues;
    return {
      issueList,
    };
  },
  components: {
    BlogUser,
    IssueList,
  },
});
</script>
