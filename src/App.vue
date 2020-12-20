
<template>

  <v-app >
    
<v-parallax
    height="721"
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  >
    <v-app-bar app  absolute class="black">
      <v-spacer>
        <router-link to="/" class="header_logo">
        <v-img src="@/assets/BeetleAI-logo-12202020.png" height="150px" width="150px">
        </v-img>
      </router-link>
     

      </v-spacer>
      <v-spacer width="150px" right app dark class="black">
        <div class="black"> 
          <ul>
            <li>
              <v-menu  open-on-hover bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn class="black white--text" v-on="on">Solutions</v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in solutions_items"
                    :key="index"
                    :to="item.page"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li>
              <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn class="black white--text" v-on="on">Products</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in beetle_products_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            <li>
              <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn class="black white--text" v-on="on">Platforms</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in platform_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            
            <li>
              <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn class="black white--text" v-on="on">Trainings</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in training_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
            
            <li>
              <v-menu open-on-hover bottom offset-y>
                <template v-slot:activator="{ on }">
                  <v-btn class="black white--text" v-on="on">About</v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(item, index) in about_items" :key="index" :to="item.page">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </li>
          </ul>
        </div>
      </v-spacer>
      
      <v-spacer><Login /> </v-spacer>
      <v-btn
        href="https://github.com/beetleAI/beetleai-ui"
        target="_blank"
        text
      >
        <span class="mr-2 white--text">Code</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content
      id="scroll-target"
      style="max-height:700px"
      class="overflow-y-auto "
      align="center"
      justify="center">
      <v-app-bar app absolute class="black">
        <v-spacer>
          <router-link to="/" class="header_logo">
            <v-img src="@/assets/AISoftware.png" height="150px" width="150px">
            </v-img>
          </router-link>
        </v-spacer>
        <v-spacer width="150px" right app dark class="black">
          <div class="black">
            <ul>
              <li>
                <v-menu open-on-hover bottom offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn class="black white--text" v-on="on">Solutions</v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in solutions_items"
                      :key="index"
                      :to="item.page"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </li>
              <li>
                <v-menu open-on-hover bottom offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn class="black white--text" v-on="on">Products</v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in beetle_products_items"
                      :key="index"
                      :to="item.page"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </li>
              <li>
                <v-menu open-on-hover bottom offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn class="black white--text" v-on="on">Platforms</v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in platform_items"
                      :key="index"
                      :to="item.page"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </li>
              
              <li>
                <v-menu open-on-hover bottom offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn class="black white--text" v-on="on">Trainings</v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in training_items"
                      :key="index"
                      :to="item.page"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </li>
              
              <li>
                <v-menu open-on-hover bottom offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn class="black white--text" v-on="on">About</v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in about_items"
                      :key="index"
                      :to="item.page"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </li>
            </ul>
          </div>
        </v-spacer>
        
        <v-spacer><Login /> </v-spacer>
        <v-btn
          href="https://github.com/beetleAI/beetleai-ui"
          target="_blank"
          text
        >
          <span class="mr-2 white--text">Code</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar>
    </v-content>
      <v-footer absolute class="font-weight-medium grey">
        <Footer />
      </v-footer>

      <v-content
        id="scroll-target"
        style="max-height: 100%"
        class="overflow-y-auto"
        align="center"
        justify="center"
      >
        <router-view
          class="app_view_default"
          v-scroll:#scroll-target="onScroll"
          align="center"
          justify="center"
        />
        <router-view
          class="app_view_modal"
          name="modal"
          v-scroll:#scroll-target="onScroll"
          align="center"
          justify="center"
        />
      </v-content>
      <v-navigation-drawer
        permanent
        right
        app
        v-model="drawer"
        expand-on-hover
        class="overflow-z-auto grey"
      >
        <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img
                src="https://e3zine.com/wp-content/uploads/2019/10/shutterstock_1111223003web.jpg"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Guest</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in user_items"
            :key="item.title"
            :to="item.page"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-row justify="right" no-gutters app>
          <Callus />
        </v-row>
        <v-row justify="right" no-gutters app>
          <Emailus />
        </v-row>
        <v-divider></v-divider>
      </v-navigation-drawer>
    </v-parallax>
  </v-app>
</template>
        
     

<script>
import Login from "./components/Login";
import RegisterUser from "./components/RegisterUser";
import Callus from "./components/Callus";
import Emailus from "./components/Emailus";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Login,
    RegisterUser,
    Callus,
    Emailus,
    Footer,
  },
  data: () => ({
    beetle_products_items: [
      { title: "BeetleAI Shop", page: "/applicationService" },
      { title: "Farmers Cart", page: "/managedCloud" },
      { title: "Data Science", page: "/managedHosting" },
      { title: "Machine Learning", page: "/professionalService" },
    ],
    solutions_items: [
      { title: "Cloud", page: "/CloudSolutions" },
      { title: "Applications", page: "/ApplicationManagement" },
      { title: "Security", page: "/SecuritySolutions" },
      { title: "Data", page: "/DataSolutions" },
      { title: "IT Service", page: "/ITService" }
    ],
    
    platform_items: [
      { title: "Amazon Webervices", page: "/Aws" },
      { title: "Azure Cloud", page: "" },
      { title: "Google Cloud Computing", page: "" },
      { title: "Kubernetes platforms", page: "" },
    ],
    
    training_items: [
      { title: "AWS Cloud practice", page: "" },
      { title: "Azure Cloud practice", page: "" },
      { title: "GCP cloud practice", page: "" },
      { title: "DevOps", page: "/DevOps" },
      { title: "Programming Languages", page: "" },
      { title: "Data Science", page: "" },
      { title: "Machine Learning", page: "" },
      { title: "Internet Of Things", page: "" },
    ],
    
    about_items: [
      { title: "Why BeetleAI", page: "/WhyBeetleAI" },
      { title: "About Us", page: "/AboutBeetleAI" },
      { title: "Core Culture", page: "/BeetleCoreValues" },
      { title: "Career", page: "/BeetleAICareer" },
      
    ],
    user_items: [
      { title: "Home", icon: "mdi-home-city", page: "/" },
      { title: "My Account", icon: "mdi-account", page: "GilbertCook/profile" },
      { title: "Users", icon: "mdi-account-group-outline", page: "/Users" },
    ],
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],

    dialog: false,
    mini: true,
  }),
  methods: {
    navigateAndIncrement() {
      const increment = () => this.n++;
      if (this.$route.path === "/") {
        this.$router.push("/foo", increment);
      } else {
        this.$router.push("/", increment);
      }
    },
    onScroll(e) {
      this.offsetTop = e.target.scrollTop;
    },
  },
};
</script>
<style lang="scss">
.v-application ul{
padding:0px !important;
}
.v-application--wrap {
  display: block; /* fix for IE11 */
  font-family: inherit;
  background-color: #fff;
}
.head1 {
  margin-bottom: 20px;
  padding: 0px;
  font-size: 30pt;
}
.item {
  border-left: 3px solid #ffba75;
  margin: 5px 5px 8px 0px;
  padding: 3px 3px 5px 10px;
  font-size: 0.9rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bk {
  vertical-align: top;
  margin-top: 20px;
}
.list {
  width: 100%;
}
@media screen and (min-width: 1000px) {
  .bk {
    display: inline-block;
    margin: 10px 90px 60px 0px;
  }
  .list {
    width: 400px;
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111111;
}
* {
  -webkit-tap-highlight-color: rgba(#42b983, 0.1);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: inherit;
}
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1.5vw;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #ebf4ec;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  @media (min-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 780px) {
    font-size: 2vw;
  }
  @media (max-width: 580px) {
    font-size: 3vw;
  }
}
#app {
  padding-bottom: 10vmin;
}

.u-hover {
  &:hover {
    color: #42b983 !important;
    transition: color 200ms ease !important;
  }
}

.title {
  line-height: 1;
  font-size: 6vmin;
  padding: 6vmin 0;
  position: relative;
  left: -0.1em;
}

.subtitle {
  white-space: pre;
  word-spacing: normal;
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
  line-height: 1.5;
  font-size: 110%;
  padding: 0.25em 0.5em;
  background-color: rgba(#42b983, 0.2);
  color: darken(#42b983, 15%);
  border-radius: 5px;
  display: inline-block;
}

.title--cover {
  line-height: 1;
  padding: 6vmin 0;
  text-align: center;
  background-color: #42b983;
  color: #ffffff;
  left: 0;
}

.nestedRoutes {
  background-color: rgba(#42b983, 0.2);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(#000000, 0.035);
  margin-bottom: 6vmin;
  padding: 4vmin;
}

.nestedRoutes_title {
  margin-bottom: 4vmin;
  line-height: 1;
  font-size: 200%;
}

.nestedRoutes_view {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}

.nestedRoutes_links {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 4vmin;
}
.nestedRoutes_links a {
  display: block;
  text-transform: uppercase;
  padding: 1em 2em;
  margin-right: 1em;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(#000000, 0.035);
  font-weight: bold;
  &.router-link-exact-active {
    background-color: #42b983;
    color: #ffffff;
    pointer-events: none;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(mix(#2c3e50, #000000, 30%), 0.85);
  z-index: 99999;
  padding: 3vmax;
  cursor: zoom-out;
}
.modal_conatiner {
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 15px;
  cursor: auto;
  overflow: hidden;
}

.grid {
  @media (min-width: 1000px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    > div {
      min-width: 48.5%;
      margin-right: 3%;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  @media (max-width: 1000px) {
    > div {
      margin-bottom: 10%;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.tweets {
  position: relative;
}
.tweet {
  padding: 6vmin 4vmin;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(#000000, 0.035);
  margin-top: 3vmin;
  &:first-child {
    margin-top: 0;
  }
  > a {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &--user > a {
    align-items: center;
  }
}
.tweet_avatar {
  position: relative;
  min-width: 5vw;
  min-height: 5vw;
  border-radius: 5%;
  margin-right: 2em;
  &--circle {
    border-radius: 50%;
  }
}
.tweet_content {
  position: relative;
}
.tweet_name {
  font-weight: 900;
  margin-bottom: 1rem;
  font-size: 125%;
  display: block;
  line-height: 1;
}
.tweet_media {
  width: 100%;
  height: 20vmin;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150%;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #ffffff;
  border-radius: 5px;
  margin-bottom: 1rem;
  &[data-color="blue"] {
    background-color: blue;
  }
  &[data-color="red"] {
    background-color: red;
  }
  &[data-color="pink"] {
    background-color: pink;
  }
  &[data-color="yellow"] {
    background-color: yellow;
  }
}
.tweet_text {
  font-weight: 400;
  letter-spacing: 0.02em;
  line-height: 1.5;
}
</style>

<style scoped lang="scss">
.header {
  position: relative;
  z-index: 99;
  padding: 3vmax;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header_logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2em;
  img {
    position: relative;
    top: (3em * 0.05);
    width: 3em;
    height: 3em;
    transform: translateZ(0);
  }
  &:hover {
    opacity: 0.3;
    transition: opacity 200ms ease !important;
  }
}
.header_links,
.header_nav {
  a {
    margin-right: 0.7em;
    text-decoration: none;
    color: #2c3e50;
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
    &:after {
      content: "|";
      padding-left: 0.7em;
      color: rgba(#2c3e50, 0.2) !important;
    }
    &:last-child:after {
      display: none;
    }
  }
}
.header_links {
  margin-left: auto;
}
.app_view_default {
  padding: 0 3vmax;
}
body,
html {
  height: 100%;
}

</style>

