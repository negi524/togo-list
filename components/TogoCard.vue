<template>
  <div class="card bg-light">
    <div class="card-header">{{ togo.name }}</div>
    <div class="card-body">
      <table>
        <tbody>
          <tr>
            <td>都道府県</td>
            <td>{{ togo.prefectures }}</td>
          </tr>
          <tr>
            <td>最寄駅</td>
            <td>{{ togo.station }}</td>
          </tr>
        </tbody>
      </table>
      <div class="card-expand">
        <a href="#">リンク</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    togo: {
      type: Object,
      required: true
    }
  }
};
</script>


<style lang="scss" scoped>
.card-expand {
  // expandかaccordionで開閉する
}
</style>