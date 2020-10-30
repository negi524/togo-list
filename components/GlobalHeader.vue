<template>
  <header class="header">
    <b-navbar toggleable="md" type="dark">
      <b-navbar-brand href="/">
        <i class="el-icon-folder-opened"></i>
        My Application
      </b-navbar-brand>
      <b-navbar-toggle target="header-nav"></b-navbar-toggle>
      <b-collapse id="header-nav" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="'list'">一覧ページ</b-nav-item>
          <b-nav-item :to="'edit'">編集ページ</b-nav-item>
          <b-nav-item href="https://github.com/negi524">GitHub</b-nav-item>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item @click="changeLoginStatus">{{
              loginAction
            }}</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  computed: {
    status() {
      return this.$store.state.user.login;
    },
    loginAction() {
      return this.$store.state.user.login ? "ログアウトする" : "ログインする";
    },
  },
  created() {
    // ログイン状態を確認し、設定する
    this.$store.dispatch("user/fetchLoginState");
  },
  methods: {
    /**
     * ログイン or ログアウトを行う
     */
    changeLoginStatus() {
      this.status ? this.logout() : this.login();
    },
    /**
     * ログインする
     */
    login() {
      this.$store.dispatch("user/login");
    },
    /**
     * ログアウトする
     */
    logout() {
      this.$store.dispatch("user/logout");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";

.header {
  background-color: $mainColor;
}
</style>
