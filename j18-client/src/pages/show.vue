<template>
    <div class="container">
      <div class="row">
         <div class="col s12">
      <router-link :to="{name: 'home'}"><i class="fal fa-angle-double-left"></i> Tillbaka</router-link> <!-- kan vara denna som pajjar-->
      </div>
      </div>
      <div class="row">
        <div class="col s8">
          <h3>{{ player.name }}</h3>
          <div class="row"></div>
          <hr>
          <div class="row">
            <div class="col s3">
              <h5>
                <strong>Nummer:</strong>
                {{ player.number }}
               </h5>
            </div>
            <div class="col s3">
             <h5>
                <strong>Position:</strong>
                {{ player.position }}
              </h5>
            </div>
            <div class="col s6">
             <h5>
                <strong>Födelseklubb:</strong>
                {{ player.uclub }}
            </h5>
            </div>
            <div class="row"></div>
            <div class="col s12">
              <h5>
                <strong>Spelaregenskaper:</strong>
              </h5>
              <p>{{ player.desc }}</p>
            </div>
          </div>
        </div>
        <div class="col s4">
          <div id="sidebar">
           <h4> Våra Sponsorer</h4>
           <div class="row">
              <div class="col s12">
                 <img src="../assets/olearys_marsta_logo.png">
              </div>
           </div>
           <div class="row">
              <div class="col s12">
                 <img src="../assets/Sportextra_logo_original.png">
              </div>
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
      player: {}
    };
  },
  created() {
    let uri = `https://j18-server.herokuapp.com/players/edit/${
      this.$route.params.id
    }`;
    this.axios.get(uri).then(response => {
      this.player = response.data;
    });
  }
};
</script>

<style scoped>
</style>