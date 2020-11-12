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
      required
      :rules="releaseRules"
      :items="years"
    ></v-select>
    <v-text-field
      label="Movie Genre"
      v-model="genre"
      required
      :rules="genreRules"
    ></v-text-field>
    <v-btn @click="submit" :disabled="!valid"> submit </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'AddMovie',
  data: () => ({
    valid: true,
    name: '',
    description: '',
    genre: '',
    releaseYear: '',
    nameRules: [(v) => !!v || 'Movie name is required'],
    genreRules: [
      (v) => !!v || 'Movie genre is required',
      (v) => (v && v.length <= 80) || 'Genre must be less than or equal to 80 characters.',
    ],
    releaseRules: [(v) => !!v || 'Movie release year is required'],
    select: null,
    years: ['2018', '2017', '2016', '2015'],
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const movie = {
          name: this.name,
          description: this.description,
          releaseYear: this.releaseYear,
          genre: this.genre,
        };
        this.$store.dispatch('addMovie', movie);
        this.$refs.form.reset();
        this.$router.push({ name: 'Home' });
      }
      return true;
    },
    clear() {
      this.$refs.form.reset();
    },
  },
};
</script>
