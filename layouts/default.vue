<template>
  <div>
    <BlogHeader />
    <Nuxt />
    <BlogFooter />
  </div>
</template>

<script lang="ts">
import BlogHeader from "../components/blog-header.vue";
import BlogFooter from "../components/blog-footer.vue";

export default {
  components: {
    BlogHeader,
    BlogFooter,
  },
};
</script>

<style>
</style>
