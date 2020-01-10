<template>
  <div>
    <div class="card-deck">
      <togo-card v-for="togo in togos" :key="togo.name" :togo="togo" />
    </div>
  </div>
</template>

<script>
import TogoCard from "@/components/TogoCard.vue";

export default {
  components: {
    TogoCard
  },
  async created() {
    this.$store.dispatch("togos/fetchTogo");
  },
  computed: {
    togos: function() {
      return this.$store.state.togos.list;
    }
  }
};
</script>

<style scoped lang="scss"></style>
