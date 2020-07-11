<template>
  <div class="bullet-selector">
      <div>
        <BaseAutocomplete :options="bullets" placeholder="Search ammo types" @optionSelected="setBullet" />
                <!-- <autocomplete 
        :source="bullets"
        placeholder="Search ammo types"
        results-display="Name"
        results-property="Name"
        property-value="Name"
        @selected="setBullet">
        </autocomplete> -->
      </div>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="FleshDamage" display-name="Flesh Damage"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="PenetrationPower" display-name="Penetration Power"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="ArmorDamage" display-name="Armor Damage"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="Accuracy" display-name="Accuracy"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="Recoil" display-name="Recoil"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="FragmentationChance" display-name="Fragmentation Chance"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="Armor1" display-name="Armor 1"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="Armor2" display-name="Armor 2"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="Armor3" display-name="Armor 3"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="Armor4" display-name="Armor 4"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="Armor5" display-name="Armor 5"></BulletAttributeRow>
      <BulletAttributeRow :bullet="bullet" :bullet-to-compare="bulletToCompare" property="Armor6" display-name="Armor 6"></BulletAttributeRow>
  </div>
</template>

<script>
import BaseAutocomplete from "./BaseAutocomplete";
import BulletAttributeRow from "./BulletAttributeRow";
// import Autocomplete from "vuejs-auto-complete";
export default {
  components: {
    // Autocomplete,
    BaseAutocomplete,
    BulletAttributeRow
  },
  props: ["bullets", "bulletToCompare"],
  data: function () {
      return {
          bullet: null
      }
  },
  methods: {
      setBullet: function (bullet) {
          this.bullet = bullet;
          this.$emit('bulletChange', bullet)
      }
  }
};
</script>

<style lang="scss" scoped>

.bullet-selector {
    background: white;
    //margin: 1px;
}

.data-row-label {
    text-align:  left;
}
</style>