<template>
  <v-app id="inspire">
    <v-app-bar color="indigo" dark app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Home</v-toolbar-title>
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
      <v-container fluid>
        <div id="app">
          <router-view />
        </div>
      </v-container>
    </v-content>
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
