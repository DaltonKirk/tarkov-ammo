<template>
  <div class="bullet-comparer">
    <div class="bullet-selectors">
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
    <div>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="FleshDamage"
        display-name="Flesh Damage"
        v-if="(bulletLeft && bulletRight)"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="PenetrationPower"
        display-name="Penetration Power"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="ArmorDamage"
        display-name="Armor Damage"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="Accuracy"
        display-name="Accuracy"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="Recoil"
        display-name="Recoil"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="FragmentationChance"
        display-name="Fragmentation Chance"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="Armor1"
        display-name="Armor 1"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="Armor2"
        display-name="Armor 2"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="Armor3"
        display-name="Armor 3"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="Armor4"
        display-name="Armor 4"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="Armor5"
        display-name="Armor 5"
      ></BulletAttributeRow>
      <BulletAttributeRow
        :bullet="bulletLeft"
        :bullet-to-compare="bulletRight"
        property="Armor6"
        display-name="Armor 6"
      ></BulletAttributeRow>
    </div>
    <div v-if="!bulletLeft || !bulletRight">Select two ammo types to compare</div>
  </div>
</template>

<script>
import BulletSelector from "@/components/BulletSelector.vue";
import bulletData from "@/data/bullet.js";
import BulletAttributeRow from "@/components/BulletAttributeRow";

export default {
  name: "CompareAmmo",
  components: {
    BulletSelector,
    BulletAttributeRow,
  },
  data: function () {
    return {
      bulletLeft: null,
      bulletRight: null,
      bullets: [],
    };
  },
  methods: {
    bulletChangeLeft: function (bullet) {
      this.bulletLeft = bullet;
    },
    bulletChangeRight: function (bullet) {
      this.bulletRight = bullet;
    },
  },
  mounted: function () {
    this.bullets = bulletData().bullets;
  },
};
</script>

<style lang="scss" scoped>
.bullet-comparer {
  div {
    height: 40px;
    line-height: 40px;
  }

  max-width: 720px;
  margin: 0 auto;
}

.bullet-selectors {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  
  & > div {
    flex-basis: 49%;
  }
}
</style>
