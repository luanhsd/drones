<template>
  <b-overlay :show="loading" rounded="sm">
    <b-form @submit="onSubmit">
      <b-form-group
        id="image-group"
        label="Imagem:"
        label-for="image">
        <b-form-file
          id="image"
          type="file"
          name="image"
          v-model="drone.image"
          placeholder="Arquivos Permitidos: .png, .jpeg ou .jpg"/>
      </b-form-group>

      <b-form-group
        id="name-group"
        label="Nome:"
        label-for="name">
        <b-form-input
          id="name"
          name="name"
          type="text"
          v-model="drone.name"
          required
          placeholder="João das Neves"/>
      </b-form-group>

      <b-form-group
        id="address-group"
        label="Endereço:"
        name="address"
        label-for="address">
        <b-form-input
        id="address"
        type="text"
        v-model="drone.address"
        required
        placeholder="Rua dos Alfeneiros, nº4"/>
      </b-form-group>
      <b-row>
        <b-col>
          <b-form-group
            id="battery-group"
            label="Bateria:"
            label-for="battery">
              <b-form-input
                id="battery"
                name="battery"
                type="text"
                v-model="drone.battery"
                placeholder="100"/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="velomax-group"
            label="Velocidade Máx.:"
            label-for="velomax">
              <b-form-input
                id="velomax"
                name="max_speed"
                type="text"
                v-model="drone.max_speed"
                placeholder="3.5"/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="veloaver-group"
            label="Velocidade Média:"
            label-for="veloaver">
              <b-form-input
                id="veloaver"
                type="text"
                v-model="drone.average_speed"
                name="average_speed"
                placeholder="3.5"/>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="status-group"
            label="Status:"
            label-for="status">
            <b-form-select
              id="status"
              :value="drone.status"
              name="status"
              v-model="statusSelected"
              :options="options"/>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="fly-group"
            label="Voo Atual:"
            label-for="fly">
              <b-form-input
                id="fly"
                type="text"
                name="fly"
                v-model="drone.fly"
                placeholder="90"/>
          </b-form-group>
        </b-col>
      </b-row>

      <div class="buttons-group">
        <b-button v-if="verifyParams" type="submit" variant="primary">Salvar</b-button>
        <b-button v-else type="submit" variant="primary">Atualizar</b-button>
        <b-button type="reset" variant="light">Cancelar</b-button>
      </div>
      <div class="validation-group">
        <b-alert
          v-for="(validation, index) in validations"
          :key="index"
          variant="danger"
          class="validation-alert"
          show>
          Success Alert
        </b-alert>
      </div>
    </b-form>
  </b-overlay>
</template>

<script>
export default {
  name: 'FromDrones',
  data() {
    return {
      validations: [],
      drone: {},
      loading: false,
      id: this.$route.params.id,
      statusSelected: null,
      options: [
        { value: null, text: 'Selecione...' },
        { value: 'success', text: 'SUCCESS' },
        { value: 'delayed', text: 'DELAYED' },
        { value: 'flying', text: 'FLYING' },
        { value: 'fail', text: 'FAIL' },
        { value: 'offline', text: 'OFFLINE' },
        { value: 'charging', text: 'CHARGING' },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.loading = true;
      this.$api.post('/drones')
        .then((response) => {
          console.log(response);
        });
    },
  },
  created() {
    if (this.id !== undefined) {
      this.$api.get(`/drones/${this.id}`)
        .then((response) => {
          if (response.data) {
            this.drone = response.data;
          }
        });
    }
  },
  computed: {
    verifyParams() {
      if (this.$route.params.id) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: "Procurar";
}
.buttons-group{
  display: flex;
  justify-content: space-between;
}
.validation-group{
  margin-top:0.5rem;
}
.validation-alert{
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
