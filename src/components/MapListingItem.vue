<template>
  <li :style="{backgroundImage:'url(' + mapUrl + ')'}">
    <div style="position:relative;z-index:2">{{mapName}}</div>
    <div class="effect" style></div>
  </li>
</template>

<script>
export default {
  props: ["mapName", "mapUrl"]
};
</script>

<style lang="scss" scoped>
li {
  display: inline;
  border: 1px solid black;
  border-radius: 5px;
  padding: 30px;
  cursor: pointer;
  background-position: center;
  background-size: cover;
  position: relative;
  &:hover {
      div {
        color: #3d3d3d;
      }
    .effect {
      height: 50px;
    }
  }
}

.effect {
  width: 100%;
  background: darkgrey;
  height: 0px;
  bottom: 0;
  position: absolute;
  left: 0;
  transition: height 0.2s linear;
}
</style>