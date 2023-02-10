<template>
  <v-row justify="center">
    <v-dialog v-model="addPostDialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark class="mb-2" v-on="on"> Add Post </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="title"
                  label="Title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea v-model="body" label="Body" required></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="addPostDialog = false">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="AddNewPost(post)">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { useUserPosts } from "@/store/UserPosts";
// import { onMounted, ref } from "vue";

export default {
  data: () => ({
    addPostDialog: false,
    title: "",
    body: "",
    post: {
      title: "",
      body: "",
    },
  }),
  methods: {
    AddNewPost(post) {
      const store = useUserPosts();
      post.title = this.title;
      post.body = this.body;
      store.addPost(post);
      this.title = "";
      this.body = "";
      this.addPostDialog = false;
    },
  },
};
</script>

<style></style>
