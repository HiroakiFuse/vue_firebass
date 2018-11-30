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
      :rules="[rules.min]"
      label="Password"
      :append-icon="show ? 'visibility_off' : 'visibility'"
      :type="show ? 'text' : 'password'"
      @click:append="show = !show"
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      @click="signUp"
    >
      signup
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
    <p>You have a account?<br> 
      <router-link to="/signin">sign in now!!</router-link>
    </p>

  </v-form>
  </v-layout>
  </v-container>
  </v-app>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
  data () {
    return {
      show: false,
      email: '',
      password: '',
      rules: {
        min: v => v.length >= 8 || 'Min 8 characters'
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert('Create account: ', user.email)
          this.$router.push('/signin')
        })
        .catch(error => {
          alert(error.message)
        })
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
