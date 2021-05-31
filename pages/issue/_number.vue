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
        class="flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-50"
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
    </article>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import Date from "../../components/svg-components/date.vue";
import { queryPostByNumber } from "../../utils/service";
import { IssueContent } from "../../types/interface";

export default Vue.extend({
  async created() {
    if (process.browser) {
      this.issue.number = ~~window.location.pathname.split("issue/")[1];
      const res = await queryPostByNumber(this.issue.number);
      this.issue = res.repository.issue;
    }
  },
  data() {
    return {
      issue: {
        number: 0,
        title: "",
        createdAt: "",
        updatedAt: "",
        labels: {
          nodes: [],
        },
        url: "",
        bodyHTML: "",
      } as IssueContent,
    };
  },
  components: {
    Date,
  },
});
</script>