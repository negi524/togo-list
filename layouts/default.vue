<template>
  <div>
    <header class="header">
      <h1 class="title">
        <i class="el-icon-folder-opened"></i>
        My Application
      </h1>
      <nav class="header__nav">
        <ul>
          <li>about me</li>
          <li>to go list</li>
          <li>
            <a href="https://github.com/negi524">GitHub</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <nuxt />
    </main>
    <div class="sidebar">
      <p>他ページへのナビゲーションとしてここを使う</p>
    </div>
    <footer class="footer">footer</footer>
  </div>
</template>

<style lang="scss">
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

/* 全体のレイアウト
----------------------------------------------------------------------------------- */

// TODO: frexboxを使ってレイアウトを整える

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
