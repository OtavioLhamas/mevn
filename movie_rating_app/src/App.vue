<template>
  <v-app id="inspire">
    <v-app-bar color="indigo" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Home</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat :to="{ name: 'AddMovie' }">Add Movie</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <router-link :to="{ name: 'Home' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon> mdi-home </v-icon>
            </v-list-item-avatar>
            <v-list-item-title> Home </v-list-item-title>
          </v-list-item>
        </router-link>
        <router-link :to="{ name: 'Contact' }" class="side_bar_link">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon>mdi-card-account-details</v-icon>
            </v-list-item-avatar>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid fixed>
        <div id="app">
          <router-view />
        </div>
      </v-container>
    </v-content>

    <v-footer color="indigo" app fixed>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';

export default {
  name: 'App',
  data: () => ({
    drawer: true,
  }),
  props: {
    source: String,
  },
};
</script>
