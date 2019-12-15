<template>
  <div>
    <p>編集ページです</p>
    <TogoTable />
    <v-form class="togo__form" ref="form">
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
    </v-form>
  </div>
</template>

<script>
import TogoTable from "@/components/TogoTable.vue";

export default {
  components: {
    TogoTable
  },
  data: function() {
    return {
      form: {
        name: "",
        station: "",
        prefectures: "",
        created: null
      }
    };
  },
  methods: {
    pushTogo: function() {
      this.$store.dispatch("togos/pushTogo", this.form);
    }
  }
};
</script>
