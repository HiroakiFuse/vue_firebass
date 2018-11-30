<template>
  <v-app>
  <v-container fluid ma-0 pa-0 fill-height>
    <v-layout class="text-xs-center" align-center justify-center>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h2>fk6.co</h2>
    <img src="../assets/logo.png">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      :append-icon="show ? 'visibility_off' : 'visibility'"
      :type="show ? 'text' : 'password'"
      @click:append="show = !show"
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      @click="signIn"
    >
      signin
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
    <p>You don't have an account?<br> 
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </v-form>
</v-layout>
</v-container>
</v-app>
</template>


<!--
<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
    <p>You don't have an account? 
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>
-->
<script>
import firebase from 'firebase'
var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@hcs.ac.jp$/;
export default {
  name: 'Signin',
  data () {
    return {
      show: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }
  },
  
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        user => {
          if(regexp.test(this.email)){
            alert('Success!')
            this.$router.push('/teacher')
          }
          else{
          alert('Success!')
          this.$router.push('/appform')
          console.log(this.email)
          }
        },
        err => {
          alert(err.message)
        }
      )
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
-->