<template>
  <div class="list">
    <!-- <input placeholder="リストを追加" @keyup.enter="addTogo" /> -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>行きたいところリスト</span>
        <!-- <el-button type="text">Operation button</el-button> -->
      </div>
      <div v-for="togo in togos" :key="togo.pid" class="text item">{{ togo.about }}</div>
    </el-card>
    <!-- <el-calendar v-model="value"></el-calendar> -->
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