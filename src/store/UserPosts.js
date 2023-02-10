import { defineStore } from "pinia";
//import axios
import axios from "axios";

export const useUserPosts = defineStore("userPosts", {
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = res.data;
        // console.log(this.posts);
      } catch (error) {
        console.log(error);
      }
    },

    async addPost(post) {
      this.posts.unshift({
        id: this.posts.length + 1,
        title: post.title,
        body: post.body,
      });
    },

    // delete post
    async deletePost(id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    async filterPosts(limit) {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      this.posts = res.data;
    },
  },

  getters: {
    getAllPosts() {
      return this.posts;
    },
  },
});
