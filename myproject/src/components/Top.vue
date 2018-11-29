<template>
  <body>
  <v-parallax v-bind:src="require('../assets/background.jpeg')" height="600">
    <v-layout  column
        align-center
        justify-center
        >
      <h1 class="font-weight-thin font-italic white--text" >
        Welcome to Avdulla System
      </h1>
      <div class="font-weight-thin mb-3 white--text">
      <h3>We, fk6.co welcome you.</h3>
      </div>
        <v-flex xs12 class="my-3">
        <v-btn large outline white lighten-2 class="mt-4 white--text" @click="signIn">Sign In</v-btn>
        <v-btn large outline white lighten-2 class="mt-4 white--text" @click="signUp">Sign Up</v-btn>
        </v-flex>
    </v-layout>
  </v-parallax>

  <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">シンプルな機能</h2>
              <span class="subheading">
                Avdullaでは、下記のような機能を搭載しています。
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
      <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">申請書<br/>作成機能</div>
                    </v-card-title>
                    <!--
                    <v-card-text>
                      hoge
                    </v-card-text>
                  -->
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">受験報告書作成機能</div>
                    </v-card-title>
                    <!--
                    <v-card-text>
                      hoge
                    </v-card-text>
                  -->
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">一覧表示<br/>機能</div>
                    </v-card-title>
                    <!--
                    <v-card-text>
                      hoge
                    </v-card-text>
                  -->
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
    </v-flex>
  </v-layout>

  <v-parallax v-bind:src="require('../assets/section.jpg')" height="600">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center"></div>
            <em></em>
          </v-layout>
        </v-parallax>

  <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>

                <!--
                <v-card-text>
                  hoge
                </v-card-text>
                -->

              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>

                <!--
                <v-card-text>
                  hoge
                </v-card-text>
                -->

                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>XXX-XXX-XXXX</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>北海道情報専門学校</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>atsuminn1114@gmail.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

  </body>
</template>
<script>
export default {
  methods: {
    signIn: function () {
      this.$router.push('/signin')
    },
    signUp: function () {
      this.$router.push('/signup')
    }
  }
}
</script>