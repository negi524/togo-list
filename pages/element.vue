<template>
  <div class="element">
    <el-button class="button" @click="visible = true">ダイアログを開く</el-button>
    <el-dialog :visible.sync="visible" title="確認">
      <p>処理されました</p>
    </el-dialog>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      visible: false
    };
  }
};
</script>

<style scoped lang="scss">
.element {
  padding: 30px;
  .button {
    margin: 10px;
  }
}
</style>