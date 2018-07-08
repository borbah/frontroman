<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else class="container is-fluid">
      <div class="tile is-ancestor">
        <Tiles v-for="idea in ideas" :key="idea._id" :id="idea._id">
          <template slot="title">{{ idea.title }}</template>
          <template slot="description">{{ idea.details }}</template>
        </Tiles>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Tiles from '@/components/Tiles/Tiles.vue';

export default {
  name: 'HomeView',
  components: {
    Tiles,
  },
  data() {
    return {
      ideas: [],
      loading: false,
    };
  },
  created() {
    this.fetchNotes();
  },
  methods: {
    fetchNotes() {
      this.loading = true;
      axios.get('https://protected-fjord-22747.herokuapp.com/ideas')
        .then(({ data: { ideas } }) => {
          this.ideas = ideas;
          this.loading = false;
        })
        .catch(error => console.log(error));
    },
  },
};
</script>
<style lang="scss" scoped>

.container {
  padding-top: 50px;
}

</style>
