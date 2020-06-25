<template>
  <div class="grid bullet-comparer">
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
</template>

<script>
// @ is an alias to /src
import BulletSelector from '@/components/BulletSelector.vue'
import bulletData from '@/data/bullet.js'

export default {
  name: 'CompareAmmo',
  components: {
    BulletSelector
  },
  data: function() {
    return {
      bulletLeft: null,
      bulletRight: null,
      bullets: []
    }
  },
  methods: {
    bulletChangeLeft: function(bullet) {
      this.bulletLeft = bullet;
    },
    bulletChangeRight: function(bullet) {
      this.bulletRight = bullet;
    }
  },
  mounted: function() {
    this.bullets = bulletData().bullets;
  }
}
</script>

<style lang="scss" scoped>
.bullet-comparer {
  max-width: 720px;
  margin: 0 auto;
}
</style>
