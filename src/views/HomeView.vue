<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
}
</style>

<template>
  <div class="home">
    <HelloWorld v-on:takePicture="this.takePicture" />
    <Gallery />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Gallery,
  },
  methods: {
    takePicture() {
      let ratio = window.innerHeight < window.innerWidth ? 16 / 9 : 9 / 16;
      const picture = document.querySelector("canvas");
      picture.width = window.innerWidth < 1280 ? window.innerWidth : 1280;
      picture.height = window.innerWidth / ratio;
      const ctx = picture.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(
        document.querySelector("video"),
        0,
        0,
        picture.width,
        picture.height
      );
    },
  },
};
</script>
