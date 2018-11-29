<template>
  <v-flex>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" block large dark >作成</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Create Report</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="newReport.studentid" label="学籍番号" :rules="[required]"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="newReport.company" label="会社名" :rules="defautRules"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="newReport.place" label="場所" :rules="defautRules"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-menu :close-on-content-click="false" offset-x lazy transition="scale-transition" full-width min-width="290px">
                  <v-text-field slot="activator" v-model="newReport.startdate" label="開始日" :rules="defautRules" prepend-icon="event" readonly>
                  </v-text-field>
                  <v-date-picker v-model="newReport.startdate"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12>
                <v-menu :close-on-content-click="false" offset-x lazy transition="scale-transition" full-width min-width="290px">
                  <v-text-field slot="activator" v-model="newReport.enddate" label="終了日" :rules="defautRules" prepend-icon="event" readonly>
                  </v-text-field>
                  <v-date-picker v-model="newReport.enddate"></v-date-picker>
                </v-menu>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="newReport.content" label="内容" :rules="defautRules"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="addReport($event); dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-flex>
</template>


<script>
import firebase from 'firebase'
import {config} from '../firebase/firebase_config'

var db = firebase.database();
var reportsRef = db.ref('report');

export default {
  name: 'dialogForm',
  firebase: {
    reports: reportsRef
  },
  data () {
    return {
      newReport: {
        studentid: '',
        company: '',
        place: '',
        startdate: '',
        enddate: '',
        content: '',
        status: '未承認',
        modal: false
      },
      dialog: false,
      defaultRules: [
        v => !!v || 'required',
      ],
    }
  },
  methods: {
    addReport: function() {
      reportsRef.push(this.newReport);
      this.newReport.studentid = '';
      this.newReport.company = '';
      this.newReport.place = '';
      this.newReport.startdate = '';
      this.newReport.enddate = '';
      this.newReport.content = '';
    },

  }
}
</script>