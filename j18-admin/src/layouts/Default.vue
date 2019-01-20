<script>
import navbar from "@/components/navbar";
import footer from "@/components/footer";

export default {
  components: {
    navbar,
    footer
  }
};
</script>

<template>
  <div>
    <navbar />
    nav

    <div class="container">
      <slot />
     
    </div>

    <footer />
 
  </div>
</template>
