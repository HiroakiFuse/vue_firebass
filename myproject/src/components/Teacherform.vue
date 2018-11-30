<template>
      <v-parallax v-bind:src="require('../assets/background.jpeg')" height="800">
      <v-content>
        <v-container fluid ma-0 pa-0>
          <v-flex xs12 offset-xs7>
            <v-text-field v-model="search" append-icon="search" label="Search"  hide-details></v-text-field>
            </v-flex>
            <br/>
          <v-layout justify-center align-center>
              <v-card>
                  <v-layout row justify-center>
                    <v-dialog v-model="dialog" persistent max-width="600px">
                      <v-card>
                        <v-card-title>
                          <span class="headline">Edit Report</span>
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
                          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                          <v-btn color="blue darken-1" flat @click="saveEdit(editedItem);dialog = false">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-layout>
                
                <v-data-table :headers="headers" :items="reports" search="未承認" :filter="filter" class="elevation-1">
                  <template slot="items" slot-scope="props">
                    <td class="text-xs-left">{{props.item.studentid}}</td>
                    <td class="text-xs-left">{{props.item.company}}</td>
                    <td class="text-xs-left">{{props.item.place}}</td>
                    <td class="text-xs-left">{{props.item.startdate}}</td>
                    <td class="text-xs-left">{{props.item.enddate}}</td>
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
              </v-card>
          </v-layout>
        </v-container>
      </v-content>
      <v-footer color="dark" dark app inset>
        <span class="white--text">&copy; 2018</span>
      </v-footer>
      </v-parallax>
</template>

<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
<script>
import firebase from 'firebase'
import {config} from '../firebase/firebase_config'
/*
export const config = {
  apiKey: "AIzaSyB8ZVjhyO5CvSpO4Iu6n0MmmsO_uOLPyPs",
  authDomain: "fk6-co.firebaseapp.com",
  databaseURL: "https://fk6-co.firebaseio.com",
  projectId: "fk6-co",
  storageBucket: "fk6-co.appspot.com",
  messagingSenderId: "810812087591"
}
*/
var db = firebase.database();
var reportsRef = db.ref('report');
export default {
  name: 'Appform',
  firebase: {
    reports: reportsRef
  },
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
          text:'場所',value:'place' 
        },
        {
          text:'開始日',value:'startdate' 
        },
        {
          text:'終了日',value:'enddate' 
        },
        {
          text:'内容',value:'content' 
        },
        {
          text:'状況',value:'status' 
        },
        {
          text:'承認・非承認',value:'action',sortable: false
        },
      ],
      reports:[],
      editedIndex: -1,
      editedItem: {
        status: ''
      },
      defaultItem: {
        status: ''
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
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/Top')
      })
    },
    editItem: function(report){
      this.editedItem = Object.assign({}, report)
      this.dialog = true
    },
    saveEdit: function(report){
      reportsRef.child(report['.key']).update({
        "status": report.status
      })
    },
    filter(val, search) {
      return val === search;
    },
    appForm: function () {
      this.$router.push('/appform')
    },
    reportForm: function () {
      this.$router.push('/teacherform')
    },
  }
}
</script>