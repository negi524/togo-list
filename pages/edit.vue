<template>
  <div>
    <h1>{{ message }}</h1>
    <h2 class="heading">データ一覧</h2>
    <TogoTable />
    <hr />
    <h2 class="heading">データ追加</h2>
    <b-form-input
      class="mb-2"
      v-model="form.name"
      placeholder="名称"
    ></b-form-input>
    <b-form-input
      class="mb-2"
      v-model="form.prefectures"
      placeholder="都道府県"
    ></b-form-input>
    <b-form-input
      class="mb-2"
      v-model="form.station"
      placeholder="最寄駅"
    ></b-form-input>
    <b-button @click="pushTogo">データ登録</b-button>
    <hr />
    <h2 class="heading">データ削除</h2>
    <b-form-input
      class="mb-2"
      v-model="deleteName"
      placeholder="削除対象の名称"
    ></b-form-input>
    <b-button @click="deleteTogo">データ削除</b-button>
  </div>
</template>

<script>
import TogoTable from "@/components/TogoTable.vue";
import firebase from "firebase";

export default {
  components: {
    TogoTable,
  },
  data: function () {
    return {
      message: "this is message",
      form: {
        name: "",
        station: "",
        prefectures: "",
        created: null,
      },
      deleteName: "",
    };
  },
  created() {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DB_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APPID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    };
    firebase.initializeApp(firebaseConfig);
    let provider = new firebase.auth.GoogleAuthProvider();
    let self = this;
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        self.message = result.user.displayName + ", " + result.user.email;
      });
  },
  methods: {
    pushTogo: function () {
      this.$store.dispatch("togos/pushTogo", this.form);
      // フォームの値をリセットする
      this.form.name = "";
      this.form.station = "";
      this.form.prefectures = "";
    },
    deleteTogo: function () {
      // this.$store.dispatch("togos/deleteTogoByIndex", 0);
      const obj = {
        name: this.deleteName,
      };
      this.$store.dispatch("togos/deleteTogoByObj", obj);
      // フォームの値をリセットする
      this.deleteName = "";
    },
  },
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
