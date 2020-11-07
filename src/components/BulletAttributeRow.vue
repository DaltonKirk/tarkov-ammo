<template>
  <div v-if="bullet && bulletToCompare" class="bullet-data-row" :class="comparisonClass">
    <div>{{ bullet[this.property] ? bullet[this.property] : 0 }}</div>
    <div>{{ displayName }}</div>
    <div>{{ bulletToCompare[this.property] ? bulletToCompare[this.property] : 0 }}</div>
  </div>
</template>

<script>
export default {
  props: ["bullet", "bulletToCompare", "property", "displayName"],
  computed: {
    comparisonClass: function () {
      if (this.bullet && this.bulletToCompare) {
        var thisBulletProp = this.bullet[this.property] ? this.bullet[this.property] : 0;
        var compareBulletProp = this.bulletToCompare[this.property] ? this.bulletToCompare[this.property] : 0;

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
    },
    comparisonClassRight: function () {
      var otherClass = this.comparisonClass;
      if (otherClass == '') {
        return '';
      }
        else if (otherClass == 'better') {
          return 'worse';
        } else {
          return 'better';
        }
      }
    },
};
</script>

<style lang="scss" scoped>
.bullet-data-row {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  background: #786546;
  div {
    overflow: hidden;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
}

.worse {
  background: linear-gradient(90deg, rgba(255,70,41,0.5) 0%, rgba(145,255,145,0.5) 100%);
}

.better {
  background: linear-gradient(90deg, rgba(145,255,145,0.5) 0%, rgba(255,70,41,0.5) 100%);
}
</style>