<template>
  <div class="container">
    <h3>Lägg till spelare</h3>
    <div class="row">
      <div class="col s12">
      <router-link :to="{name: 'players'}"><i class="fal fa-angle-double-left"></i> Tillbaka</router-link> <!-- kan vara denna som pajjar-->
      </div>
      </div>
    <div class="row">
      <form class="col s12" @submit.prevent="addPlayer">
        <div class="row">
          <div class="input-field col s12">
            <input id="name" type="text" class="validate" v-model="player.name">
            <label for="name">Fullständigt namn</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="position" type="text" class="validate" v-model="player.position">
            <label for="position">Spelarposition</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="uclub" type="text" class="validate" v-model="player.uclub">
            <label for="uclub">Födelseklubb</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="number" type="text" class="validate" v-model="player.number">
            <label for="number">Tröjnummer</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="desc" type="text" class="validate" v-model="player.desc">
            <label for="desc">Spelaregenskaper</label>
          </div>
        </div>

        <div class="row">
           <div class="col s12">
          <div class="file-field input-field">
            <div class="btn btn-blue">
              <span>Bild</span>
              <input type="file" class="validate">
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" v-model="player.playerImage">
            </div>
          </div>
          </div>
        </div>
        <button class="btn btn-blue">Lägg till</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      player: {}
    };
  },
  methods: {
    addPlayer() {
      let uri = "https://j18-server.herokuapp.com/players/add";
      this.axios.post(uri, this.player).then(() => {
        this.$router.push({ name: "players" });
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>