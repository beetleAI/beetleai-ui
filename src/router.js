import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import DirectAccess from './views/DirectAccess.vue'
import TweetModal from './views/TweetModal.vue'
import TweetSingle from './views/TweetSingle.vue'
import Users from './views/Users.vue'
import User from './views/User.vue'
import UserTweets from './views/UserTweets.vue'
import UserProfile from './views/UserProfile.vue'
import UserMedia from './views/UserMedia.vue'
import Error from './views/Error.vue'

// AI labs View component
// Solutions
import BusinessIntelligence from './views/solutions/BusinessIntelligence.vue'

// Services
import ApplicationService from './views/services/ApplicationService.vue'
import ManagedCloud from './views/services/ManagedCloud.vue'
import ManagedHosting from './views/services/ManagedHosting.vue'
import ProfessionalService from './views/services/ProfessionalService.vue'

// Platforms
import Aws from './views/platforms/aws.vue'

// Resources
import ResourceCenter from './views/resources/ResourceCenter.vue'

// Trainings
import DevOps from './views/trainings/DevOps.vue'

// Partners
import Cloud from './views/partners/Cloud.vue'

// About
import WhyAI from './views/about/WhyAILabs.vue'

// Footer
import Privacy from './views/footer/Privacy.vue'
import Legal from './views/footer/Legal.vue'
import SiteMap from './views/footer/SiteMap.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        twModalView: true
      }
    },
    {
      path: '/BusinessIntelligence',
      name: 'businessIntelligence',
      component: BusinessIntelligence
    },
    {
      path: '/ApplicationService',
      name: 'applicationService',
      component: ApplicationService
    },
    {
      path: '/ManagedCloud',
      name: 'managedCloud',
      component: ManagedCloud
    },
    {
      path: '/ManagedHosting',
      name: 'managedHosting',
      component: ManagedHosting
    },
    {
      path: '/ProfessionalService',
      name: 'professionalService',
      component: ProfessionalService
    },
    {
      path: '/Aws',
      name: 'aws',
      component: Aws
    },

    {
      path: '/ResourceCenter',
      name: 'resourceCenter',
      component: ResourceCenter
    }, 

    {
      path: '/DevOps',
      name: 'devOps',
      component: DevOps
    },
    {
      path: '/Cloud',
      name: 'cloud',
      component: Cloud
    },
    {
      path: '/WhyAI',
      name: 'whyAI',
      component: WhyAI
    },
    //Footer links routers
    {
      path: '/Privacy',
      name: 'privacy',
      component: Privacy
    },
    {
      path: '/Legal',
      name: 'legal',
      component: Legal
    },
    {
      path: '/SiteMap',
      name: 'siteMap',
      component: SiteMap
    },

    {
      path: '/directAccess',
      name: 'directAccess',
      component: DirectAccess
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/:userId',
      name: 'user',
      alias: 'userTweets',
      component: User,
      meta: {
        twModalView: true
      },
      children: [
        {
          path: '',
          name: 'userTweets',
          component: UserTweets
        },
        {
          path: 'profile',
          name: 'userProfile',
          component: UserProfile
        },
        {
          name: 'userMedia',
          path: 'media',
          component: UserMedia
        }
      ]
    },
    {
      path: '/:userId/tweet/:id',
      name: 'userTweet',
      beforeEnter: (to, from, next) => {
        const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

        if (!twModalView) {
          //
          // For direct access
          //
          to.matched[0].components = {
            default: TweetSingle,
            modal: false
          }
        }

        if (twModalView) {
          //
          // For twModalView access
          //
          if (from.matched.length > 1) {
            // copy nested router
            const childrenView = from.matched.slice(1, from.matched.length)
            for (let view of childrenView) {
              to.matched.push(view)
            }
          }
          if (to.matched[0].components) {
            // Rewrite components for `default`
            to.matched[0].components.default = from.matched[0].components.default
            // Rewrite components for `modal`
            to.matched[0].components.modal = TweetModal
          }
        }

        next()
      }
    },
    {
      path: '/tweet/:id',
      name: 'tweet',
      beforeEnter: (to, from, next) => {
        const twModalView = from.matched.some(view => view.meta && view.meta.twModalView)

        if (!twModalView) {
          //
          // For direct access
          //
          to.matched[0].components = {
            default: TweetSingle,
            modal: false
          }
        }

        if (twModalView) {
          //
          // For twModalView access
          //
          if (from.matched.length > 1) {
            // copy nested router
            const childrenView = from.matched.slice(1, from.matched.length)
            for (let view of childrenView) {
              to.matched.push(view)
            }
          }
          if (to.matched[0].components) {
            // Rewrite components for `default`
            to.matched[0].components.default = from.matched[0].components.default
            // Rewrite components for `modal`
            to.matched[0].components.modal = TweetModal
          }
        }

        next()
      }
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})
