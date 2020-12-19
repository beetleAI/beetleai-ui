<template>
  <v-container class="grey" style="padding: 0; text-align: center">
      <v-btn
        v-for="link in footer_links"
        :key="link.title"
        text
        rounded
        small
        class="grey white--text"
        :href="link.page"
        link="true"
        >{{ link.title }}</v-btn
      >
      <strong small class="grey white--text"
          >© {{ new Date().getFullYear() }} -
        </strong>
        <strong small class="grey white--text small"
          >Copyright: BeetleAI Solutions.</strong
        >

   <div>
     <div style="float:left">
        <strong>Follow us:</strong>
        <a
          :href="link.url"
          :title="link.title"
          target="_blank"
          v-for="link in socialmedia_links"
          :key="link.title"
          text
          rounded
          class="my-2"
        >
          <v-icon style="font-size: 24px">{{ link.icon }}</v-icon>
        </a>
        </div>
        <div style="float: right">
        <strong>Share :</strong>

        <facebook :url="url" style="padding: 5px"></facebook>
        <twitter :url="url" title="Check me on Github" style="padding: 5px"></twitter>
        <linkedin :url="url" style="padding: 5px"></linkedin>
        <telegram :url="url" style="padding: 5px"></telegram>
        <whats-app :url="url" title="Hello" style="padding: 5px"></whats-app>
        <pinterest :url="url" style="padding: 5px"></pinterest>
        <reddit :url="url" title="My Github" style="padding: 5px"></reddit>
        <email :url="url" subject="Hello" style="padding: 5px"></email>
        </div>
   </div>
  </v-container>
</template>

<script>
import {
  Facebook,
  Twitter,
  Linkedin,
  Pinterest,
  Reddit,
  Telegram,
  WhatsApp,
  Email,
} from "vue-socialmedia-share";

export default {
  name: "app",
  components: {
    Facebook,
    Twitter,
    Linkedin,
    Telegram,
    WhatsApp,
    Pinterest,
    Reddit,
    Email,
  },
  data: () => ({
    socialmedia_links: [
      {
        title: "LinkedIn",
        icon: "mdi-linkedin-box",
        url: "https://www.linkedin.com/company",
      },
      {
        title: "Facebook",
        icon: "mdi-facebook-box",
        url: "https://www.facebook.com/shoban.cheekuru",
      },
      {
        title: "Youtube",
        icon: "mdi-youtube",
        url: "https://www.youtube.com/user/123shoban/videos",
      },
      {
        title: "Instagram",
        icon: "mdi-instagram",
        url: "https://www.instagram.com/shobancs/",
      },
      {
        title: "Twitter",
        icon: "mdi-twitter-box",
        url: "https://twitter.com/shobancs",
      },
    ],
    footer_links: [
      { title: "Privacy", page: "/Privacy" },
      { title: "Legal", page: "/Legal" },
      { title: "Sitemap", page: "/SiteMap" },
      { title: "Terms of use", page: "/Privacy" },
      { title: "Feedback", page: "/" },
      { title: "Cookie preferences", page: "/" },
    ],
    justify: ["start", "end", "center", "space-between", "space-around"],
  }),
};
</script>