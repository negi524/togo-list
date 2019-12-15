<template>
  <header class="header">
    <h1 class="header__title">
      <i class="el-icon-folder-opened"></i>
      My Application
    </h1>
    <nav class="header-nav">
      <ul class="header-nav__wrapper">
        <li class="header-nav__item">
          <a href="/list">一覧ページ</a>
        </li>
        <li class="header-nav__item">
          <a href="/edit">編集ページ</a>
        </li>
        <li class="header-nav__item">
          <a href="https://github.com/negi524">GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 30px 15px 30px;
  background-color: $pistachio;

  &__title {
    font-size: 25px;
  }
}

.header-nav {
  margin: auto 0 0;
  font-size: 18px;
  &__wrapper {
    display: flex;
    justify-content: space-around;
    width: 500px;
  }
}
</style>
