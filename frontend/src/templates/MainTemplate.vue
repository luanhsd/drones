<template>
  <div class="wrapper">
    <navbar/>
    <b-container class="main-container">
      <slot/>
    </b-container>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'MainTemplate',
  components: {
    Navbar,
  },
};
</script>

<style>
.main-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
