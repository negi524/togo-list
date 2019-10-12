<template>
  <div>
    <button @click="getIp">IPアドレスを取得</button>
    <p>{{ ip }}</p>
    <hr />
    <button @click="getUser">ユーザー情報取得</button>
    <p>{{ user }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: function() {
    return {
      ip: "0.0.0.0",
      user: []
    };
  },
  methods: {
    async getIp() {
      this.ip = await this.$axios.$get("http://icanhazip.com");
    },
    async getUser() {
      this.user = await this.$axios.$get("/api/users");
    }
  }
};
</script>