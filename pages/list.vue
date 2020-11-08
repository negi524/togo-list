<template>
  <div>
    <div class="card-deck">
      <togo-card v-for="togo in togos" :key="togo.name" :togo="togo" />
    </div>
  </div>
</template>

<script>
const TogoCard = () => import("@/components/TogoCard.vue");

export default {
  components: {
    TogoCard,
  },
  // サーバーサイドで取得する場合
  // async fetch({ store, params }) {
  //   await store.dispatch("togos/fetchTogo");
  // },
  async created() {
    // TODO: firebaseのon("value", ...) により、同期的に取れなかったため、
    // 非同期で取得するように変更
    this.$store.dispatch("togos/fetchTogo");
  },
  computed: {
    togos: function() {
      return this.$store.state.togos.list;
    },
  },
};
</script>

<style scoped lang="scss"></style>
