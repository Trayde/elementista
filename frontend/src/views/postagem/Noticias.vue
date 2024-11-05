<template>
    <div class="post-form">
      <h2>Create a Post</h2>
      <form @submit.prevent="submitPost">
        <div class="form-group">
          <label for="title">Title</label>
          <input v-model="post.title" type="text" id="title" required />
        </div>
  
        <div class="form-group">
          <label for="content">Content</label>
          <textarea v-model="post.content" id="content" required></textarea>
        </div>
  
        <div class="form-group">
          <label for="image">Image</label>
          <input type="file" @change="onFileChange" />
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {
          title: '',
          content: '',
          image: null
        }
      };
    },
    methods: {
      submitPost() {
        // Aqui você pode fazer a chamada para a API ou manipular a postagem localmente
        console.log(this.post);
        this.$emit('postCreated', { ...this.post });
        this.clearForm();
      },
      onFileChange(e) {
        const file = e.target.files[0];
        if (file) {
          this.post.image = file;
        }
      },
      clearForm() {
        this.post.title = '';
        this.post.content = '';
        this.post.image = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .post-form {
    max-width: 600px;
    margin: auto;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  button {
    background-color: #42b983;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }
  </style>
  