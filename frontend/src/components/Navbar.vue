<template>
  <div>
  <b-navbar toggleable="lg" variant="light" class="teste">
    <b-navbar-brand href="#">
      <img
      src="../assets/logo.svg"
      width="100"
      height="60"
      class="d-inline-block align-top" alt="Kitten">
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
.teste{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
