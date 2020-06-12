<template>
  <div v-if="bullet" class="bullet-data-row" :class="comparisonClass">
    <div class="data-row-label">{{ displayName }}</div>
    <div>{{bullet[property]}}</div>
  </div>
</template>

<script>
export default {
  props: ["bullet", "bulletToCompare", "property", "displayName"],
  computed: {
    comparisonClass: function() {
      if (this.bullet && this.bulletToCompare) {
        var thisBulletProp = this.bullet[this.property];
        var compareBulletProp = this.bulletToCompare[this.property];

        if (!thisBulletProp) {
          thisBulletProp = 0;
        }

        if (!compareBulletProp) {
          compareBulletProp = 0;
        }

        if (thisBulletProp.toString().indexOf("x") != -1) {
          var numbers = thisBulletProp.split("x");
          thisBulletProp = numbers[0] * numbers[1];
        }

        if (compareBulletProp.toString().indexOf("x") != -1) {
          numbers = compareBulletProp.split("x");
          compareBulletProp = numbers[0] * numbers[1];
        }

        //recoil is better if it is lower so we swap values and use the same comparison
        if (this.property == "Recoil") {
          var temp = thisBulletProp;
          thisBulletProp = compareBulletProp;
          compareBulletProp = temp;
        }

        if (compareBulletProp == thisBulletProp) {
          return "";
        } else if (compareBulletProp > thisBulletProp) {
          return "worse";
        } else {
          return "better";
        }
      }
      return "";
    }
  }
};
</script>

<style>
div.worse {
  background-color: #e44a00;
  color: white;
}

div.better {
  background-color: #509050;
  color: white;
}
</style>