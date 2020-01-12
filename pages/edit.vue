<template>
  <div>
    <h2 class="heading">データ一覧</h2>
    <TogoTable />
    <hr />
    <h2 class="heading">データ追加</h2>
    <b-form-input class="mb-2" v-model="form.name" placeholder="名称"></b-form-input>
    <b-form-input class="mb-2" v-model="form.prefectures" placeholder="都道府県"></b-form-input>
    <b-form-input class="mb-2" v-model="form.station" placeholder="最寄駅"></b-form-input>
    <b-button @click="pushTogo">データ登録</b-button>
    <hr />
    <h2 class="heading">データ削除</h2>
    <b-form-input class="mb-2" v-model="deleteName" placeholder="削除対象の名称"></b-form-input>
    <b-button @click="deleteTogo">データ削除</b-button>
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
      },
      deleteName: ""
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
      const obj = {
        name: this.deleteName
      };
      this.$store.dispatch("togos/deleteTogoByObj", obj);
      // フォームの値をリセットする
      this.deleteName = "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";

.heading {
  margin-bottom: 30px;
  padding: 10px 10px;
  border-left: solid 5px $accentColor;
}
</style>
