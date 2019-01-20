<template>
  <div class="row">
    <div class="col s4 offset-s4 login">
      <h1>Login</h1>

      <ul class="collection">
        <li class="collection-item">Username: admin</li>
        <li class="collection-item">Password: password</li>
      </ul>
      <label for="username">Username:</label>
      <input type="text" name="username" v-model="input.username" placeholder="Username">
      <label for="password">Password:</label>
      <input type="password" name="password" v-model="input.password" placeholder="Password">
      <button type="button" class="btn btn-blue right" v-on:click="login()">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "admin", // Temporära inloggningsuppgifter
        password: "password"
      }
    };
  },
  /*
        // Lyckas inte få till en funktionell inloggning men är en god bit på vägen
        mounted() {
            this.$http.get("https://git.heroku.com/ws-martina.git/users/get").then(result => {
                this.ip = result.body.origin;
            }, error => {
                console.error(error);
            });
        },
       
        methods: {
            sendData() {
                this.$http.post("https://git.heroku.com/ws-martina.git/users/create", this.input, { headers: { "content-type": "application/json" } }).then(result => {
                    this.response = result.data;
                }, error => {
                    console.error(error);
                });
            }
        }
         */
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.mockAccount.username &&
          this.input.password == this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "players" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
.login {
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: 200px 0;
  padding: 20px;
}
</style>