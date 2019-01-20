<template>
  <div>
    <nav id="nav">
      <div class="container">
        <img class="nav-logo" src="./assets/logo_nav.png">
        <a class="brand-logo" href="https://j18-client.herokuapp.com/">Wings J18</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link
              v-if="authenticated"
              to="/login"
              v-on:click.native="logout()"
              replace
            >Logga ut</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view @authenticated="setAuthenticated"/>
    <footer id="footer">
      <div class="container">
      <div class="row">
        <div class="col s12 l4">
            Epost:<a href="mailto:someone@yoursite.com"> wingsj18@wingshockey.se</a>  
         
          </div>
           <div class="col s12 l4">
          <div class="copyright"><i class="far fa-copyright fa-x2"></i> Copyright 2019 <a href="http://sandesign.se"> Martina Jansson </a></div>
          </div>
           <div class="col s12 l4">
           <i class="fab fa-instagram"></i><a href="http://somewere"> #wingsj18</a>
          </div>
      </div>
      </div>
    </footer>
  </div>
  
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "admin",
        password: "password"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
.nav-logo {
  padding-top: 10px;
  margin-right: 10px;
}
#header {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 55px;
  background-color: #fcfcfc;
}
#footer {
  background-color: rgb(42, 48, 77);
  text-align: center;
  color: white;
  margin-top: 50px;
  padding: 25px 0;
}
.arrow:last-of-type {
  display: none;
}
nav {
  background-color: rgb(42, 48, 77);
}
h1 {
  color: rgb(42, 48, 77);
}
.btn-blue {
  background-color: rgb(42, 48, 77);
}
.btn-blue:hover {
  background-color: rgb(179, 141, 60);
}
.input-field {
  color: rgb(42, 48, 77) !important;
}
.validate {
  color: rgb(42, 48, 77) !important;
}
form label {
  color: rgb(42, 48, 77) !important;
}

/* label focus color */
.input-field input[type="text"]:focus + label {
  color: rgb(42, 48, 77) !important;
}
/* label underline focus color */
.input-field input[type="text"]:focus {
  border-bottom: 1px solid rgb(42, 48, 77) !important;
  box-shadow: 0 1px 0 0 rgb(42, 48, 77) !important;
}
.form-control {
  border-bottom: 1px solid rgb(42, 48, 77) !important;
  box-shadow: 0 1px 0 0 rgb(42, 48, 77) !important;
}
section {
  margin: 55px 0;
}
.right {
  float: right;
}

.add-player {
  margin: 25px 0;
}
</style>
