<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="primary" class="my-navbar">
    <b-navbar-brand href="#">onDrone
    </b-navbar-brand>

  </b-navbar>
</div>
</template>

<script>

export default {
  name: 'Navbar',
};
</script>

<style>
.my-navbar {
   box-shadow: 0 0.25rem 0.25rem rgba(0,0,0,.25), inset 0 -1px 5px rgba(0,0,0,.25);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
