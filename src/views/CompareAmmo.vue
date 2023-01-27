<template>
  <div class="bullet-comparer">
    <div class="bullet-selectors">
      <BulletSelector
        :bullets="bullets"
        @bulletChange="bulletChangeLeft"
        :bulletToCompare="bulletRight"
        :initVal="this.$route.query.left"
      ></BulletSelector>
      <BulletSelector
        :bullets="bullets"
        @bulletChange="bulletChangeRight"
        :bulletToCompare="bulletLeft"
        :initVal="this.$route.query.right"
      ></BulletSelector>
    </div>
    <div></div>
    <div>
      <stat-row
        :label="'Flesh damage'"
        :left-value="bulletLeft.FleshDamage"
        :right-value="bulletRight.FleshDamage"
        :max-value="bestFleshDamage"
      />
      <stat-row
        :label="'Penetration power'"
        :left-value="bulletLeft.PenetrationPower"
        :right-value="bulletRight.PenetrationPower"
        :max-value="bestPenPower"
      />
      <stat-row
        :label="'Armor damage'"
        :left-value="bulletLeft.ArmorDamage"
        :right-value="bulletRight.ArmorDamage"
        :max-value="bestArmourDmg"
      />
      <stat-row
        :label="'Accuracy'"
        :left-value="bulletLeft.Accuracy"
        :right-value="bulletRight.Accuracy"
        :max-value="bestAcc"
      />
      <stat-row
        :label="'Recoil'"
        :left-value="bulletLeft.Recoil"
        :right-value="bulletRight.Recoil"
        :max-value="highestRecoil"
      />
      <stat-row
        :label="'Fragmentation Chance'"
        :left-value="bulletLeft.FragmentationChance"
        :right-value="bulletRight.FragmentationChance"
        :max-value="100"
      />
      <stat-row
        :label="'Armour 1'"
        :left-value="bulletLeft.Armor1"
        :right-value="bulletRight.Armor1"
        :max-value="6"
      />
      <stat-row
        :label="'Armour 2'"
        :left-value="bulletLeft.Armor2"
        :right-value="bulletRight.Armor2"
        :max-value="6"
      />
      <stat-row
        :label="'Armour 3'"
        :left-value="bulletLeft.Armor3"
        :right-value="bulletRight.Armor3"
        :max-value="6"
      />
      <stat-row
        :label="'Armour 4'"
        :left-value="bulletLeft.Armor4"
        :right-value="bulletRight.Armor4"
        :max-value="6"
      />
      <stat-row
        :label="'Armour 5'"
        :left-value="bulletLeft.Armor5"
        :right-value="bulletRight.Armor5"
        :max-value="6"
      />
      <stat-row
        :label="'Armour 6'"
        :left-value="bulletLeft.Armor6"
        :right-value="bulletRight.Armor6"
        :max-value="6"
      />
    </div>
  </div>
</template>

<script>
import BulletSelector from "@/components/BulletSelector.vue";
import bulletData from "@/data/bullet.js";
//import BulletAttributeRow from "@/components/BulletAttributeRow";
import StatRow from "../components/StatRow.vue";

export default {
  name: "CompareAmmo",
  components: {
    BulletSelector,
    // BulletAttributeRow,
    StatRow,
  },

  metaInfo: {
    title: "Compare Ammo",
    titleTemplate: "%s - Tarkov Ammo",
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content:
          "Compare Tarkov ammo side by side and determine which ammo is better. View damage differences, accuracy differences, and more.",
      },
    ],
  },

  data: function () {
    return {
      bulletLeft: {
        FleshDamage: 0,
        PenetrationPower: 0,
        ArmorDamage: 0,
        Accuracy: 0,
        Recoil: 0,
        FragmentationChance: 0,
        Armor1: 0,
        Armor2: 0,
        Armor3: 0,
        Armor4: 0,
        Armor5: 0,
        Armor6: 0,
      },
      bulletRight: {
        FleshDamage: 0,
        PenetrationPower: 0,
        ArmorDamage: 0,
        Accuracy: 0,
        Recoil: 0,
        FragmentationChance: 0,
        Armor1: 0,
        Armor2: 0,
        Armor3: 0,
        Armor4: 0,
        Armor5: 0,
        Armor6: 0,
      },
      bullets: [],
      queryParamLeft: "",
      queryParamRight: "",
    };
  },
  watch: {
    bulletLeft: function (val) {
      if (val.Name && val.Name.toLowerCase() != this.$route.query.left.toLowerCase()) {
        this.$router.push({
          path: this.$route.path,
          query: { left: val.Name, right: this.$route.query.right },
        });
      }
    },
    bulletRight: function (val) {
      if (val.Name && val.Name.toLowerCase() != this.$route.query.right.toLowerCase()) {
        this.$router.push({
          path: this.$route.path,
          query: { left: this.$route.query.left, right: val.Name },
        });
      }
    },
  },
  computed: {
    bestFleshDamage() {
      let bestFd = 0;
      for (let index = 0; index < this.bullets.length; index++) {
        const element = this.bullets[index];
        if (element.FleshDamage > bestFd) {
          bestFd = element.FleshDamage;
        }
      }
      return bestFd;
    },
    bestPenPower() {
      let bestPen = 0;
      for (let index = 0; index < this.bullets.length; index++) {
        const element = this.bullets[index];
        if (element.PenetrationPower > bestPen) {
          bestPen = element.PenetrationPower;
        }
      }
      return bestPen;
    },
    bestArmourDmg() {
      let armourDmg = 0;
      for (let index = 0; index < this.bullets.length; index++) {
        const element = this.bullets[index];
        if (element.ArmorDamage > armourDmg) {
          armourDmg = element.ArmorDamage;
        }
      }
      return armourDmg;
    },
    bestAcc() {
      let bestAcc = 0;
      for (let index = 0; index < this.bullets.length; index++) {
        const element = this.bullets[index];
        if (element.Accuracy > bestAcc) {
          bestAcc = element.Accuracy;
        }
      }
      return bestAcc;
    },
    highestRecoil() {
      let bestRec = 0;
      for (let index = 0; index < this.bullets.length; index++) {
        const element = this.bullets[index];
        if (element.Recoil > bestRec) {
          bestRec = element.Recoil;
        }
      }
      return bestRec;
    },
  },
  methods: {
    bulletChangeLeft: function (bullet) {
      if (!bullet) {
        bullet = this.clearBullet();
      }
      this.bulletLeft = bullet;
    },
    bulletChangeRight: function (bullet) {
      if (!bullet) {
        bullet = this.clearBullet();
      }
      this.bulletRight = bullet;
    },
    clearBullet: function () {
      return {
        FleshDamage: 0,
        PenetrationPower: 0,
        ArmorDamage: 0,
        Accuracy: 0,
        Recoil: 0,
        FragmentationChance: 0,
        Armor1: 0,
        Armor2: 0,
        Armor3: 0,
        Armor4: 0,
        Armor5: 0,
        Armor6: 0,
      };
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
    line-height: 40px;
  }

  max-width: 720px;
  margin: 0 auto;
}

.bullet-selectors {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 15px;

  & > div {
    flex-basis: 49%;
  }

  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
}
</style>
