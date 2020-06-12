<template>
  <div class="autocomplete">
    <input
      ref="search"
      v-if="(!selected)"
      class="autocomplete-input"
      type="text"
      :placeholder="placeholder"
      v-model="searchTerm"
      @input="filter"
      @click="filter"
      @blur="blur"
    />

    <ul v-if="!selected" class="autocomplete-dropdown">
      <li
        v-for="option in filteredOptions"
        :key="option.id"
        class="autocomplete-option"
        @click="selectOption(option)"
      >{{ option.Name }}</li>
    </ul>
    <div v-if="selected" @click="deselect(false)" class="autocomplete-option selected">
      {{selectedText}}
      <div class="clear-btn" @click="deselect(true)">
        <img src="../assets/backspace-24px.svg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["options", "placeholder"],
  data: function() {
    return {
      searchTerm: "",
      filteredOptions: [],
      selected: false,
      selectedText: ""
    };
  },
  methods: {
    filter: function() {
      if (!this.searchTerm) {
        this.filteredOptions = this.options;
      }
      if (this.options) {
        this.filteredOptions = this.options.filter(
          e => e.Name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) != -1
        );
      }
    },
    selectOption: function(option) {
        console.log(option)
      this.searchTerm = option.Name;
      this.selected = true;
      this.selectedText = option.Name;
      this.$emit("optionSelected", option);
    },
    deselect: function(clear) {
      this.$emit("optionDeselected");
      this.selected = false;
      var that = this;
      setTimeout(function() {
        that.$refs.search.focus();
        if (clear) {
            that.searchTerm = '';
            that.selectedText = '';
            that.selected = false;
            that.filter()
        }
      }, 100);
    },
    blur: function() {
      var that = this;
      setTimeout(function() {
        that.filteredOptions = []
        if (!that.selected && that.selectedText) {
            that.selected = true;
        }
      }, 150);
    }
  }
};
</script>

<style scoped lang="scss">
.autocomplete {
  position: relative;
}

.autocomplete-input {
  border: none;
  border: lightgrey solid 1px;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding: 0;
  color: black;
}

.autocomplete-dropdown {
  margin: 0;
  padding: 0;
  list-style-type: none;
  z-index: 1000;
  position: absolute;
  max-height: 400px;
  overflow-y: auto;
  background: #fff;
  width: 100%;
  border: 1px solid #ccc;
  border-top: 0;
  color: #000;
}

.autocomplete-option {
  cursor: pointer;
  color: black;
}
.selected {
  display: flex;
  flex-direction: row;
  border: lightgrey solid 1px;
}

.clear-btn {
  position: absolute;
  right: 5px;
  top: 8px;
}
</style>
