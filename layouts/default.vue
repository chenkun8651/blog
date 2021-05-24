<template>
  <div class="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
    <BlogHeader></BlogHeader>
    <Nuxt />
    <BlogFooter></BlogFooter>
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
