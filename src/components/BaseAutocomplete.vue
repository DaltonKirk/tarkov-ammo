<template>
  <div class="autocomplete">
    <input
      ref="search"
      class="autocomplete-input"
      type="text"
      :placeholder="placeholder"
      v-model="searchTerm"
      @input="filter"
      @click="filter"
      @blur="blur"
    />

    <button class="clear-btn" v-if="searchTerm" @click="deselect(true)">
      <ClearIcon />
    </button>

    <ul class="autocomplete-dropdown">
      <li
        v-for="option in filteredOptions"
        :key="option.id"
        class="autocomplete-option"
        @click="selectOption(option)"
      >
        {{ option.Name }}
      </li>
    </ul>
  </div>
</template>

<script>
import ClearIcon from "./ClearIcon";
export default {
  components: {
    ClearIcon,
  },
  props: ["options", "placeholder", "initVal"],
  data: function () {
    return {
      searchTerm: this.initVal,
      filteredOptions: [],
      selectedText: "",
    };
  },
  methods: {
    filter: function () {
      if (!this.searchTerm) {
        this.filteredOptions = this.options;
      }
      if (this.options) {
        this.filteredOptions = this.options.filter(
          (e) =>
            e.Name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) != -1
        );
      }
    },
    selectOption: function (option) {
      this.searchTerm = option.Name;
      this.selectedText = option.Name;
      this.$emit("optionSelected", option);
    },
    deselect: function (clear) {
      this.$emit("optionDeselected");
      var that = this;
      setTimeout(function () {
        that.$refs.search.focus();
        if (clear) {
          that.searchTerm = "";
          that.selectedText = "";
          that.filter();
        }
      }, 100);
    },
    blur: function () {
      var that = this;
      setTimeout(function () {
        that.filteredOptions = [];
      }, 150);
    },
  }
};
</script>

<style scoped lang="scss">
.autocomplete {
  position: relative;
}

.autocomplete-input {
  background: transparent;
  border: none;
  border: lightgrey solid 1px;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  padding: 0;
  color: #fff;
  &::placeholder {
    color: #fff;
  }
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
  border-top: 0;
  color: #000;
}

.autocomplete-option {
  cursor: pointer;
  color: black;
  &:hover {
    background: lightgray;
  }
}

.clear-btn {
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 7px;
  background: transparent;
  border: none;
  svg {
    fill: rgba(182, 182, 182, 0.8);
  }
}
</style>
