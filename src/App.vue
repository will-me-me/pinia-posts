<template>
  <v-app
    id="inspire"
    style="background: linear-gradient(45deg, #b0bec5, #b0bec5, #b0bec5)"
  >
    <v-app-bar app color="#b0bec5" flat>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">Pinia Tutorial </span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <AllPosts />
    </v-main>
  </v-app>
</template>

<script>
import AllPosts from "./components/AllPosts";

export default {
  name: "App",

  components: {
    AllPosts,
  },

  data: () => ({
    //
  }),
};
</script>
