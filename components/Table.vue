<template>
  <div>
    <el-table :data="togos">
      <el-table-column
        prop="station"
        label="最寄駅"
        width="180"
      ></el-table-column>
      <el-table-column prop="name" label="名称" width="280"></el-table-column>
      <el-table-column prop="prefectures" label="都道府県"></el-table-column>
      <el-table-column prop="created" label="作成日時"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  async created() {
    this.$store.dispatch("togos/fetchTogo");
  },
  computed: {
    togos: function() {
      // TODO: ミューテーションから取得する
      return this.$store.state.togos.list;
    }
  }
};
</script>
