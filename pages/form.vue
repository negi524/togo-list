<template>
  <div>
    <h2>This is form page.</h2>
    <!-- <form method="post" action="/api/togo/add">
      <input type="text" name="message" />
      <input type="submit" value="送信" />
    </form>-->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field label="Name" v-model="name" :counter="10" :rules="nameRules" required></v-text-field>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">send data</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required.",
        v => (v && v.length <= 10) || "Name must be less than 10 characters."
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>