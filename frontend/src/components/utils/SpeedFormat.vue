<template>
  <div class="speed-format">
    <div class="number">{{ splitValue[0] }}</div>
    <div class="decimal">{{ `.${splitValue[1]} m/h` }}</div>
  </div>
</template>

<script>
export default {
  name: 'SpeedFormat',
  props: ['speed'],
  computed: {
    splitValue() {
      return this.speed.split('.', 2);
    },
  },
};
</script>

<style>
.speed-format {
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: 'Fira Code';
}
.number {
  font-size: 1.5rem;
}

.decimal {
  font-size: 1rem;
}
</style>
