<template>
  <v-app id="inspire">
    <v-parallax v-bind:src="require('../assets/background.jpeg')" height="610">
      <v-content>
        <v-container fluid pa-5 justify-end >
          <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="600px">
              <v-card>
                <v-card-title>
                  <span class="headline">報告書編集</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                    <v-flex xs12>
                      <v-text-field v-model="editedItem.studentid" label="studentid" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="editedItem.company" label="company" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="editedItem.way" label="way" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-menu :close-on-content-click="false"
                      offset-x
                      lazy transition="scale-transition" full-width min-width="290px">
                        <v-text-field slot="activator" v-model="editedItem.date" label="date" prepend-icon="event" readonly>
                        </v-text-field>
                        <v-date-picker v-model="editedItem.date"></v-date-picker>
                      </v-menu>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="editedItem.place" label="place" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="editedItem.exam" label="exam" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="editedItem.result" label="result" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field v-model="editedItem.aptitude" label="optitude" required></v-text-field>
                    </v-flex>
                     <v-flex xs12>
                      <v-text-field v-model="editedItem.overview" label="overview" required></v-text-field>
                    </v-flex>
                       <v-flex xs12>
                      <v-text-field v-model="editedItem.status" label="status" required></v-text-field>
                    </v-flex>
                  </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="dialog = false">閉じる</v-btn>
                  <v-btn color="blue darken-1" flat @click="saveEdit(editedItem);dialog = false">保存</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
          <v-flex xs12 offset-xs7>
            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
          </v-flex>
          <br/>
          <flex>
            <v-data-table :headers="headers" :items="reports" :search="search" class="elevation-1">
              <template slot="items" slot-scope="props">
                <td class="text-xs-left">{{props.item.studentid}}</td>
                <td class="text-xs-left">{{props.item.company}}</td>
                <td class="text-xs-left">{{props.item.way}}</td>
                <td class="text-xs-left">{{props.item.date}}</td>
                <td class="text-xs-left">{{props.item.place}}</td>
                <td class="text-xs-left">{{props.item.exam}}</td>
                <td class="text-xs-left">{{props.item.result}}</td>
                <td class="text-xs-left">{{props.item.optitude}}</td>
                <td class="text-xs-left">{{props.item.overview}}</td>
                <td class="text-xs-left">{{props.item.content}}</td>
                <td class="text-xs-left">{{props.item.status}}</td>
                <td class="justify-center layout px-0">
                  <v-icon small class="mr-2" @click="editItem(props.item)">
                    edit
                  </v-icon>
                  <v-icon small @click="removeReport(props.item)">
                    delete
                  </v-icon>
                </td>
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </v-data-table>
          </flex>
        </v-container>
        <!-- <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/> -->
      </v-content>
    </v-parallax>
  </v-app>
</template>

<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
<script>
import firebase from 'firebase'
import {config} from '../firebase/firebase_config'
import Navi from '@/components/Navi'/*
export const config = {
  apiKey: "AIzaSyB8ZVjhyO5CvSpO4Iu6n0MmmsO_uOLPyPs",
  authDomain: "fk6-co.firebaseapp.com",
  databaseURL: "https://fk6-co.firebaseio.com",
  projectId: "fk6-co",
  storageBucket: "fk6-co.appspot.com",
  messagingSenderId: "810812087591"
}
*/
// var app = firebase.initializeApp(config)
var db = firebase.database();
var reportsRef = db.ref('report2');
export default {
  name: 'Appform',
  firebase: {
    reports: reportsRef
  },
  components: {Navi},
  data () {
    return {
      dialog: false,
      drawer: false,
      search: '',
      headers: [
        {
          text:'学籍番号',value:'studentid'
        },
        {
          text:'会社名',value:'company' 
        },
        {
          text:'形態',value:'way' 
        },
        {
          text:'日付',value:'date' 
        },
        {
          text:'場所',value:'place' 
        },
        {
          text:'試験内容',value:'exam'
        },
        {
          text:'結果',value:'result:' 
        },
        {
          text:'適性',value:'aptitude' 
        },
        {
          text:'概要',value:'overview' 
        },
        {
          text:'内容',value:'content'
        },
         {
          text:'状況',value:'status'
        },
        {
          text:'Action ',value:'action'
        }
      ],
      reports:[],
      editedIndex: -1,
      editedItem: {
        studentid: '',
        company: '',
        way: '',
        date: '',
        place: '',
        exam: '',
        result: '',
        aptitude: '',
        overview: '',
        status: '',
        content: ''
      },
      defaultItem: {
        studentid: '',
        company: '',
        way: '',
        date: '',
        place: '',
        exam: '',
        result: '',
        aptitude: '',
        overview: '',
        status: '',
        content:''
      },
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        }
      },
      watch: {
        dialog (val) {
          val || this.close()
        }
      },
    }
  },
  methods: {
    removeReport: function(report){
      reportsRef.child(report['.key']).remove()
    },
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    },
    editItem: function(report){
      this.editedItem = Object.assign({}, report)
      this.dialog = true
    },
    saveEdit: function(report){
      reportsRef.child(report['.key']).update({
        "studentid": report.studentid,
        "company": report.company,
        "way": report.way,
        "date": report.date,
        "place": report.place,
        "exam": report.exam,
        "result": report.result,
        "optitude": report.optitude,
        "overview": report.overview,
        "status": report.status,
        "content": report.content
      })
    }
  }
}
</script>