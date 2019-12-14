<template>
  <div>
    <el-table :data="togos">
      <el-table-column prop="station" label="最寄駅" width="180"></el-table-column>
      <el-table-column prop="name" label="名称" width="280"></el-table-column>
      <el-table-column prop="prefectures" label="都道府県"></el-table-column>
      <el-table-column prop="created" label="作成日時"></el-table-column>
    </el-table>
    <v-form class="togo__form" ref="form">
      <v-text-field label="名称" v-model="form.name" required></v-text-field>
      <v-text-field label="最寄駅" v-model="form.station" required></v-text-field>
      <v-text-field label="都道府県" v-model="form.prefectures" required></v-text-field>
      <v-btn class="mr-4" @click="pushTogo">send button</v-btn>
    </v-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: function() {
    return {
      form: {
        index: 0,
        name: "",
        station: "",
        url: "",
        prefectures: "",
        created: null
      }
    };
  },
  async created() {
    this.$store.dispatch("togos/fetchTogo");
  },
  computed: {
    togos: function() {
      return this.$store.state.togos.list;
    }
  },
  methods: {
    pushTogo(e) {
      console.log(this.form);
      this.$store.dispatch("togos/pushTogo", this.form);
      this.form = {}; // 追加したので、フォームの内容を空にする
    }
  }
};
</script>

<style scoped lang="scss">
h1 {
  margin-bottom: 20px;
}
</style>