<template>
  <div class="container">
    <BlogList></BlogList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BlogList from "./blog-list.vue";

export default Vue.extend({
  components: {
    BlogList,
  },
});
</script>

<style>
</style>
