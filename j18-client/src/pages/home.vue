<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m6 xl4" v-for="player in players" :key="player._id">
        <div class="card">
          <div class="card-content">
             <h3>{{ player.playerImage }}</h3>
            <span class="card-title">
              <h3>{{ player.name }}</h3>
            </span>
            <p>{{ player.desc }}</p>
          </div>
          <div class="card-action">
            <router-link
              class="btn btn-blue"
              :to="{name: 'show', params: { id: player._id }}"
            >Läs mer</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: []
    };
  },
  created() {
    let uri = `https://j18-server.herokuapp.com/players`;
    this.axios.get(uri).then(response => {
      this.players = response.data;
    });
  }
};
</script>

