<template>
  <div class="customer-card">
    <b-avatar :src="image" />
    <div class="details-card">
      <div class="name">
        <b>{{ name }}</b>
      </div>
      <div class="address">{{ address }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomerCard',
  props: ['image', 'name', 'address'],
};
</script>

<style>
.customer-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.details-card {
  margin-left: 1rem;
}
.name {
  font-size: 1rem;
}
.address {
  font-size: 0.5rem;
}
</style>
