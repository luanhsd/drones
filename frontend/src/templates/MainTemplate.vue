<template>
  <div class="wrapper">
    <navbar />
    <b-container fluid class="main-container">
      <slot />
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/layout/Navbar.vue';

export default {
  name: 'MainTemplate',
  components: {
    Navbar,
  },
};
</script>

<style>
.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
