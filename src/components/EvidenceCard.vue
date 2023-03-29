<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    "
  >
    <v-card
      style="
        width: 85%;
        display: grid;
        justify-items: center;
        align-content: center;
      "
    >
      <v-card-title
        style="width: 80%; overflow-wrap: normal !important; text-align: center"
        >Selecione o tipo de Evidencia</v-card-title
      >
      <v-card-actions>
        <v-btn-toggle
          v-model="toggle_exclusive"
          style="display: grid; width: 100%; justify-items: center; gap: 5px"
        >
          <!-- eslint-disable vue/no-use-v-if-with-v-for -->
          <v-btn
            v-for="evidencia in evidencias"
            :key="evidencia.codevi"
            style="
              width: 100%;
              text-transform: capitalize;
              font-size: 12px;
              padding: 5px;
            "
          >
            <span>
              {{ evidencia.name }}
            </span>
          </v-btn>
        </v-btn-toggle>
      </v-card-actions>
    </v-card>
    <v-btn style="position: fixed; bottom: 5px; width: 65%" @click="nextEvi()">
      Capturar Evidencias
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "EvidenceCard",
  data: function () {
    return {
      toggle_exclusive: null,
      evidencias: [
        {
          codevi: 1,
          name: "Evidencias de Sobra",
        },
        {
          codevi: 2,
          name: "Evidencias de Faltas",
        },
        {
          codevi: 3,
          name: "Evidencias dos Itens Segregados",
        },
        {
          codevi: 4,
          name: "Evidencias das Segregações",
        },
        {
          codevi: 5,
          name: "Evidencias dos Gastos Cirurgicos",
        },
        {
          codevi: 6,
          name: "Evidencias do Checklist",
        },
        {
          codevi: 7,
          name: "Outros",
        },
      ],
    };
  },
  methods: {
    nextEvi() {
      if (this.toggle_exclusive != null) {
        localStorage.setItem(
          "eviName",
          this.evidencias[this.toggle_exclusive].name
        );
        this.$router.push("/login");
        // console.log(localStorage.getItem("codhosp"));
      } else {
        alert("É necessario selecionar a evidencia");
      }
    },
  },
};
</script>
