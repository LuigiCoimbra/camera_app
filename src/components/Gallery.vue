<template>
  <div class="picture">
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  name: "gallery_pic",
};
</script>

<style lang="scss" scoped>
.picture {
  display: block;
  width: 90%;
  height: auto;

  padding: 25px;
  box-sizing: border-box;
  canvas {
    display: block;
    width: 100%;

    margin: 0 auto;

    box-shadow: 4px 4px 12px 0px transparentize($color: #171717, $amount: 0.5);
  }
}
</style>
