<template>
  <div class="container flex flex-col lg:flex-row">
    <BlogUser></BlogUser>
    <IssueList></IssueList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import BlogUser from "../components/blog-user.vue";
import IssueList from "../components/issue-list.vue";

export default Vue.extend({
  components: {
    BlogUser,
    IssueList,
  },
});
</script>
