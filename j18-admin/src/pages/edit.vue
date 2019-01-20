<template>
  <div>
      <div class="container">
    <h3>Ändra spelare</h3>
    <form @submit.prevent="updatePlayer">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Spelarens Namn:</label>
            <input type="text" class="form-control" v-model="player.name">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <div class="form-group">
            <label>Spelarens Position:</label>
            <input type="text" class="form-control" v-model="player.position">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Spelarens Födelseklubb:</label>
            <input type="text" class="form-control" v-model="player.uclub">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Spelarens Tröjnummer:</label>
            <input type="text" class="form-control" v-model="player.number">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Spelaregenskaper:</label>
            <input type="text" class="form-control" v-model="player.desc">
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-blue">Uppdatera</button>
      </div>
    </form>
      <form action="#">
    <div class="file-field input-field">
      <div class="btn btn-blue">
        <span>Bild</span>
        <input type="file">
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text">
      </div>
    </div>
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
  created() {
    let uri = `https://j18-server.herokuapp.com/players/edit/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.player = response.data;
    });
  },

  methods: {
    updatePlayer() {
      let uri = `https://j18-server.herokuapp.com/players/update/${this.$route.params.id}`;
      this.axios.post(uri, this.player).then(() => {
        this.$router.push({ name: "players" });
      });
    }
  }
}
</script>

<style scoped>

</style>