<template>
  <v-container class="mt-6">
    <div style="display: flex">
      <v-select
        prepend-inner-icon="mdi-filter-variant"
        :items="items"
        @change="store.filterPosts"
        outlined
        label="Filter Posts"
      >
      </v-select>
      <AddPost />
    </div>
    <v-divider></v-divider>

    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="post in getPost" :key="post.id">
        <v-card outlined flat hover color="#00bfa5" height="350">
          <v-card-title class="headline">{{ post.title }}</v-card-title>

          <v-card-text class="text-justify">{{ post.body }} </v-card-text>
          <v-spacer></v-spacer>
          <v-divider></v-divider>
          <v-card-actions class="d-flex justify-center">
            <v-icon large color="" @click="deletePost(post.id)">
              mdi-delete
            </v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import AddPost from "@/components/AddPost.vue";
import { useUserPosts } from "@/store/UserPosts";

import { computed, onMounted, ref } from "vue";

const store = useUserPosts();
const loading = ref(true);

//made by getters
const getPost = computed(() => {
  return store.getAllPosts;
});

//delete post
const deletePost = (id) => {
  store.deletePost(id);
};

onMounted(async () => {
  await store.fetchPosts();
  loading.value = false;
});

//select option
const items = [
  { text: "2", value: "2" },
  { text: "5", value: "5" },
  { text: "10", value: "10" },
  { text: "20", value: "20" },
  { text: "40", value: "40" },
  { text: "60", value: "60" },
  { text: "100", value: "100" },
];

//register component
// const components = {
//   AddPost,
// };

// export default {
//   setup() {
//     const store = useUserPosts();
//     const loading = ref(true);

//     onMounted(async () => {
//       await store.fetchPosts();
//       loading.value = false;
//     });

//     return { store, loading };
//   },
// };
</script>

<style>
.post {
  background: #00bfa5;
}
.v-card {
  border-radius: 10px;
  margin: 10px;
  transition: 0.3s;
}

.read {
  background-color: #00bfa5;
  color: white;
}

.v-card-text {
  height: 100px;
  overflow: hidden;
}

.v-card-title {
  height: 50px;
  overflow: hidden;
}
</style>
