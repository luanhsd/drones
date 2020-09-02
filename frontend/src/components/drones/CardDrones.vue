<template>
  <div>
    <router-link to="/" class="h2 mb-2">
      <b-icon
        icon="arrow-left-circle-fill"
        variant="primary"
        class="bt-details-back"
      />
    </router-link>
    <b-icon
      class="bt-details-delete h3 mb-2"
      @click="$bvModal.show('modal-delete-confirm')"
      icon="trash"
      variant="danger"
    />
    <router-link :to="`/update/${drone.id}`" class="h3 mb-2">
      <b-icon icon="pencil" variant="primary" class="bt-details-update" />
    </router-link>
    <b-container fluid class="my-drone-card">
      <b-img :src="verifyImage" fluid rounded="circle" class="drone-image" />
    </b-container>
    <b-list-group>
      <b-list-group-item><b>Nome: </b>{{ drone.name }}</b-list-group-item>
      <b-list-group-item
        ><b>Endereço: </b>{{ drone.address }}</b-list-group-item
      >
      <b-list-group-item
        ><b>Bateria: </b>{{ drone.battery }} %</b-list-group-item
      >
      <b-list-group-item
        ><b>Velocidade Máxima: </b>{{ drone.max_speed }} m/h</b-list-group-item
      >
      <b-list-group-item
        ><b>Velocidade Média: </b
        >{{ drone.average_speed }} m/h</b-list-group-item
      >
      <b-list-group-item><b>Status: </b>{{ drone.status }}</b-list-group-item>
      <b-list-group-item><b>Current Fly: </b>{{ drone.fly }}</b-list-group-item>
    </b-list-group>
    <b-modal id="modal-delete-confirm" hide-footer hide-header>
      <div class="d-block text-center">
        <p>Tem certeza que deseja remover o registro?</p>
      </div>
      <b-container class="button-delete-modal">
        <b-button class="mt-3" variant="danger" @click="deleteRegister">
          Excluir
        </b-button>
        <b-button class="mt-3" @click="$bvModal.hide('modal-delete-confirm')">
          Cancelar
        </b-button>
      </b-container>
    </b-modal>
    <b-modal id="modal-error-delete" hide-footer hide-header>
      <div class="d-block text-center">
        <p>Falha ao excluir. Registro já deletado ou não existe!</p>
      </div>
      <b-button class="mt-3" block @click="goBack">
        Fechar
      </b-button>
    </b-modal>
  </div>
</template>

<script>
import Image from '../../assets/user.png';

export default {
  name: 'CardDrones',
  data() {
    return {
      drone: {},
      user: Image,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    deleteRegister() {
      this.$api
        .delete(`/drones/${this.drone.id}`)
        .then(() => {
          this.$bvModal.hide('modal-delete-confirm');
          this.goBack();
        })
        .catch(() => {
          this.$bvModal.show('modal-error-delete');
        });
    },
  },
  computed: {
    verifyImage() {
      if (this.drone.image.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return this.drone.image;
      }
      return Image;
    },
  },
  created() {
    const { id } = this.$route.params;
    this.$api
      .get(`/drones/${id}`)
      .then((response) => {
        this.drone = response.data;
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  },
};
</script>

<style>
.my-drone-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.drone-image {
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.25),
    inset 0 -1px 5px rgba(0, 0, 0, 0.25);
  max-width: 15rem;
  max-height: 15rem;
}
.bt-details-back {
  float: left;
  position: relative;
}
.bt-details-update {
  float: right;
  margin-left: 1rem;
}
.bt-details-delete {
  float: right;
  margin-left: 1rem;
  cursor: pointer;
}
.circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
}
.button-delete-modal {
  display: flex;
  justify-content: space-around;
}
</style>
