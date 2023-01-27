<template>
  <div class="bullet-selector">
    <BaseAutocomplete
      :options="bullets"
      placeholder="Select ammo"
      @optionSelected="setBullet"
      @optionDeselected="clear"
      :searchTerm="initVal"
    />
  </div>
</template>

<script>
import BaseAutocomplete from "./BaseAutocomplete";

export default {
  components: {
    BaseAutocomplete,
  },
  props: ["bullets", "bulletToCompare", "initVal"],
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
    },
  },
  watch: {
    bullets: function () {
      if (this.initVal) {
        const initBullet = this.bullets.filter(
          (e) => e.Name.toLowerCase().indexOf(this.initVal.toLowerCase()) != -1
        );
        if (initBullet[0]) {
          this.bullet = initBullet[0];
          this.$emit("bulletChange", this.bullet);
        }
      }
    }
  }
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