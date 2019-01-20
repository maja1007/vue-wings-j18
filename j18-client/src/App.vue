<template>
  <div>
    <nav>
      <div class="container">
        <img class="nav-logo" src="./assets/logo_nav.png">
        <a class="brand-logo" href="https://j18-client.herokuapp.com/">Wings J18</a>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <router-link :to="{name: 'home'}">Hem</router-link>
          </li>
          <li>
            <router-link :to="{name: 'about'}">Om oss</router-link>
          </li>
          <li>
            <a href="https://j18-admin.herokuapp.com/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="header">
    </div>
    <div class="section">
    <router-view/>
    </div>
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
export default {};
</script>

<style>
.section {
  margin-top:35px;
}
.nav-logo {
  padding-top: 10px;
  margin-right: 10px;
}
#sidebar {
  margin-top: 55px;
}
.link {color: rgb(42, 48, 77);}
#header {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 55px;
  background-color: #fcfcfc;
  background-image: url("./assets/ice.png");
  background-repeat: no-repeat;
  position: center center;
  min-height:373px;
  max-width: 1240px;
  margin:0 auto;
}
#footer {
  background-color: rgb(42, 48, 77);
  text-align: center;
  color: white;
  margin-top: 50px;
  padding: 55px 0 25px;
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
  color: rgb(42, 48, 77);
}
.validate {
  color: rgb(42, 48, 77);
}
form label {
  color: rgb(42, 48, 77);
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
.copyright {
  text-align: center;
}
</style>
