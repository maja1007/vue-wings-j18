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
    <nav-bar />

    <div class="container">
      <slot />
    </div>

    <footer-bar />
  </div>
</template>
