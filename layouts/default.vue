<template>
  <div>
    <GlobalHeader />
    <section class="mainWrapper">
      <main class="main">
        <nuxt />
      </main>
    </section>
    <!-- <GlobalFooter /> -->
  </div>
</template>

<script>
import GlobalHeader from "~/components/GlobalHeader.vue";
import GlobalFooter from "~/components/GlobalFooter.vue";

export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/style/colors.scss";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  color: $fontColor;
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

/* 中央部のレイアウト
----------------------------------------------------------------------------------- */
.mainWrapper {
  display: flex;
  padding: 10px;
}

/* メインコンテンツ
----------------------------------------------------------------------------------- */
.main {
  width: 100%;
  padding: 10px;
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
