<template>
  <main-template>
    <b-container>
      <b-row align-h="center">
        <b-col cols="8">
          <b-card>
            <form-drones />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main-template>
</template>

<script>
import MainTemplate from '../templates/MainTemplate.vue';
import FormDrones from '../components/drones/FormDrones.vue';

export default {
  name: 'UpdateDrone',
  components: { MainTemplate, FormDrones },
};
</script>
