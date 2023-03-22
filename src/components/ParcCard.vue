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
          <v-btn
            v-for="parceiro in parceiros"
            :key="parceiro.codparc"
            style="width: 85%"
          >
            {{ parceiro.name }}
          </v-btn>
        </v-btn-toggle>
      </v-card-actions>
    </v-card>
    <v-btn style="position: fixed; bottom: 5px; width: 85%" href="./">
      Capturar Evidencias
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "ParcCard",
  data: function () {
    return {
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
};
</script>
