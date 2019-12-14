<template>
  <div>
    <header class="header">
      <h1 class="title">
        <i class="el-icon-folder-opened"></i>
        My Application
      </h1>
      <nav class="header-nav">
        <ul class="header-nav__wrapper">
          <li class="header-nav__item">about me</li>
          <li class="header-nav__item">to go list</li>
          <li class="header-nav__item">
            <a href="https://github.com/negi524">GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
    <section class="mainWrapper">
      <main class="main">
        <nuxt />
      </main>
      <section class="sidebar">
        <p>他ページへのナビゲーションとしてここを使う</p>
      </section>
    </section>
    <footer class="footer">footer</footer>
  </div>
</template>

<style lang="scss">
@import "./assets/style/reset.scss"; // reset.cssを呼び出し
$green: #8cd790;
$lightGreen: #c5e99b;
$pistachio: #77af9c;
$black: #757575;
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* ヘッダー
----------------------------------------------------------------------------------- */
.header {
  margin-bottom: 10px;
  padding: 10px;
  background-color: $pistachio;
}

.header-nav {
  &__wrapper {
    display: flex;
  }
}

/* 中央部のレイアウト
----------------------------------------------------------------------------------- */
.mainWrapper {
  display: flex;
  padding: 10px;
}

/* メインコンテンツ
----------------------------------------------------------------------------------- */
.main {
  width: 75%;
  padding: 10px;
}

/* サイドバー
----------------------------------------------------------------------------------- */
.sidebar {
  width: 25%;
  padding: 10px;
  background-color: #dddddd;
}

/* フッター
----------------------------------------------------------------------------------- */
.footer {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #dddddd;
}

/* その他の要素
----------------------------------------------------------------------------------- */
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.el-icon-folder-opened {
  margin-right: 10px;
}
</style>
