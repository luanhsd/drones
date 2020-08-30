<template>
  <b-alert show :variant="statusToColor" class="mb-0 my-alert">{{value}}</b-alert>
</template>

<script>
export default {
  name: 'Status',
  props: ['value'],
  computed: {
    statusToColor() {
      switch (this.value) {
        case 'success':
          return 'success';
        case 'delayed':
          return 'warning';
        case 'flying':
          return 'primary';
        case 'fail':
          return 'danger';
        case 'offline':
          return 'light';
        case 'charging':
          return 'info';
        default:
          return 'light';
      }
    },
  },
};
</script>

<style>
.my-alert {
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
}
</style>

/*
  SUCCESS
  DELAYED
  FLYING
  FAIL
  OFFLINE
  CHARGING
*/
