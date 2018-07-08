<template>
  <div class="container is-fluid is-flex">
    <form class="box" @submit.prevent="editNote">
      <h1 class="title">Edit note</h1>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" v-model="title">
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
            <textarea class="description input" v-model="description">
            </textarea>
        </div>
      </div>

      <button class="button is-primary" type="submit">Submit</button>
      <button class="button is-danger" @click="deleteNote">Delete</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Edit',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  created() {
    this.fetchNote();
  },
  methods: {
    editNote() {
      axios.put(
        `https://protected-fjord-22747.herokuapp.com/ideas/${this.$route.params.id}`,
        {
          title: this.title,
          details: this.description,
        },
      )
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => console.log(error));
    },
    deleteNote() {
      axios.delete(`https://protected-fjord-22747.herokuapp.com/ideas/${this.$route.params.id}`)
        .then(() => {
          this.$router.push('/');
        })
        .catch(error => console.log(error));
    },
    fetchNote() {
      axios.get(`https://protected-fjord-22747.herokuapp.com/ideas/${this.$route.params.id}`)
        .then(({ data: { idea } }) => {
          this.title = idea.title;
          this.description = idea.details;
        })
        .catch(error => console.log(error));
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  padding-top: 50px;
  justify-content: center;
}

.box {
  width: 80%;
}

.button {
  margin-top: 20px;
}

.description {
  min-height: 20vh;
}
</style>
