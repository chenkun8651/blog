<template>
  <header>
    <h1>
      <NuxtLink class="a-none" to="/">chenkun1996.</NuxtLink>
    </h1>
    <div></div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
const api = "https://api.seniverse.com/v3/weather/now.json";
const key = "Sfn9_JBWJxQqvB0tb";
const location = "beijing";
const language = "zh-Hans";
const unit = "c";
export default Vue.extend({
  async created() {
    // const res = await this.$axios.get(
    //   `${api}?key=${key}&location=${location}&language=${language}&unit=${unit}`
    // );
    // console.log(res);
  },
});
</script>