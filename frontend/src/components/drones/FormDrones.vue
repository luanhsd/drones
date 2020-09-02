<template>
  <b-overlay :show="loading" rounded="sm" spinner-variant="primary">
    <a @click="goBack" class="h2 mb2 btn-go-back">
      <b-icon icon="arrow-left-circle-fill" variant="primary" />
    </a>
    <b-form @submit="onSubmit">
      <b-form-group id="image-group" label="Imagem:" label-for="image">
        <b-form-file
          id="image"
          type="file"
          name="image"
          @change="fileUploadHandler"
          placeholder="Arquivos Permitidos: .png, .jpeg ou .jpg"
        />
      </b-form-group>

      <b-form-group id="name-group" label="Nome:" label-for="name">
        <b-form-input
          id="name"
          name="name"
          type="text"
          v-model="drone.name"
          required
          placeholder="João das Neves"
        />
      </b-form-group>

      <b-form-group
        id="address-group"
        label="Endereço:"
        name="address"
        label-for="address"
      >
        <b-form-input
          id="address"
          type="text"
          v-model="drone.address"
          required
          placeholder="Rua dos Alfeneiros, nº4"
        />
      </b-form-group>
      <b-row>
        <b-col>
          <b-form-group id="battery-group" label="Bateria:" label-for="battery">
            <b-form-input
              id="battery"
              name="battery"
              type="text"
              v-model.number="drone.battery"
              required
              placeholder="100"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="velomax-group"
            label="Velocidade Máx.:"
            label-for="velomax"
          >
            <b-form-input
              id="velomax"
              name="max_speed"
              type="text"
              v-model.number="drone.max_speed"
              required
              placeholder="3.5"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="veloaver-group"
            label="Velocidade Média:"
            label-for="veloaver"
          >
            <b-form-input
              id="veloaver"
              type="text"
              v-model.number="drone.average_speed"
              name="average_speed"
              required
              placeholder="3.5"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group id="status-group" label="Status:" label-for="status">
            <b-form-select
              id="status"
              name="status"
              v-model="status"
              :options="options"
            />
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group id="fly-group" label="Voo Atual:" label-for="fly">
            <b-form-input
              id="fly"
              type="text"
              name="fly"
              v-model.number="drone.fly"
              required
              placeholder="90"
            />
          </b-form-group>
        </b-col>
      </b-row>

      <div class="buttons-group">
        <b-button v-if="verifyParams" type="submit" variant="primary"
          >Salvar</b-button
        >
        <b-button v-else type="submit" variant="primary">Atualizar</b-button>
        <b-button to="/" variant="light">Cancelar</b-button>
      </div>
      <div class="validation-group">
        <b-alert
          variant="danger"
          class="validation-alert"
          v-for="(message, index) in messages"
          :key="index"
          show
        >
          {{ message }}
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
      loading: false,
      messages: {},
      id: this.$route.params.id,
      drone: {},
      image: null,
      status: 'offline',
      options: [
        { value: 'offline', text: 'OFFLINE' },
        { value: 'success', text: 'SUCCESS' },
        { value: 'delayed', text: 'DELAYED' },
        { value: 'flying', text: 'FLYING' },
        { value: 'fail', text: 'FAIL' },
        { value: 'charging', text: 'CHARGING' },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onSubmit(event) {
      event.preventDefault();
      this.loading = true;
      const data = this.setData();
      if (this.verifyParams) {
        this.$api
          .post('/drones', data)
          .then((response) => {
            if (response.data) {
              this.$store.dispatch('getDrones');
              this.goBack();
            }
          })
          .catch((error) => {
            const { message } = error.response.data;
            if (typeof message === 'string' || message instanceof String) {
              this.messages = [message];
            } else {
              this.messages = message;
            }
          });
      } else {
        this.$api
          .put(`drones/${this.id}`, data)
          .then((response) => {
            if (response.data) {
              this.$store.dispatch('getDrones');
              this.goBack();
            }
          })
          .catch((error) => {
            const { message } = error.response.data;
            if (typeof message === 'string' || message instanceof String) {
              this.messages = [message];
            } else {
              this.messages = message;
            }
          });
      }
      this.loading = false;
    },
    fileUploadHandler(event) {
      [this.image] = event.target.files;
    },
    setData() {
      const data = new FormData();
      if (this.image !== null) {
        data.append('image', this.image);
      }
      data.append('name', this.drone.name.trim());
      data.append('address', this.drone.address.trim());
      data.append('battery', this.drone.battery);
      data.append('max_speed', this.drone.max_speed);
      data.append('average_speed', this.drone.average_speed);
      data.append('status', this.status);
      data.append('fly', this.drone.fly);
      return data;
    },
  },
  created() {
    if (this.id !== undefined) {
      this.$api.get(`/drones/${this.id}`).then((response) => {
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
  content: 'Procurar';
}
.buttons-group {
  display: flex;
  justify-content: space-between;
}
.validation-group {
  margin-top: 0.5rem;
}
.validation-alert {
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-go-back {
  cursor: pointer;
}
</style>
