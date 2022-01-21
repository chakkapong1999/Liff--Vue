<template>
  <div class="w-50 p-3 mx-auto mt-5 border border-dark rounded" align="center">
    <b-card
      :title="user"
      :img-src="picture"
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        {{ status }}
      </b-card-text>
    </b-card>
    <div class="mt-3">
      <b-button variant="light" size="lg" @click="scanQr">
        <b-icon-camera />
      </b-button>
    </div>
    <div class="mt-3">
      <a v-if="result" :href="result" target="_blank"> {{ result }} </a>
    </div>
  </div>
</template>

<script>
import initLineLiff from "@/services/initLineLiff";
import liff from "@line/liff";
import { mapState } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      result: null,
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.lineProfile.displayName,
      status: (state) => state.lineProfile.statusMessage,
      picture: (state) => state.lineProfile.pictureUrl,
    }),
  },
  methods: {
    async scanQr() {
      const response = await liff.scanCodeV2();
      this.result = response.value
    },
  },
  beforeCreate() {
    initLineLiff();
  },
};
</script>

<style>
</style>
