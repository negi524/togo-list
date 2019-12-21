<template>
  <div>
    <h2 class="heading">データ一覧</h2>
    <TogoTable />
    <hr />
    <h2 class="heading">データを追加する</h2>
    <v-form class="togo__form" ref="form">
      <v-text-field label="名称" v-model="form.name" required></v-text-field>
      <v-text-field label="都道府県" v-model="form.prefectures" required></v-text-field>
      <v-text-field label="最寄駅" v-model="form.station" required></v-text-field>
      <v-btn class="mr-4" @click="pushTogo">send button</v-btn>
    </v-form>
    <hr />
    <h2 class="heading">データを削除する</h2>
    <button @click="deleteTogo">delete button</button>
  </div>
</template>

<script>
import TogoTable from "@/components/TogoTable.vue";

export default {
  components: {
    TogoTable
  },
  data: function() {
    return {
      form: {
        name: "",
        station: "",
        prefectures: "",
        created: null
      }
    };
  },
  methods: {
    pushTogo: function() {
      this.$store.dispatch("togos/pushTogo", this.form);
      // フォームの値をリセットする
      this.form.name = "";
      this.form.station = "";
      this.form.prefectures = "";
    },
    deleteTogo: function() {
      // this.$store.dispatch("togos/deleteTogoByIndex", 0);
      // const obj = {
      //   name: "hogehoge"
      // };
      // this.$store.dispatch("togos/deleteTogoByObj", obj);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/reset.scss";
@import "@/assets/style/colors.scss";

.heading {
  margin-bottom: 30px;
  padding: 10px 10px;
  border-left: solid 5px $accentColor;
}
</style>
