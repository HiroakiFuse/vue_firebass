<template>
  <div>
    <v-toolbar  dark tabs>
      <v-toolbar-title>Creative Avdulla System</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="signOut">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      <v-tabs
        slot="extension"
        v-model="tab"
        color="dark"
        align-with-title
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat v-if="tab === 0">
          <teacherform/>
        </v-card>
        <v-card flat v-if="tab === 1">
          <teacherreport/>
        </v-card>
          
      </v-tab-item>
    </v-tabs-items>
    <v-footer color="dark" dark app inset>
      <v-layout justify-center row wrap>
    <span class="white--text">&copy; 2018 - Fk6.co</span>
      </v-layout>
    </v-footer>
  </div>
  
</template>

<script>
import firebase,{ functions } from 'firebase'
import Teacherform from '@/components/Teacherform'
import Teacherreport from '@/components/Teacherreport'
export default {
  components: {Teacherform,Teacherreport},
  data () {
    return {
      tab: null,
      items: [
        '就職活動申請書', '受験報告書'
      ]
    }
  },
  methods: {
        signOut: function () {
          firebase.auth().signOut().then(() => {
            this.$router.push('/')
          })
        }
 }
}
</script>