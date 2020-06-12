<template>
    <div v-if="bullet" class="bullet-data-row" :class="comparisonClass"><div class="data-row-label">{{ displayName }}</div><div>{{bullet[property]}}</div></div>
</template>

<script>
export default {
    props: ["bullet", "bulletToCompare", "property", "displayName"],
    computed: {
        comparisonClass: function () {
            if (this.bullet && this.bulletToCompare) {

                if (this.bulletToCompare[this.property] == this.bullet[this.property]) {
                    return ''
            }
            else if (this.bulletToCompare[this.property] > this.bullet[this.property]) {
                return 'worse'
            }
            else {
                return 'better'
            }
            }
            return '';
        }
    }
}
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