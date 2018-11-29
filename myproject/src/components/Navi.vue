<template>
<div>
<v-navigation-drawer
    fixed
    dark
    v-model="drawer"
    app
  >
    <v-list subheader>
      <v-list-tile @click="home">
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="appForm">
        <v-list-tile-action>
         <v-icon>folder_open</v-icon>
        </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>就職活動申請書作成</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="reportForm">
        <v-list-tile-action>
         <v-icon>folder_open</v-icon>
        </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>受験報告書作成</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <v-list-tile @click="signOut">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Sign Out</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

  <v-toolbar color="dark" dark fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>Creative Avdulla System</v-toolbar-title>
  </v-toolbar>
  <v-footer color="dark" dark app inset>
    <span class="white--text">&copy; 2018</span>
  </v-footer>
</div>
  </template>
<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
<script>
import firebase,{ functions } from 'firebase'
import {config} from '../firebase/firebase_config'
  export default {
      data() {
          return {
              drawer: false
          }
      },
      methods: {
        signOut: function () {
          firebase.auth().signOut().then(() => {
            this.$router.push('/signin')
          })
        },
        home: function () {
          this.$router.push('/home')
          },
        appForm: function () {
          this.$router.push('/appform')
        },
        reportForm: function () {
          this.$router.push('/reportform')
        }
      }
  }
  </script>