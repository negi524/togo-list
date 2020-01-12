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
    TogoCard
  },
  async fetch({ store, params }) {
    await store.dispatch("togos/fetchTogo");
  },
  computed: {
    togos: function() {
      return this.$store.state.togos.list;
    }
  }
};
</script>

<style scoped lang="scss"></style>
