<template>
  <section class="sidebar">
    <ul class="sidebar-list">
      <li class="sidebar-list__item">
        <a class="sidebar-list__link" href="/list">一覧ページ</a>
      </li>
      <li class="sidebar-list__item">
        <a class="sidebar-lsit__link" href="/edit">編集ページ</a>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/style/reset.scss";
@import "@/assets/colors/default.scss";

.sidebar {
  width: 300px;
  padding: 10px;
  // background-color: #ffffff;
  background-color: $grey;
  font-size: 18px;
}

.sidebar-list {
  list-style-type: none;
  display: block;
}
</style>
