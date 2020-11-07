<template>
  <div class="bullet-selector">
    <BaseAutocomplete
      :options="bullets"
      placeholder="Search ammo types"
      @optionSelected="setBullet"
    />
  </div>
</template>

<script>
import BaseAutocomplete from "./BaseAutocomplete";

export default {
  components: {
    BaseAutocomplete,
  },
  props: ["bullets", "bulletToCompare"],
  data: function () {
    return {
      bullet: null,
    };
  },
  methods: {
    setBullet: function (bullet) {
      this.bullet = bullet;
      this.$emit("bulletChange", bullet);
    },
  },
};
</script>

<style lang="scss" scoped>
.data-row-label {
  text-align: left;
}
</style>