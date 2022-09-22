<template>
  <div class="bullet-selector">
    <BaseAutocomplete
      :options="bullets"
      placeholder="Select ammo"
      @optionSelected="setBullet"
      @optionDeselected="clear"
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
    clear: function () {
      this.bullet = undefined;
      this.$emit("bulletChange", undefined);
    }
  },
};
</script>

<style lang="scss" scoped>
.data-row-label {
  text-align: left;
}

.bullet-selector {
  &:first-of-type {
    margin-bottom: 10px;
  }
}
</style>