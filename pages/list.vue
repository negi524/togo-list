<template>
  <div>
    <TogoTable />
    <togo-card v-for="togo in togos" :key="togo.name" :togo="togo" />
  </div>
</template>

<script>
import TogoTable from "@/components/TogoTable.vue";
import TogoCard from "@/components/TogoCard.vue";

export default {
  components: {
    TogoTable,
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
