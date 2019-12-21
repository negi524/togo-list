<template>
  <header class="header">
    <h1 class="header-title">
      <i class="el-icon-folder-opened"></i>
      My Application
    </h1>
    <nav class="header-nav">
      <ul class="header-nav__wrapper">
        <li class="header-nav__item">
          <a class="header-nav__link" href="/list">一覧ページ</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="/edit">編集ページ</a>
        </li>
        <li class="header-nav__item">
          <a class="header-nav__link" href="https://github.com/negi524">GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";

.header {
  box-sizing: border-box;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: $mainColor;
}

.header-title {
  margin: auto 15px;
  color: $baseColor;
  font-size: 25px;
}

.header-nav {
  font-size: 18px;
  &__wrapper {
    display: flex;
    justify-content: space-around;
    width: 500px;
    height: 100%;
  }
  &__item {
    width: 200px;
    height: 50px;
    margin: auto 10px;
    border-radius: 5px;
    background-color: rgba($baseColor, 0.1);
  }
  &__link {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
    color: $baseColor;
  }
}
</style>
