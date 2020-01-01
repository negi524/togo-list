<template>
  <div>
    <b-table striped hover :items="togos"></b-table>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";
</style>
