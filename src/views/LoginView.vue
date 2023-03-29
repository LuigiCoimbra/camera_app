<template>
  <div class="login" style="width: inherit">
    <LoginCard />
  </div>
</template>

<script>
import LoginCard from "@/components/LoginCard.vue";

export default {
  name: "LoginView",
  components: {
    LoginCard,
  },
};
</script>
