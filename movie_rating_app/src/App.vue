<template>
  <v-app id="inspire">
    <v-app-bar color="indigo" dark fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Home</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          text
          id="add_movie_link"
          :to="{ name: 'AddMovie' }"
          v-if="currentUser"
          >Add Movie</v-btn
        >
        <v-btn text id="user_email" v-if="currentUser">{{
          currentUser.email
        }}</v-btn>
        <v-btn
          text
          id="register_btn"
          v-if="!currentUser"
          :to="{ name: 'Register' }"
          >Register</v-btn
        >
        <v-btn text id="login_btn" v-if="!currentUser" :to="{ name: 'Login' }"
          >Login</v-btn
        >
        <v-btn text id="logout_btn" v-if="currentUser" @click="logout"
          >Logout</v-btn
        >
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

    <v-main>
      <v-container fluid fixed>
        <div id="app">
          <router-view />
        </div>
      </v-container>
    </v-main>

    <v-footer color="indigo" app fixed>
      <span class="white--text">&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import './assets/stylesheets/main.css';
import axios from 'axios';
import bus from './bus';

export default {
  name: 'App',
  data: () => ({
    drawer: true,
    currentUser: null,
  }),
  props: {
    source: String,
  },
  mounted() {
    this.fetchUser();
    this.listenToEvents();
  },
  methods: {
    listenToEvents() {
      bus.$on('refreshUser', () => {

        this.fetchUser();
      });
    },
    async fetchUser() {
      return axios({
        method: 'get',
        url: '/api/currentUser',
      })
        .then((response) => {
          this.currentUser = response.data.currentUser;
        })
        .catch(() => {});
    },
    logout() {
      return axios({
        method: 'get',
        url: '/api/logout',
      })
        .then(() => {
          bus.$emit('refershUser');
          this.fetchUser();
        })
        .catch(() => {});
    },
  },
};
</script>
