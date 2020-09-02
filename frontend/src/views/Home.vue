<template>
  <main-template>
    <drone-table />
  </main-template>
</template>

<script>
import MainTemplate from '../templates/MainTemplate.vue';
import DroneTable from '../components/main/DroneTable.vue';

export default {
  name: 'Home',
  components: { MainTemplate, DroneTable },
};
</script>
