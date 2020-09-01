<template>
  <div>
    <b-row class="filter-form">
      <b-form inline>
        <b-button to="/new" variant="success" class="new-drone">Novo</b-button>
        <label class="sr-only" for="inline-form-input-name">Drone ID</label>
        <b-input
          :disabled="(name!==''||fly!==''||status!=='')"
          id="inline-form-input-name"
          class="mb-2 mr-sm-2 mb-sm-0"
          placeholder="Drone ID"
          v-model.number="id"/>
        <label class="sr-only" for="inline-form-input-username">Name</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            :disabled="id!==''"
            v-model="name"
            id="inline-form-input-username"
            placeholder="Name"/>
        </b-input-group>

        <label class="sr-only" for="inline-form-input-username">Current Fly</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-input
            :disabled="id!==''"
            v-model="fly"
            id="inline-form-input-username"
            placeholder="Current Fly"/>
        </b-input-group>

        <label class="sr-only" for="inline-form-input-username">Status</label>
        <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
          <b-form-select
            :disabled="id!==''"
            id="status"
            name="status"
            v-model="status"
            :options="options"/>
        </b-input-group>
          <b-overlay :show="searchLoading" rounded="sm" spinner-variant="primary">
            <b-button
              v-if="id===''"
              @click="getDataHandler()"
              variant="primary">Filtrar</b-button>
            <b-button v-else  @click="search" variant="primary">Buscar</b-button>
          </b-overlay>
      </b-form>
    </b-row>
    <b-row>
      <b-container>
        <div class="sort-pag">
        <b-form-group
          label-cols-sm="1"
          label-align-sm="right"
          label-size="sm"
          label-for="sortBySelect"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-select
              @change="getDataHandler()"
              v-model="orderBy"
              :options="orderByOptions"
              class="w-75">
              <template v-slot:first>
                <option value="">-- none --</option>
              </template>
            </b-form-select>
            <b-form-select
              @change="getDataHandler()"
              v-model="direction"
              size="sm"
              :disabled="!orderBy"
              class="w-25">
              <option value="ASC">Asc</option>
              <option value="DESC">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>

          <b-pagination
            class="pagination"
            :total-rows="total"
            :value="pageSelected"
            @change="getDataHandler"
            :per-page="5"
            first-number
            last-number/>
        </div>
        <b-overlay :show="loading" rounded="sm" spinner-variant="primary">
          <b-table-simple hover smal caption-top responsive>
            <b-thead>
              <b-th>Drone ID</b-th>
              <b-th aria-sort="none">CUSTOMER</b-th>
              <b-th>BATTERIES</b-th>
              <b-th>MAX SPEED</b-th>
              <b-th>AVERAGE SPEED</b-th>
              <b-th>CURRENT FLY</b-th>
              <b-th>STATUS</b-th>
            </b-thead>
            <b-tbody>
              <b-tr
                v-for="drone in drones"
                @click="() => navigateTo(drone.id)"
                :key="drone.id"
                class="my-table-drone">
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
        </b-overlay>
      </b-container>
    </b-row>
    <b-modal id="modal-erro-search" hide-footer hide-header>
      <div class="d-block text-center">
        <p>Drone não encontrado. Favor verificar sua identificação!</p>
      </div>
      <b-button
        variant="primary"
        class="mt-3"
        block
        @click="$bvModal.hide('modal-erro-search')">
          Fechar
      </b-button>
    </b-modal>
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
  data() {
    return {
      pageSelected: this.$store.state.page,
      id: '',
      name: '',
      fly: '',
      status: '',
      loading: false,
      searchLoading: false,
      filtered: false,
      orderBy: null,
      direction: 'ASC',
      options: [
        { value: '', text: 'Selecione...' },
        { value: 'success', text: 'SUCCESS' },
        { value: 'delayed', text: 'DELAYED' },
        { value: 'flying', text: 'FLYING' },
        { value: 'fail', text: 'FAIL' },
        { value: 'offline', text: 'OFFLINE' },
        { value: 'charging', text: 'CHARGING' },
      ],
      orderByOptions: [
        { value: 'id', text: 'Drone ID' },
        { value: 'name', text: 'Customer' },
        { value: 'battery', text: 'Batteries' },
        { value: 'max_speed', text: 'Max Speed' },
        { value: 'average_speed', text: 'Average Speed' },
        { value: 'fly', text: 'Current Fly' },
        { value: 'status', text: 'Status' },
      ],
    };
  },
  components: {
    Status,
    BatteryProgress,
    SpeedFormat,
    CurrentFly,
    CustomerCard,
  },
  methods: {
    navigateTo(id) {
      this.$router.push({ name: 'Details', params: { id } });
    },
    getPage(page) {
      this.loading = true;
      this.$api.get('drones', { params: { page } })
        .then((response) => {
          this.$store.dispatch('getDronesParams', response.data);
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });
      this.loading = false;
    },
    search() {
      this.searchLoading = true;
      if (Number.isInteger(this.id)) {
        this.$api.get(`/drones/${this.id}`)
          .then(() => {
            this.$router.push({ name: 'Details', params: { id: this.id } });
          })
          .catch(() => {
            this.$bvModal.show('modal-erro-search');
          });
      } else {
        this.$bvModal.show('modal-erro-search');
      }
      this.searchLoading = false;
    },
    getDataHandler(page = this.page) {
      this.searchLoading = true;
      this.$api.get('drones',
        {
          params: {
            page,
            name: this.name,
            fly: this.fly,
            status: this.status,
            orderby: this.orderBy,
            direction: this.direction,
          },
        })
        .then((response) => {
          this.$store.dispatch('getDronesParams', response.data);
        });
      this.searchLoading = false;
    },
  },
  computed: {
    ...mapGetters([
      'drones',
      'total',
      'page',
      'totalPages',
    ]),
  },
  created() {
    this.$store.dispatch('getDrones');
  },
};
</script>

<style>
.new-drone{
  margin-right: .5rem;
}
.filter-form{
  padding-bottom:2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-table-drone {
  cursor: pointer;
}
.sort-pag {
  display: flex;
  justify-content: space-between;
  align-items: inherit;
}
.sort-pag .pagination{
  background: #7159c1;
}
</style>
