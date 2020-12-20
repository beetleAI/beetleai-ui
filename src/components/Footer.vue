<template>
  <v-container class="grey" style="padding: 0; text-align: center">
      <div style="float:left">
    
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
        <strong small class="grey white--text small">Copyright: BeetleAI Solutions.</strong>
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
      { title: "Terms of use", page: "/Terms" },
      { title: "Feedback", page: "/Feedback" },
      { title: "Cookie Preferences", page: "/CookiePreference" },
    ],
    justify: ["start", "end", "center", "space-between", "space-around"],
  }),
};
</script>