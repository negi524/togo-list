<template>
  <div class="list">
    <el-table :data="togos">
      <el-table-column prop="pid" label="Pid" width="180"></el-table-column>
      <el-table-column prop="about" label="About" width="280"></el-table-column>
      <el-table-column prop="created" label="Created"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  async created() {
    this.$store.dispatch("togos/fetchTogo");
  },
  computed: {
    value: function() {
      return new Date();
    },
    togos: function() {
      return this.$store.state.togos.list;
    }
  },
  methods: {
    addTogo(e) {
      this.$store.commit("togos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "togos/toggle"
    })
  }
};
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 20px;
}
</style>