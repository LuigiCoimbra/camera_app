<template style="display: hidden">
  <div class="picture">
    <div class="evidence">
      <canvas></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallery_pic",
};
</script>

<style lang="scss" scoped>
.picture {
  display: none;
  width: 90%;
  height: auto;

  padding: 15px;
  box-sizing: border-box;
  box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.35);
  .evidence {
    display: hidden;
    width: 50%;
    height: auto;
    canvas {
      display: hidden;
      width: 50%;

      margin: 0 auto;

      box-shadow: 4px 4px 12px 0px transparentize($color: #171717, $amount: 0.5);
    }
  }
}
</style>
