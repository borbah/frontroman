<template>
  <div class="container is-fluid is-flex">
    <form class="box" @submit.prevent="createNote">
      <h1 class="title">Create a note</h1>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="My new note" v-model="title">
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
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Create',
  data() {
    return {
      title: '',
      description: '',
    };
  },
  methods: {
    createNote() {
      axios.post(
        'https://protected-fjord-22747.herokuapp.com/ideas/add',
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
