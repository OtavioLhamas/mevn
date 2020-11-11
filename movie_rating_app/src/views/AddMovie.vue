<template>
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Movie Name"
      v-model="name"
      :rules="nameRules"
      required
    ></v-text-field>
    <v-textarea
      name="input-7-1"
      label="Movie Description"
      v-model="description"
      multi-line
    ></v-textarea>
    <v-select
      label="Movie Release Year"
      v-model="releaseYear"
      :items="years"
    ></v-select>
    <v-text-field label="Movie Genre" v-model="genre"></v-text-field>
    <v-btn @click="submit" :disabled="!valid"> submit </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddMovie',
  data: () => ({
    valid: true,
    name: '',
    description: '',
    genre: '',
    releaseYear: '',
    nameRules: [(v) => !!v || 'Movie name is required'],
    select: null,
    years: ['2018', '2017', '2016', '2015'],
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // Perform next action
        return axios({
          method: 'post',
          data: {
            name: this.name,
            description: this.description,
            releaseYear: this.releaseYear,
            genre: this.genre,
          },
          url: 'http://localhost:8081/movies',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(() => {
          this.$router.push({ name: 'Home' });
          this.$refs.form.reset();
        }).catch(() => {});
      }
      return true;
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
