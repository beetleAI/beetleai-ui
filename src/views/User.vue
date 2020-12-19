<template>
  <div class="page">
    <h1 class="title">"{{ title }} Tweets Page"</h1>
    
  </div>
</template>

<script>
export default {
  name: 'user',
  data: () => ({
    title: false
  }),
  methods: {
    setTitle () {
      this.title = this.$route.params.userId
    }
  },
  created () {
    this.setTitle()
  }
}
</script>
