<template>
  <v-container style="height: 1200px">
    <v-layout text-center wrap>
      <v-flex mb-4>
        <h2 class="font-weight-bold mb-3">Welcome to AI Software Labs!</h2>
        <br />
        <h3>BENEFITS & RISKS OF ARTIFICIAL INTELLIGENCE</h3>
        <p>
          “Everything we love about civilization is a product of intelligence,
          so amplifying our human intelligence with artificial intelligence has
          the potential of helping civilization flourish like never before – as
          long as we manage to keep the technology beneficial.“
        </p>

        <p>Step into the shoes of a scientist at the cutting edge...</p>
      </v-flex>

      <v-flex xs12 mb-5> </v-flex>

      <v-flex xs12 mb-5> </v-flex>
    </v-layout>

    <h2 class="headline font-weight-bold mb-3">The Age of A.I.</h2>

    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/UwsrzCVZAb8"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <v-divider />
    <iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="360"
      src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
      frameborder="0"
    ></iframe>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined",
      },
      {
        text: "Frequently Asked Questions",
        href:
          "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
