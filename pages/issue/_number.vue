<template>
  <div class="container mx-auto">
    <section class="container max-w-6xl mt-5">
      <div class="flex items-center text-sm">
        Tag »
        <span
          class="rounded px-2 ml-2 text-gray-100 hover:text-gray-50"
          v-for="(value, index) in issue.labels.nodes"
          :key="index"
          :style="{ backgroundColor: '#' + value.color }"
        >
          <NuxtLink :to="`/label/${value.name}`">
            {{ value.name }}
          </NuxtLink>
        </span>
      </div>
      <h1 class="my-4 text-3xl font-bold">{{ issue.title }}</h1>
      <div
        class="
          flex
          items-center
          text-sm text-gray-600
          hover:text-gray-900
          dark:text-gray-200
          dark:hover:text-gray-50
        "
      >
        <Date></Date>
        <div class="ml-1 mr-5 my-1">
          {{ this.$dayjs(issue.createdAt).format("YYYY年 MM月DD日") }}
        </div>
        <a
          class="my-1 underline"
          target="_blank"
          rel="noopener"
          :href="issue.url"
        >
          在Github上查看
        </a>
      </div>
    </section>
    <article class="markdown-body max-w-3xl mx-auto md:p-8 mt-16">
      <div class="markdown-body-content mb-16" v-html="issue.bodyHTML"></div>
      <div id="gitalk-container"></div>
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Gitalk from "gitalk";

import Date from "../../components/svg-components/date.vue";
import { queryPostByNumber, REPO_OWNER, REPO_NAME } from "../../utils/service";
import { IssueContent } from "../../types/interface";

export default Vue.extend({
  async asyncData(context) {
    const issueNumber: number = ~~context.route.params.number;
    const issue:IssueContent = (await queryPostByNumber(issueNumber)).repository.issue;
    return {
      issue,
    };
  },
  mounted() {
    const gitalk = new Gitalk({
      clientID: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRETS as string,
      repo: REPO_NAME as string,
      owner: REPO_OWNER as string,
      admin: [REPO_OWNER] as string[],
      number: this.issue.number as number,
      language: "zh-CN",
    });
    gitalk.render("gitalk-container");
  },
  data() {
    return {
      issue: {} as IssueContent,
    };
  },
  components: {
    Date,
  },
});
</script>
