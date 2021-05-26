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

<script>
import Vue from "vue";

import { queryPostByNumber } from "../../utils/service.ts";

export default Vue.extend({
  async created() {
    // 截取地址中issueID
    this.issueID = ~~window.location.pathname.split("issue/")[1];
    // 获取issue详情
    const res = await queryPostByNumber(this.issueID);
    this.issue = res.repository.issue;
  },
  data() {
    return {
      issueID: null,
      issue: {
        title: null,
        url: null,
        bodyHTML: null,
      },
    };
  },
});
</script>