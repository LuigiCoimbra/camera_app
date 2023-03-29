<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 10px;
    "
  >
    <v-card style="width: 85%">
      <v-card-title> Selecione o Hospital </v-card-title>
      <v-card-actions>
        <v-btn-toggle
          v-model="toggle_exclusive"
          style="display: grid; width: 100%; justify-items: center; gap: 5px"
        >
          <v-btn
            v-for="hospital in hospitals"
            :key="hospital.codhosp"
            style="width: 85%"
          >
            {{ hospital.name }}
          </v-btn>
        </v-btn-toggle>
      </v-card-actions>
    </v-card>
    <v-btn style="position: fixed; bottom: 5px; width: 85%" @click="next">
      Selecionar Parceiro
    </v-btn>
  </div>
</template>
<script>
export default {
  name: "LoginCard",
  data: function () {
    return {
      toggle_exclusive: null,
      hospitals: [
        {
          name: "Vivale SJC",
          codhosp: "10000000590030",
        },
        {
          name: "Santa Casa SJC",
          codhosp: "10000000350050",
        },
      ],
    };
  },
  methods: {
    next() {
      if (this.toggle_exclusive != null) {
        localStorage.setItem(
          "codhosp",
          this.hospitals[this.toggle_exclusive].codhosp
        );
        localStorage.setItem(
          "hospName",
          this.hospitals[this.toggle_exclusive].name
        );
        this.$router.push("/parc");
        // console.log(localStorage.getItem("codhosp"));
      } else {
        alert("É necessario selecionar 1 hospital");
      }
    },
  },
  beforeMount() {
    localStorage.clear();
  },
};
</script>
