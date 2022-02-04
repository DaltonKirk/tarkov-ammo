<template>
  <div class="stat-row">
    <div class="left-side" :class="barFillClass(true)">
      <div
        class="bar-fill"
        :style="{ width: getPercent(leftValue, true) + '%' }"
      ></div>
      <div class="bar-value">{{ leftValue }}</div>
    </div>
    <div class="right-side">
      <div
        class="bar-fill"
        :class="barFillClass(false)"
        :style="{ width: getPercent(rightValue, false) + '%' }"
      ></div>
      <div class="bar-value">{{ rightValue }}</div>
    </div>
    <div class="stat-row__label">
      <div class="">{{ label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "left-value", "right-value", "max-value"],
  computed: {
    cleanedLeftValue() {
      let leftVal = this.leftValue;
      if (this.leftValue.toString().indexOf("x") != -1) {
        const numbers = this.leftValue.split("x");
        leftVal = numbers[0] * numbers[1];
      }
      return leftVal;
    },
    cleanedRightValue() {
      let rightVal = this.rightValue;

      if (this.rightValue.toString().indexOf("x") != -1) {
        const numbers = this.rightValue.split("x");
        rightVal = numbers[0] * numbers[1];
      }
      return rightVal;
    },
    betterSide() {
      if (this.label == "Recoil") {
        if (this.cleanedLeftValue < this.cleanedRightValue) {
          return "left";
        } else if (this.cleanedLeftValue === this.cleanedRightValue) {
          return "none";
        } else {
          return "right";
        }
      }

      if (this.cleanedLeftValue > this.cleanedRightValue) {
        return "left";
      } else if (this.cleanedLeftValue === this.cleanedRightValue) {
        return "none";
      } else {
        return "right";
      }
    },
  },
  methods: {
    barFillClass(left) {
      if (left && this.betterSide === "left") {
        return "better";
      } else if (left && this.betterSide === "right") {
        return "worse";
      } else if (!left && this.betterSide === "left") {
        return "worse";
      } else if (!left && this.betterSide === "right") {
        return "better";
      } else {
        return "";
      }
    },
    getPercent(value, left) {
      if (!left) {
        return (this.cleanedRightValue / this.maxValue) * 100;
      }
      if (left) {
        return 100 - (this.cleanedLeftValue / this.maxValue) * 100;
      }
    },
  },
};
</script>

<style scoped lang="scss">
$green: rgba(145, 255, 145, 0.5);
$red: rgba(255, 70, 41, 0.5);

.stat-row {
  background-color: rgb(0, 0, 0);
  display: flex;
  height: 10px;
  width: 100%;
  position: relative;
}

.left-side,
.right-side {
  display: flex;
  flex-basis: 50%;
  height: 100%;
  position: relative;
  width: 100%;
}

.left-side {
  &.better {
    background-color: $green;
  }

  &.worse {
    background-color: $red;
  }

  .bar-fill {
    background-color: rgb(0, 0, 0);
  }
}

.right-side {
  .bar-value {
    position: absolute;
    right: 5px;
    left: unset;
    top: 0;
  }
}

.bar-value {
  position: absolute;
  left: 5px;
  top: 0;
}

.bar-fill {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: width 1s;

  &.better {
    background-color: $green;
  }

  &.worse {
    background-color: $red;
  }
}

.stat-row__label {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
