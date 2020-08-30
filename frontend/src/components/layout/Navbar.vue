<template>
  <b-navbar toggleable="lg" type="dark" class="my-navbar">
    <b-navbar-brand href="#">
    </b-navbar-brand>
      <img :src="logo" class="logo"/>
  </b-navbar>
</template>

<script>
import Image from '../../assets/logo.svg';

export default {
  name: 'Navbar',
  data() {
    return {
      logo: Image,
    };
  },
};
</script>

<style>
.my-navbar {
  /*box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,.25), inset 0 -1px 5px rgba(0,0,0,.25);*/
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.logo{
  width: 218.12px;
  height: 45.375px;
}
</style>
