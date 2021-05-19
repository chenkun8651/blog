<template>
  <div class="issue-list">
    <div v-for="(value, index) in list" :key="index">
      <IssueItem :item="value"></IssueItem>
    </div>
  </div>
</template>

<script lang="ts">
import IssueItem from "../../components/issue-item.vue";
import { queryPostsFromIssues } from "../../utils/service";

export default {
  async created() {
    const res = await queryPostsFromIssues();
    console.log(res);
  },
  data() {
    return {
      list: [],
    };
  },
  components: {
    IssueItem,
  },
};
</script>

<style>
</style>