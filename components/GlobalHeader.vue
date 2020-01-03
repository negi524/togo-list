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
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";

.header {
  background-color: $mainColor;
}
</style>
