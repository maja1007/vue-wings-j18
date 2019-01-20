<template>
  <div id="app">
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
      </ul>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  }
};
</script>

<style scoped>


</style>
