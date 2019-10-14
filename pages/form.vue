<template>
  <div>
    <h2>This is form page.</h2>
    <v-form class="form" ref="form">
      <v-text-field
        label="Place Name"
        v-model="placeName"
        :counter="20"
        :rules="nameRules"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="postForm">new form button</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      valid: true,
      placeName: "",
      nameRules: [
        v => !!v || "Place Name is required.",
        v => (v && v.length <= 20) || "Name must be less than 20 characters."
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    /**
     * formに入力された値をAPIにpostする
     */
    async postForm() {
      const param = {
        about: this.placeName
      };
      const response = await this.$axios.$post("/api/togo/add", param);
      console.log(response);
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
}
</style>