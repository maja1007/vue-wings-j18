<template>
<div>
  <h1>{{ msg }}</h1>
    <h1>Header</h1>
 <nav>
    <div class="container">
     
      <router-link class="brand-logo" to="/">Logo</router-link>

      <ul id="nav-mobile" class="right hide-on-med-and-down">

        <li>
          <router-link class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/players">Players</router-link>
        </li>
         <li>
          <router-link class="nav-link" to="/create">Create</router-link>
        </li>
        
        <li>
          <router-link class="nav-link" to="/contact">Kontakt</router-link>
        </li>
         <li>
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>

</div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>