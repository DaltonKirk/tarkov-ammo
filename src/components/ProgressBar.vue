<template>
  <div class="progress-bar">
      <div class="bar-fill" style="width:0" :style="calcWidth"></div>
  </div>
</template>

<script>
export default {
    props: ['total','value'],
    data: () => {
        return {
            calcWidth: ''
        }
    },
    watch: {
        value: function() {
            this.calcWidth = 'width:' + this.value / this.total * 100 + '%';
        }
    }
}
</script>

<style lang="scss" scoped>
    .progress-bar {
        height: 40px;
        border: 1px solid yellow;
    }
    .bar-fill {
        background: grey;
        height: 40px;
    }
</style>