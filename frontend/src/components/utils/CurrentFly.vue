<template>
  <div class="bar-container">
    <b-input
      type="range"
      size="sm"
      :value="value"
      min="0"
      max="100"
      step="1"/>
  </div>
</template>

<script>
export default {
  name: 'CurrentFly',
  props: ['value', 'status'],
  computed: {
    setColor() {
      if (this.value === 100) {
        return 'success';
      }
      if (this.value < 50 && this.value > 25) {
        return 'warning';
      }
      if (this.value > 50) {
        return 'primary';
      }
      return 'danger';
    },
  },
};
</script>

<style>
.bar-container{
  position: relative;
  top: 0.3rem;
}
</style>
