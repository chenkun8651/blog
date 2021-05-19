<template>
  <div class="container">
    <IssueList></IssueList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import IssueList from "./issue/issue-list.vue";

export default Vue.extend({
  components: {
    IssueList,
  },
});
</script>

<style>
</style>
