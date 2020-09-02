<template>
  <main-template>
    <b-container>
      <b-row align-h="center">
        <b-col cols="8">
          <b-card>
            <card-drones />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </main-template>
</template>

<script>
import MainTemplate from '../templates/MainTemplate.vue';
import CardDrones from '../components/drones/CardDrones.vue';

export default {
  name: 'DetailsDrone',
  components: { MainTemplate, CardDrones },
};
</script>
