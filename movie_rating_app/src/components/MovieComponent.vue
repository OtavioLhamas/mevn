<template>
  <v-layout row wrap>
    <v-flex xs4>
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              {{ movie.name }}
            </div>
            <span class="grey--text">
              {{ movie.releaseYear }} ‧ {{ movie.genre }}
            </span>
          </div>
        </v-card-title>
        <h6 class="card-title" v-if="currentUser">Rate this movie</h6>
        <v-card-text>
          {{ movie.description }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Movie',
  data() {
    return {
      movie: [],
    };
  },
  mounted() {
    this.fetchMovie();
  },
  methods: {
    async fetchMovie() {
      const token = window.localStorage.getItem('auth');
      return axios({
        method: 'get',
        url: `/movies/${this.$route.params.id}`,
        headers: {
          Authorization: `JWT ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          this.movie = response.data.movie;
          this.currentUser = response.data.currentUser;
        })
        .catch(() => {});
    },
  },
};
</script>
