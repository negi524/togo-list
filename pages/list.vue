<template>
  <div>
    <Table />
    <!-- <v-form class="togo__form" ref="form">
      <v-text-field label="名称" v-model="form.name" required></v-text-field>
      <v-text-field
        label="最寄駅"
        v-model="form.station"
        required
      ></v-text-field>
      <v-text-field
        label="都道府県"
        v-model="form.prefectures"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="pushTogo">send button</v-btn>
    </v-form> -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Table from "@/components/Table.vue";

export default {
  components: {
    Table
  },
  data: function() {
    return {
      form: {
        index: 0,
        name: "",
        station: "",
        url: "",
        prefectures: "",
        created: null
      }
    };
  }
};
</script>

<style scoped lang="scss"></style>
