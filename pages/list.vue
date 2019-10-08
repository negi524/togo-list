<template>
  <div id="list">
    <h1>list</h1>
    <ul>
      <li v-for="togo in togos">
        <input type="checkbox" :checked="togos.done" @change="toggle(togo)" />
        <span>{{ togo.text }}</span>
      </li>
    </ul>
    <input placeholder="リストを追加" @keyup.enter="addTogo" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    togos: function() {
      return this.$store.state.togos.list;
    }
  },
  methods: {
    addTogo(e) {
      this.$store.commit("togos/add", e.target.value);
      e.target.value = "";
    },
    ...mapMutations({
      toggle: "togos/toggle"
    })
  }
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>