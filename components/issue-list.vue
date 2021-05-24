<template>
  <div>
    <div v-for="(value, index) in list" :key="index">
      <IssueItem :item="value"></IssueItem>
    </div>
  </div>
</template>

<script lang="ts">
import IssueItem from "./issue-item.vue";
import { queryPostsFromIssues } from "../utils/service";

export default {
  async created() {
    const res = await queryPostsFromIssues();
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