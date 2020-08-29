<template>
  <div>
    <b-row class="filter-form">
      <b-form inline>
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
              <b-td>{{drone.name}}</b-td>
              <b-td>{{drone.battery}}</b-td>
              <b-td>{{drone.max_speed}}</b-td>
              <b-td>{{drone.average_speed}}</b-td>
              <b-td>{{drone.fly}}</b-td>
              <b-td>{{drone.status}}</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-container>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'DroneTable',
  data() {
    return {
      drones: this.$store.getters.drones,
    };
  },
};
</script>

<style>
.filter-form{
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
