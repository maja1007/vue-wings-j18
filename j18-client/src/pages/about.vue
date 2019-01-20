<template>
  <div class="container">
      <div class="row">
        <div class="col s8">
          <h1>Wings J18</h1>
          <p><strong>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
               Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis  repellat.</strong></p>
                <h4>Lorem</h4>
                  <p>Id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
               maiores alias."</p>
          <p> Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              perferendis doloribus asperiores repellat.</p>
        </div>
        <div class="col s4">
          <div id="sidebar">
            <div class="collection" v-for="player in players" :key="player._id">
              <router-link
                class="collection-item"
                :to="{name: 'show', params: { id: player._id }}"
              >{{ player.name}}</router-link>
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

<style scoped>
.collection-item {
  color: rgb(42, 48, 77) !important;
}
.collection a:hover {
  color: white !important;
  background-color: rgb(42, 48, 77) !important;
}
</style>