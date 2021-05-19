<template>
  <div>
    <section>
      <h1 class="my-4 text-3xl font-bold">{{ issue.title }}</h1>
      <p class="flex items-center text-sm text-secondary">
        <span></span>
        <a
          :href="issue.url"
          target="_blank"
          rel="noopener"
          class="ml-4 transition-colors text-xs underline hover:text-gray-800 dark:hover:text-gray-400"
        >
          在Github上查看
        </a>
      </p>
    </section>
    <article class="markdown-body max-w-3xl mx-auto md:p-8 mt-16">
      <div class="markdown-body-content mb-16" v-html="issue.bodyHTML"></div>
    </article>
  </div>
</template>

<script>
import { queryPostByNumber } from "../../utils/service.ts";

export default {
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
};
</script>

<style>
</style>