<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    "
  >
    <v-card style="width: 85%">
      <v-card-title>Selecione o Parceiro</v-card-title>
      <v-card-actions>
        <v-btn-toggle
          v-model="toggle_exclusive"
          style="display: grid; width: 100%; justify-items: center; gap: 5px"
        >
          <!-- eslint-disable vue/no-use-v-if-with-v-for -->
          <v-btn
            v-for="hospXparc in hospXparcs"
            :key="hospXparc.codparc"
            style="width: 85%"
          >
            {{ hospXparc.name }}
          </v-btn>
        </v-btn-toggle>
      </v-card-actions>
    </v-card>
    <v-btn style="position: fixed; bottom: 5px; width: 85%" @click="nextParc()">
      Selecionar Evidencias
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "ParcCard",
  data: function () {
    return {
      toggle_exclusive: null,
      hospXparcs: [],
      parceiros: [
        {
          name: "Meditronic",
          codparc: "1047",
          codhosp: "10000000590030",
        },
        {
          name: "Nipron Medic",
          codparc: "520",
          codhosp: "10000000590030",
        },
        {
          name: "Suprimed",
          codparc: "1450",
          codhosp: "10000000350050",
        },
      ],
    };
  },
  methods: {
    initParc() {
      console.log(this.parceiros[0].codhosp);
      for (var x = 0; this.parceiros.length > x; x++) {
        if (this.parceiros[x].codhosp == localStorage.getItem("codhosp")) {
          this.hospXparcs = this.parceiros.filter(
            (parceiro) => parceiro.codhosp == localStorage.getItem("codhosp")
          );
          console.log(this.hospXparcs);
        }
      }
    },
    nextParc() {
      if (this.toggle_exclusive != null) {
        localStorage.setItem(
          "parcName",
          this.parceiros[this.toggle_exclusive].name
        );
        this.$router.push("/evidence");
        // console.log(localStorage.getItem("codhosp"));
      } else {
        alert("É necessario selecionar 1 parceiro");
      }
    },
  },
  beforeMount() {
    this.initParc();
  },
};
</script>
