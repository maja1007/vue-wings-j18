<template>
  <div class="container">
    
    <div class="add-player">
        <router-link :to="{ name: 'create' }" class="btn btn-blue right">
          <i class="fas fa-plus"> Lägg till spelare</i>
        </router-link>
      </div>
    <h3>Spelare</h3>
    <section>
      <table>
        <thead>
          <tr>
            <th>Namn</th>
            <th>Nummer</th>
            <th>Edit</th>
            <th>Radera</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="player in players" :key="player._id">
            <td>{{ player.name }}</td>
            <td>{{ player.number }}</td>
            <td>
              <router-link :to="{name: 'edit', params: { id: player._id }}" class="btn btn-blue">
                <i class="fas fa-edit"></i>
              </router-link>
            </td>
            <td>
              <button class="btn btn-blue" @click.prevent="deletePlayer(player._id)">
                <i class="far fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row"></div>
    </section>
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
    let uri = "https://j18-server.herokuapp.com/players";
    this.axios.get(uri).then(response => {
      this.players = response.data;
    });
  },
  methods: {
    deletePlayer(id) {
      let uri = `https://j18-server.herokuapp.com/players/delete/${id}`;
      this.axios.delete(uri).then(response => {
        this.players.splice(this.players.indexOf(id), 1);
      });
    }
  }
};
</script>
<style scoped>
.fas {
  font-size: 1.3em!important;
  text-transform: capitalize;
}
</style>

