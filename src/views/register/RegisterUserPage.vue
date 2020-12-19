<template>
  <div class="page">
    <h1 class="title">Register </h1>
     
    <div id="app">
      <form @submit.prevent="submitForm" class="register">
       <v-row>
       <v-col cols="12" sm="6" md="4">
          <v-text-field label="Legal first name*" v-model.trim="firstname" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
              <v-text-field label="Legal middle name" v-model.trim="middlename" hint="example of helper text only on focus"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required v-model.trim="lastname"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" v-model.trim="email" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" v-model.trim="password" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" v-model.trim="age" required></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                multiple
               v-model.trim="interests"></v-autocomplete>
            </v-col>
       </v-row>
        
       <v-btn  v-on:click="authenticate()" style="background:black;color:white" text @click="register = true">Register</v-btn>
      </form>
  </div>
  </div>
</template>

<script>
import ee from '@/event-emitter.js'
import store from '@/store.js'

export default {
 data() {
    return {
      
      form: {
        userID: this.userID,
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
      }
    }
  },
 
  methods: {
   authenticate() {
            let responseJson = {
            userID: this.userID,
            firstname: this.firstname,
            middlename: this.middlename,
            lastname: this.lastname,
            email: this.email,
            phone: this.phone,
        };

      localStorage.setItem('YourItem',JSON.stringify(responseJson))
   },
   get(){
      localStorage.getItem('YourItem')
    },
}
}
</script>

<style scooped>
.register .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    border-color: white;
}
.register .v-label{
  color:white !important;
  font-size:20px;
}
</style>
