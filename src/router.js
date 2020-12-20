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

// BeetleAI View component

// Solutions  
import CloudSolutions from './views/solutions/CloudSolutions.vue'
import ApplicationManagement from './views/solutions/ApplicationManagement.vue'
import SecuritySolutions from './views/solutions/SecuritySolutions.vue'
import DataSolutions from './views/solutions/DataSolutions.vue'
import ITService from './views/solutions/ITService.vue'

// Products
import BeetleAIShop from './views/products/BeetleAIShop.vue'
import DataScience from './views/products/DataScience.vue'
import MachineLearning from './views/products/MachineLearning.vue'

// Platforms
import Aws from './views/platforms/aws.vue'
import Azure from './views/platforms/Azure.vue'
import GCP from './views/platforms/GCP.vue'
import Kubernetes from './views/platforms/Kubernetes.vue'


// Trainings
import AWSTraining from './views/trainings/AWSTraining.vue'
import AzureTraining from './views/trainings/AzureTraining.vue'
import GoogleCloudTraining from './views/trainings/GoogleCloudTraining.vue'
import DevOpsTraining from './views/trainings/DevOpsTraining.vue'
import KubernetesTraining from './views/trainings/KubernetesTraining.vue'


// About
import WhyBeetleAI from './views/about/WhyBeetleAI.vue'
import AboutBeetleAI from './views/about/AboutBeetleAI.vue'
import BeetleAICoreCulture from './views/about/BeetleAICoreCulture.vue'
import BeetleAICareers from './views/about/BeetleAICareers.vue'

// Footer
import Privacy from './views/footer/Privacy.vue'
import Legal from './views/footer/Legal.vue'
import SiteMap from './views/footer/SiteMap.vue'
import CookiePreference from './views/footer/CookiePreference.vue'
import Terms from './views/footer/Terms.vue'
import Feedback from './views/footer/Feedback.vue'



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
      path: '/CloudSolutions',
      name: 'CloudSolutions',
      component: CloudSolutions
    },{
      path: '/ApplicationManagement',
      name: 'ApplicationManagement',
      component: ApplicationManagement
    },
    {
      path: '/SecuritySolutions',
      name: 'SecuritySolutions',
      component: SecuritySolutions
    },
    {
      path: '/DataSolutions',
      name: 'DataSolutions',
      component: DataSolutions
    },
    {
      path: '/ITService',
      name: 'ITService',
      component: ITService
    },
    {
      path: '/BeetleAIShop',
      name: 'BeetleAIShop',
      component: BeetleAIShop
    },
    {
      path: '/DataScience',
      name: 'DataScience',
      component: DataScience
    },
    {
      path: '/MachineLearning',
      name: 'MachineLearning',
      component: MachineLearning
    },
    //Platoforms Support
    {
      path: '/Aws',
      name: 'Aws',
      component: Aws
    },
    {
      path: '/Azure',
      name: 'Azure',
      component: Azure
    },
    {
      path: '/GCP',
      name: 'GCP',
      component: GCP
    },
    {
      path: '/Kubernetes',
      name: 'Kubernetes',
      component: Kubernetes
    },
    
    //Trianing

    {
      path: '/AWSTraining',
      name: 'AWSTraining',
      component: AWSTraining
    },
    {
      path: '/AzureTraining',
      name: 'AzureTraining',
      component: AzureTraining
    },
    {
      path: '/GoogleCloudTraining',
      name: 'GoogleCloudTraining',
      component: GoogleCloudTraining
    },
    {
      path: '/DevOpsTraining',
      name: 'DevOpsTraining',
      component: DevOpsTraining
    },
    {
      path: '/KubernetesTraining',
      name: 'KubernetesTraining',
      component: KubernetesTraining
    },
 //About
    {
      path: '/WhyBeetleAI',
      name: 'WhyBeetleAI',
      component: WhyBeetleAI
    },
    {
      path: '/AboutBeetleAI',
      name: 'AboutBeetleAI',
      component: AboutBeetleAI
    },
    {
      path: '/BeetleAICoreCulture',
      name: 'BeetleAICoreCulture',
      component: BeetleAICoreCulture
    },
    {
      path: '/BeetleAICareers',
      name: 'BeetleAICareers',
      component: BeetleAICareers
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
      path: '/Terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/CookiePreference',
      name: 'CookiePreference',
      component: CookiePreference
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: Feedback
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
