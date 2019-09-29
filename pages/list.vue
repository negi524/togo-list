<template>
  <div>
    <p>list</p>
    <ul>
      <li v-for="togo in togos">
        <input type="checkbox" @change="toggle(togo)" />
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
    }
  }
};
</script>