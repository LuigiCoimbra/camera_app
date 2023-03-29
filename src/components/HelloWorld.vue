<!--  -->
<template>
  <div class="camera">
    <video autoplay class="feed"></video>
    <button class="take" v-on:click="$emit('takePicture')"></button>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
export default {
  name: "HelloWorld",
  data: function () {
    return {
      picId: 0,
      picData: [],
    };
  },
  methods: {
    init() {
      if (
        "mediaDevices" in navigator &&
        "getUserMedia" in navigator.mediaDevices
      ) {
        let constraints = {
          video: {
            width: {
              min: 640,
              ideal: 1280,
              max: 1920,
            },
            height: {
              min: 360,
              ideal: 720,
              max: 1080,
            },
          },
        };
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
          videoPlayer.play();
        });
      } else {
        alert("Cannot get media Devices");
      }
    },
  },
  beforeMount() {
    this.init();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.camera {
  width: 90%;
  height: auto;
  padding: 25px;
  box-sizing: border-box;

  .feed {
    display: block;
    width: 100%;

    margin: 0 auto;

    background-color: #171717;
    box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.35);
  }

  .take {
    display: block;

    width: 75px;
    height: 75px;
    border-radius: 50%;

    margin: 15px auto;

    border: 2px solid #b1b1b1;
    outline: 2px solid #b1b1b1;
    outline-offset: -10px;
    background-color: #5c5c5c;

    cursor: pointer;

    &:hover {
      background-color: transparentize($color: #5c5c5c, $amount: 0.15);
    }
    &:active {
      background-color: darken($color: #5c5c5c, $amount: 10);
    }
  }
}
</style>
