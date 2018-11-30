<template>
    <v-parallax v-bind:src="require('../assets/background.jpeg')" height="800">
      <v-content>
        <v-container fluid pa-5 justify-end >
          <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="600px">
              <v-card>
                <v-card-title>
                  <h2>タスク</h2>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                            <v-if 
                             <h2>
                                Now State:{{this.editedItem.status}}
                              </h2>
                            <v-layout align-center justify-center column fill-height>

                              <v-flex xs12>
                              
                                <v-btn v-model="editedItem.status" label="status" required round color="success"
                                @click="editedItem.status='承認'">承認</v-btn>
                                <v-spacer></v-spacer>
                                <v-btn v-model="editedItem.status" label="status" required round color="error"
                                @click="editedItem.status='非承認'">非承認</v-btn>
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
            <v-data-table :headers="headers" :items="reports" search="未承認" :filter="filter" class="elevation-1">
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
                </td>
              </template>
              <v-alert slot="no-results" :value="true" color="error" icon="warning">
                Your search for "{{ search }}" found no results.
              </v-alert>
            </v-data-table>
          </flex>
        </v-container>
      </v-content>
    </v-parallax>

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
          text:'承認・非承認',value:'action'
        }
      ],
      reports:[],
      editedIndex: -1,
      editedItem: {
        status: '',
      },
      defaultItem: {
        status: '',

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
        "status": report.status,
      })
    },
    filter(val, search) {
      return val === search;
    }
  }
}
</script>