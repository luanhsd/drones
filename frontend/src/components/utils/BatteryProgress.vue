<template>
  <div class="battery-container">
    <b-progress
    :value="value"
    v-b-tooltip.hover
    max="100"
    :title="`${value} %`"
    :variant="setColor"/>
  </div>
</template>

<script>
export default {
  name: 'BatteryProgress',
  props: ['value'],
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
.battery-container{
  position: relative;
  top: 0.6rem;
}
</style>
