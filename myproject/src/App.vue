<template> 
  <v-app>
  <router-view/>
  <!--
<v-app>
  <v-navigation-drawer v-model="sidebar" app></v-navigation-drawer>
  <v-toolbar app></v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
-->
</v-app>
</template>
<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
<script>

import Appform from './components/Appform.vue'


export default {
  components: Appform
}

</script>
