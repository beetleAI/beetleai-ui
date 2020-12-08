<template>
   <div class="page">
   <h2 class="title">Beetle AI SiteMap</h2>
   <v-spacer style="margin-bottom:3%">
      <router-link to="/" class="sitemap_home">
         <v-btn class="black white--text" v-on="on">Home</v-btn>
      </router-link>
   </v-spacer>
   <div>
      <div class="row">
         <div class="sitemap_header col-sm-3" >
            <h3>SOLUTIONS</h3>
            <ul class="sitemap">
               <li>
                  <router-link to="/businessIntelligence">
                     <v-text >Business Intelligence</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/ApplicationManagement">
                     <v-text  v-on="on">Application Management</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/InfrastrutureManagement">
                     <v-text  v-on="on">Infrastruture Management</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/DigitalExperience">
                     <v-text  v-on="on">Digital Experience</v-text>
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="sitemap_header col-sm-3" >
            <h3>SERVICES</h3>
            <ul class="sitemap">
               <li>
                  <router-link to="/applicationService">
                     <v-text  v-on="on">Application Services</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Managed Cloud</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Managed Hosting</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Professional Service</v-text>
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="sitemap_header col-sm-3" >
            <h3>PLATFORMS</h3>
            <ul class="sitemap">
               <li>
                  <router-link to="/Aws">
                     <v-text  v-on="on">Amazon Web Services</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/ApplicationManagement">
                     <v-text  v-on="on">Google Cloud Computing</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/InfrastrutureManagement">
                     <v-text  v-on="on">Infrastruture Management</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/DigitalExperience">
                     <v-text  v-on="on">Kubernetes Platforms</v-text>
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="sitemap_header col-sm-3" >
            <h3>RESOURCES</h3>
            <ul class="sitemap">
               <li>
                  <router-link to="/businessIntelligence">
                     <v-text >Resource Center</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/ApplicationManagement">
                     <v-text  v-on="on">Customer Stories</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/InfrastrutureManagement">
                     <v-text  v-on="on">Events</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/DigitalExperience">
                     <v-text  v-on="on">Technical Blog</v-text>
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
      <div class="row">
         <div class="sitemap_header col-sm-3" >
            <h3>Trainings</h3>
            <ul class="sitemap">
               <li>
                  <router-link to="/">
                     <v-text >DevOps</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Programming Languages</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">AWS Cloud practice</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">MS Azure Cloud practice</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">GCP cloud practice</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Data Science</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Machine Learning</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Internet Of Things</v-text>
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="sitemap_header col-sm-3" >
            <h3>PARTNERS</h3>
            <ul class="sitemap">
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Resource Center</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Customer Stories</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Events</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Technical Blog</v-text>
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="sitemap_header col-sm-3" >
            <h3>ABOUT</h3>
            <ul class="sitemap">
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Resource Center</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Customer Stories</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Events</v-text>
                  </router-link>
               </li>
               <li>
                  <router-link to="/">
                     <v-text  v-on="on">Technical Blog</v-text>
                  </router-link>
               </li>
            </ul>
         </div>
         <div class="sitemap_header col-sm-3" >
            <ul class="sitemap">
               <li>
                  <router-link to="/components/RegisterUser">
                     <h3>REGISTER</h3>
                  </router-link>
               </li>
               <li>
                  <router-link to="./components/Login">
                     <h3>LOGIN</h3>
                  </router-link>
               </li>
            </ul>
         </div>
      </div>
   </div>
   <div class="tweets" v-if="users && users.length">
   <div class="tweet tweet--user u-hover" v-for="(user, index) of users" v-bind:key="index">
      <router-link v-bind:to="{
         name: 'userTweets',
         params: { userId: user.userId }
         }">
         <div class="tweet_avatar" v-if="user.userColor" v-bind:style="{backgroundColor: user.userColor}" />
            <div class="tweet_name" v-text="user.userName" />
      </router-link>
      </div>
      </div>
   </div>
</template>
<script>
   import ee from '@/event-emitter.js'
   import store from '@/store.js'
   
   export default {
     name: 'users',
     data: () => ({
       users: []
     }),
     methods: {
       getUsers () {
         this.users = store.getUsers()
       }
     },
     created () {
       ee.on('api-fetch', this.getUsers)
   
       if (!store.state.fetched) {
         store.fetch()
       } else {
         this.getUsers()
       }
     }
   }
</script>
<style>
   li a:hover{
   background:transparent !important;
   }
   .sitemap li{
   width:100%;
   }
   .sitemap li a{
   text-align: left;
   color:white;
   }
   .sitemap li a:hover{
   color:black;
   padding-left:20px;
   font-size:18px;
   font-weight:bold;
   }
   .sitemap_header h3{
   text-align: left;
   color:blue;
   margin-left: 6%;
   }
   .sitemap_home{
   margin-bottom:3%;
   }
   .row{
   margin-left:5%;
   margin-top: 2%;
   }
</style>