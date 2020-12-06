<template>
   <div class="page">
   <h1 class="title">Legal Information</h1>
        <p>Beetle AI was founded with the vision of being a different type of company—a technology service company that was easy to do business with. It's our unique customer service philosophy we call Fanatical Experience®.</p>
        <p>To ensure that Fanatical Experience endures, we've made our legal information easily accessible. For questions related to these documents, please <a href="contact">contact a BeetleAI representative</a>.</p>
        <p>
            <strong>Code of Conduct</strong><br />
            The <a href="#">Beetle AI Code of Conduct</a> sets forth ethics at BeetleAI <br />
        </p>
        <p>
            <strong>Security Vulnerability Reporting</strong><br />
            Our team gives immediate attention to any report of security issues. Learn about our security disclosure process and how to submit a security vulnerability report: <a href="information/legal/rsdp/">Security Vulnerability Reporting</a>.
        </p>
        <p>
            <strong>Acceptable Use Policy</strong><br />
            The AUP defines acceptable use of the Beetle AI services: <a href="#">Acceptable Use Policy</a>
        </p>
        <p>
            <strong>Information for Law Enforcement Authorities</strong><br />
            Information on how to issue formal requests to Rackspace: <a href="#">Information for Law Enforcement Authorities</a>.
        </p>
        <p>
            <strong>Privacy Statement</strong><br />
            Beetle AI has created this privacy statement that sets forth our information gathering, data security and dissemination practices: <a href="#">Privacy Statement</a>.
        </p>
        <p>
          <strong>Copyright and Trademarks</strong><br />
          Receive information on Beetle AI's copyright and/or applicable rights to all text and graphic images: <a href="#">Legal Copyrights, Trademarks, and Servicemarks</a>.
        </p>
        <p>
          <strong>Website Terms of Use</strong><br />
          By accessing, browsing or using our websites, you are agreeing to comply with and be bound by the Terms of Use and all terms and conditions incorporated by reference as outlined in our
          <a href="#">Website Terms of Use</a>.
        </p>
        <p>
            <strong>Contract Structure</strong><br />
            Contract terms and how they work together: <a href="#">Contract Structure</a>.
        </p>
        <p>
            <strong>Speakup Compliant Hotline</strong><br />
            <a href="#" target="_blank">beetleai.com</a>.
        </p>
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
   .legal_header{
   text-align:left;
   color: black;
   }
   p{
   text-align:justify;
   }
   .page{
   height:700px;
   }
</style>