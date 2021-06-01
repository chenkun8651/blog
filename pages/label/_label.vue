<template>
  <div>
    <div class="text-3xl py-4 lg:py-10">分类为“{{ label[0] }}”的文章</div>
    <aside class="flex-1 lg:mx-4">
      <div v-for="(value, index) in issueList.nodes" :key="index">
        <IssueItem :issueItem="value"></IssueItem>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import IssueItem from "../../components/issue-item.vue";
import { queryPostsByLabel } from "../../utils/service";
import { Issues } from "../../types/interface";

export default Vue.extend({
  async created() {
    if (process.browser) {
      this.label.push(this.$route.params.label);
      const res = await queryPostsByLabel(this.label);
      this.issueList = res.repository.issues;
    }
  },
  data() {
    return {
      label: [] as string[],
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