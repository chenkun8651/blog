<template>
  <!-- 博客详情页 -->
  <div>
    <section>
      <h1>{{ issue.title }}</h1>
      <p>
        <span></span>
        <a :href="issue.url" target="_blank" rel="noopener">在Github上查看</a>
      </p>
    </section>
    <article>
      <div v-html="issue.bodyHTML"></div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { queryPostByNumber } from "../../utils/service";
import { RepositoryIssue } from "../../types/interface";

export default Vue.extend({
  async created() {
    this.issueID = ~~window.location.pathname.split("issue/")[1];
    const res = await queryPostByNumber(this.issueID);
    this.issue = res;
    console.log(this.issue);
  },
  data() {
    return {
      issueID: 0 as number,
      issue: {} as RepositoryIssue,
    };
  },
});
</script>