<template>
  <div class="bar-container">
    <b-input
      class="input-fly-range"
      type="range"
      size="sm"
      :value="value"
      min="0"
      max="100"
      step="1"
      disabled
    />
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
.bar-container {
  position: relative;
  top: 0.3rem;
}
.input-fly-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 2px solid #ffffff;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background: linear-gradient(#2196f3, #007bff);
  margin-top: -9px;
}
</style>
