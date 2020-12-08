<template>
  <div class="page">
    <h1 class="title">Infrastruture Management</h1>
    <p class="solution_content" >Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.</p>
    
      <p class="solution_content" >Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.</p>
    
      <p class="solution_content">Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.</p>

          <p class="solution_content" >Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.</p>
    
      <p class="solution_content" >Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.</p>
    
      <p class="solution_content">Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.</p>

          <p class="solution_content" >Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.</p>
    
      <p class="solution_content" >Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.</p>
    
      <p class="solution_content">Business intelligence (BI) leverages software and services to transform data into actionable 
       insights that inform an organization’s strategic and tactical business decisions. BI tools access
       and analyze data sets and present analytical findings in reports, summaries, dashboards, graphs,
       charts and maps to provide users with detailed intelligence about the state of the business.</p>
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
.solution_content{
  text-align:justify;
}

</style>
