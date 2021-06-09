<template>
  <aside class="flex-1 lg:mx-5">
    <div v-for="(value, index) in issueList.nodes" :key="index">
      <IssueItem :issueItem="value"></IssueItem>
    </div>
  </aside>
</template>

<script lang="ts">
import Vue from "vue";
import IssueItem from "./issue-item.vue";

export default Vue.extend({
  props: {
    issueList: {
      type: Object,
      required: true,
    },
  },
  components: {
    IssueItem,
  },
});
</script>