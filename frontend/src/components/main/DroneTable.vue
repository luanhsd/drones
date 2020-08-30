<template>
  <div>
    <b-row class="filter-form">
      <b-form inline>
        <b-button variant="success" class="new-drone">Novo</b-button>
        <label class="sr-only" for="inline-form-input-name">Drone ID</label>
        <b-input
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Drone ID"
        ></b-input>
        <label class="sr-only" for="inline-form-input-username">Name</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="inline-form-input-username" placeholder="Name"></b-input>
        </b-input-group>

        <label class="sr-only" for="inline-form-input-username">Current Fly</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="inline-form-input-username" placeholder="Current Fly"></b-input>
        </b-input-group>

        <label class="sr-only" for="inline-form-input-username">Status</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="inline-form-input-username" placeholder="Status"></b-input>
        </b-input-group>

          <b-button variant="primary">Filtrar</b-button>
      </b-form>
    </b-row>
    <b-row>
      <b-container>
        <b-table-simple hover smal caption-top responsive>
          <b-thead>
            <b-th>Drone ID</b-th>
            <b-th>CUSTOMER</b-th>
            <b-th>BATTERIES</b-th>
            <b-th>MAX SPEED</b-th>
            <b-th>AVERAGE SPEED</b-th>
            <b-th>CURRENT FLY</b-th>
            <b-th>STATUS</b-th>
          </b-thead>
          <b-tbody>
            <b-tr v-for="drone in drones" :key="drone.id">
              <b-td>{{drone.id}}</b-td>
              <b-td><customer-card
                      :image="drone.image"
                      :name="drone.name"
                      :address="drone.address"
                      /></b-td>
              <b-td><battery-progress :value="drone.battery"/></b-td>
              <b-td><speed-format :speed="drone.max_speed"/></b-td>
              <b-td><speed-format :speed="drone.average_speed"/></b-td>
              <b-td><current-fly :value="drone.fly"/></b-td>
              <b-td><status :value="drone.status"/></b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-container>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Status from '../utils/Status.vue';
import BatteryProgress from '../utils/BatteryProgress.vue';
import SpeedFormat from '../utils/SpeedFormat.vue';
import CurrentFly from '../utils/CurrentFly.vue';
import CustomerCard from '../utils/CustomerCard.vue';

export default {
  name: 'DroneTable',
  components: {
    Status,
    BatteryProgress,
    SpeedFormat,
    CurrentFly,
    CustomerCard,
  },
  computed: {
    ...mapGetters([
      'drones',
    ]),
  },
};
</script>

<style>
.new-drone{
  margin-right: .5rem;
}
.filter-form{
  padding: 1rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
