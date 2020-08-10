<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <span class="footer__copyright">&copy; 2020 negi_524</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/assets/style/colors.scss";

.footer {
  height: 100px;
  padding: 15px 15px 30px;
  background-color: $mainColor;

  &__wrapper {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
