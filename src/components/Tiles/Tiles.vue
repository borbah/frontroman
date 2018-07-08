<template>
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <div>
          <p class="title"><slot name="title" /></p>
          <p><slot name="description" /></p>
          </div>
          <div>
            <router-link :to="editRoute" class="button is-light">Edit</router-link>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  name: 'Tiles',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editRoute: `/edit/${this.id}`,
    };
  },
};
</script>
<style lang="scss" scoped>
  .box {
    display: flex;
  }
</style>
