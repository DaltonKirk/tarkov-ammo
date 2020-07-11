<template>
  <div class="bullet-comparer">
    <div class="table-headers">
      <div>Type</div>
      <div>Flesh Damage</div>
      <div>Pen Power</div>
      <div>Armour Damage</div>
      <div>Accuracy</div>
      <div>Recoil</div>
      <div>Fragmentation Chance</div>
      <div>Armour 1</div>
      <div>Armour 2</div>
      <div>Armour 3</div>
      <div>Armour 4</div>
      <div>Armour 5</div>
      <div>Armour 6</div>
    </div>
    <BulletSelector
      :bullets="bullets"
      @bulletChange="bulletChangeLeft"
      :bulletToCompare="bulletRight"
    ></BulletSelector>
    <BulletSelector
      :bullets="bullets"
      @bulletChange="bulletChangeRight"
      :bulletToCompare="bulletLeft"
    ></BulletSelector>
  </div>
</template>

<script>
// @ is an alias to /src
import BulletSelector from "@/components/BulletSelector.vue";
import bulletData from "@/data/bullet.js";

export default {
  name: "CompareAmmo",
  components: {
    BulletSelector
  },
  data: function() {
    return {
      bulletLeft: null,
      bulletRight: null,
      bullets: []
    };
  },
  methods: {
    bulletChangeLeft: function(bullet) {
      this.bulletLeft = bullet;
    },
    bulletChangeRight: function(bullet) {
      this.bulletRight = bullet;
    }
  },
  mounted: function() {
    this.bullets = bulletData().bullets;
  }
};
</script>

<style lang="scss" scoped>
.bullet-comparer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div {
    height: 40px;
    line-height: 40px;
  }

  max-width: 720px;
  margin: 0 auto;
}

.table-headers {
  div {
    overflow: hidden;
    text-align: left;
  }
}
</style>
