<template>
  <div class="parc" style="width: inherit">
    <ParcCard />
  </div>
</template>
<script>
import ParcCard from "@/components/ParcCard.vue";

export default {
  name: "ParcView",
  components: {
    ParcCard,
  },
};
</script>
