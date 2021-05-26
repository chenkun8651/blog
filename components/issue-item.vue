<template>
  <div>
    <div class="flex text-sm text-secondary">
      <p>{{ this.$dayjs(this.issueItem.updatedAt).format("YYYY年 M月D日") }}</p>
      <p></p>
    </div>
    <h1>
      <NuxtLink :to="`/issue/${issueItem.number}`">
        {{ issueItem.title }}
      </NuxtLink>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  async created() {
    console.log(this.issueItem);
  },
  props: {
    issueItem: {
      type: Object,
      required: true,
    },
  },
});
</script>