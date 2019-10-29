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
      <a class="btn">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        new form button
      </a>
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
        name: this.placeName
      };
      const response = await this.$axios.post("/api/togo/add", param);
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
}
.btn {
  position: absolute;
  padding: 30px 60px;
  overflow: hidden;
}

.btn::before {
  content: "";
  position: absolute;
  top: 2px;
  bottom: 2px;
  left: 2px;
  width: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.btn .line:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #0c002b, #1779ff);
  animation: animate1 2s linear infinite;
}

@keyframes animate1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.btn .line:nth-child(2) {
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to right, #0c002b, #1779ff);
  animation: animate2 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate2 {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.btn .line:nth-child(3) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to left, #0c002b, #1779ff);
  animation: animate3 2s linear infinite;
}

@keyframes animate3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.btn .line:nth-child(4) {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to top, #0c002b, #1779ff);
  animation: animate4 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate4 {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>