<template>
  <b-navbar toggleable="lg" type="dark" class="my-navbar">
    <b-navbar-brand href="#"></b-navbar-brand>
    <router-link to="/">
      <img
        src="https://user-images.githubusercontent.com/10083265/91772328-0f84e200-ebbb-11ea-81ce-2c4685405d82.png"
        class="logo"
      />
    </router-link>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
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
.logo {
  width: 218.12px;
  height: 45.375px;
}
</style>
