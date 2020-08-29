<template>
  <main-template>
    <div>
  <b-form inline>
    <label class="sr-only" for="inline-form-input-name">Name</label>
    <b-input
      id="inline-form-input-name"
      class="mb-2 mr-sm-2 mb-sm-0"
      placeholder="Jane Doe"
    ></b-input>

    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="Username"></b-input>
    </b-input-group>

    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

    <b-button variant="primary">Save</b-button>
  </b-form>
</div>

    <b-table striped hover :items="items"></b-table>
  </main-template>
</template>

<script>
import MainTemplate from '../templates/MainTemplate.vue';

export default {
  name: 'Home',
  components: { MainTemplate },
  data() {
    return {
      items: [
        {
          Drone: 1, Customer: 'Dickerson', Batteries: 10, Max_Speed: 50.2, Average_Speed: 22.5, Current_Fly: 30, last_name: 'Macdonald',
        },
        {
          Drone: 2, Customer: 'Larsen', Batteries: 10, Max_Speed: 50.2, Average_Speed: 22.5, Current_Fly: 30, last_name: 'Macdonald',
        },
        {
          Drone: 3, Customer: 'Geneva', Batteries: 10, Max_Speed: 50.2, Average_Speed: 22.5, Current_Fly: 30, last_name: 'Macdonald',
        },
        {
          Drone: 4, Customer: 'Jami', Batteries: 10, Max_Speed: 50.2, Average_Speed: 22.5, Current_Fly: 30, last_name: 'Macdonald',
        },
      ],
    };
  },
};
</script>
