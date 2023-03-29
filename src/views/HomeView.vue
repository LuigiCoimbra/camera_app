<!--  -->
<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f3f3f3;
  overflow-x: hidden;
}
.home {
  width: 100vw;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<template>
  <div class="home">
    <HelloWorld v-on:takePicture="this.takePicture" />
    <Gallery />
    <v-card
      style="
        width: 95%;
        display: grid;
        gap: 5px;
        padding: 10px;
        align-content: center;
      "
    >
      <v-card
        style="width: 90%; display: flex; padding: 10px"
        v-for="pic in picArr"
        :key="pic.name"
      >
        <v-img style="width: 15%" :src="pic.picURL"></v-img>
        <v-card-title style="width: 75%">{{ pic.name }}</v-card-title>
      </v-card>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable prettier/prettier */
import HelloWorld from "@/components/HelloWorld.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Gallery,
  },
  data: function () {
    return {
      picId: 0,
      picArr: [],
    };
  },
  methods: {
    takePicture() {
      let ratio = window.innerHeight < window.innerWidth ? 16 / 9 : 9 / 16;
      const picture = document.querySelector("canvas");
      picture.width = window.innerWidth < 1280 ? window.innerWidth * 2.5 : 1280;
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
      picture.style.display = 'hidden'
      var picName = localStorage.getItem("parcName") + "_" + localStorage.getItem("hospName") + "-" + localStorage.getItem("codhosp") + "_" + localStorage.getItem("eviName") + "-00" + this.picId
      this.picArr.push({
        name: picName,
        picURL: picture.toDataURL()
      })
      console.log(this.picArr)
      this.picId++
    },
    // takepic() {
    //   var picName = localStorage.getItem("parcName") + "_" + localStorage.getItem("hospName") + "-" + localStorage.getItem("codhosp") + "_" + localStorage.getItem("eviName") + "-00" + this.picId
    //   this.picData.push({
    //     name: picName,
    //   })
    //   console.log(this.picData)
    //   this.picId++
    // },
  },
};
</script>
