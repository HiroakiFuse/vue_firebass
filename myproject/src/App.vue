<template> 
  <v-app>
  <router-view/>
</v-app>
</template>
<script src="https://www.gstatic.com/firebasejs/5.5.8/firebase.js"></script>
<script>

import Appform from './components/Appform.vue'


export default {
  components: Appform
}

</script>
