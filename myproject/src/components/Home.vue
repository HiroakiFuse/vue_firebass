<template>
<div class="aa">
<navi/>
<v-parallax v-bind:src="require('../assets/background.jpeg')" height="750">
    <v-layout  column
        align-center
        justify-center
        >
      <h1 class="font-weight-thin font-italic white--text" >
        Welcome to Avdulla System
      </h1>
      <div class="font-weight-thin mb-3 white--text">
      <h3>This page is Create Screen</h3>
      </div>
        <v-flex xs12 class="my-3">
        <v-btn large outline white lighten-2 class="mt-4 white--text" @click="appForm">就職活動申請書作成</v-btn>
        <v-btn large outline white lighten-2 class="mt-4 white--text" @click="reportForm">受験報告書作成</v-btn>
        </v-flex>
    </v-layout>
  </v-parallax>
</div>
</template>

<script>
import Navi from '@/components/Navi'
export default {
  name: 'Home',
  components: {Navi},
  data () {
    return { 
    }              
  },
  methods: {
    appForm: function () {
          this.$router.push('/appform')
    },
    reportForm: function () {
      this.$router.push('/reportform')
    }
  }
}
</script>
<style scoped>
.aa {
  background-image: url('../assets/background.jpeg') ;
}
</style>