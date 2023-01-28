<template>
  <div class="share-button">
    <button @click="handleShareClick"><slot /></button>
    <div v-if="open">
      <div v-if="copied">Copied!</div>
      <div v-else class="share-box">
        <input disabled v-model="url" class="share-box__url" />
        <button class="share-box__button" @click="copyUrlToClipboard">
          Copy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url", "text"],
  data: function () {
    return {
      open: false,
      copied: false,
    };
  },
  methods: {
    copyUrlToClipboard: function () {
      navigator.clipboard.writeText(this.url).then(
        () => {
          this.copied = true;
        },
        (err) => {
          console.error("Failed to copy text: ", err);
        }
      );
      },
      handleShareClick: function () { 
          this.open = !this.open;
          if (this.open) {
              this.copied = false;
          }
      }
  },
};
</script>

<style scoped lang="scss">

.share-button {
    margin: 10px 0;
}

.share-box {
  display: flex;
  justify-content: center;
}

.share-box__url {
  background: #000;
  border-radius: 5px;
  max-width: 300px;
}

.share-box__button {
  border-radius: 5px;
  margin-left: 5px;
}

button {
    background-color: transparent;
    color: #fff;
    border-color: #fff;
    border-radius: 5px;
    padding: 8px;
    appearance: none;
    font-size: 18px;
}

input {
    color: #fff;
}

</style>
