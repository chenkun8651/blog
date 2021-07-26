<template>
  <div class="container">
    <!-- <audio src="./../assets/audio/cs.mp3"></audio> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LoginByPhone } from "./../types/interface";
import { musicLoginByPhone } from "../utils/request";

export default Vue.extend({
  async mounted() {
    const params: LoginByPhone = {
      phone: 15208102681,
      password: "chenkun@0508",
    };
    const user = await musicLoginByPhone(params);
  },
});
</script>