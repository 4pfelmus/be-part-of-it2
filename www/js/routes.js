angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.videoCoaching', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/videoCoaching.html',
        controller: 'videoCoachingCtrl'
      }
    }
  })

  .state('tabsController.videoLifeplus', {
    url: '/page25',
    views: {
      'tab1': {
        templateUrl: 'templates/videoLifeplus.html',
        controller: 'videoLifeplusCtrl'
      }
    }
  })

  .state('tabsController.videoLifeplusBer', {
    url: '/page17',
    views: {
      'tab1': {
        templateUrl: 'templates/videoLifeplusBer.html',
        controller: 'videoLifeplusBerCtrl'
      }
    }
  })

  .state('tabsController.videoLifeplusVon', {
    url: '/page32',
    views: {
      'tab1': {
        templateUrl: 'templates/videoLifeplusVon.html',
        controller: 'videoLifeplusVonCtrl'
      }
    }
  })

  .state('tabsController.videoLifeplusEvents', {
    url: '/page33',
    views: {
      'tab1': {
        templateUrl: 'templates/videoLifeplusEvents.html',
        controller: 'videoLifeplusEventsCtrl'
      }
    }
  })

  .state('tabsController.videoCoachingHealth', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/videoCoachingHealth.html',
        controller: 'videoCoachingHealthCtrl'
      }
    }
  })

  .state('tabsController.videoHealthGesundheit', {
    url: '/page22',
    views: {
      'tab1': {
        templateUrl: 'templates/videoHealthGesundheit.html',
        controller: 'videoHealthGesundheitCtrl'
      }
    }
  })

  .state('tabsController.videoHealthVitalstoffe', {
    url: '/page24',
    views: {
      'tab1': {
        templateUrl: 'templates/videoHealthVitalstoffe.html',
        controller: 'videoHealthVitalstoffeCtrl'
      }
    }
  })

  .state('tabsController.videoHealthDIEKUR', {
    url: '/page21',
    views: {
      'tab1': {
        templateUrl: 'templates/videoHealthDIEKUR.html',
        controller: 'videoHealthDIEKURCtrl'
      }
    }
  })

  .state('tabsController.videoHealthErfolge', {
    url: '/page34',
    views: {
      'tab1': {
        templateUrl: 'templates/videoHealthErfolge.html',
        controller: 'videoHealthErfolgeCtrl'
      }
    }
  })

  .state('videoHealthErfolgeBilder', {
    url: '/page35',
    templateUrl: 'templates/videoHealthErfolgeBilder.html',
    controller: 'videoHealthErfolgeBilderCtrl'
  })

  .state('videoHealthErfolgeFacebook', {
    url: '/page36',
    templateUrl: 'templates/videoHealthErfolgeFacebook.html',
    controller: 'videoHealthErfolgeFacebookCtrl'
  })

  .state('videoHealthErfolgeStorys', {
    url: '/page37',
    templateUrl: 'templates/videoHealthErfolgeStorys.html',
    controller: 'videoHealthErfolgeStorysCtrl'
  })

  .state('tabsController.videoCoachingBusiness', {
    url: '/page7',
    views: {
      'tab1': {
        templateUrl: 'templates/videoCoachingBusiness.html',
        controller: 'videoCoachingBusinessCtrl'
      }
    }
  })

  .state('tabsController.videoCoachingBASIC', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/videoCoachingBASIC.html',
        controller: 'videoCoachingBASICCtrl'
      }
    }
  })

  .state('tabsController.videoStartertraining', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/videoStartertraining.html',
        controller: 'videoStartertrainingCtrl'
      }
    }
  })

  .state('tabsController.videoGOPRO', {
    url: '/page14',
    views: {
      'tab1': {
        templateUrl: 'templates/videoGOPRO.html',
        controller: 'videoGOPROCtrl'
      }
    }
  })

  .state('tabsController.videoPersNlichkeitsentwicklung', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/videoPersNlichkeitsentwicklung.html',
        controller: 'videoPersNlichkeitsentwicklungCtrl'
      }
    }
  })

  .state('tabsController.videoWorkshop', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/videoWorkshop.html',
        controller: 'videoWorkshopCtrl'
      }
    }
  })

  .state('tabsController.videoVergTungsplan', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/videoVergTungsplan.html',
        controller: 'videoVergTungsplanCtrl'
      }
    }
  })

  .state('tabsController.audio', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/audio.html',
        controller: 'audioCtrl'
      }
    }
  })

  .state('tabsController.audioBusiness', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/audioBusiness.html',
        controller: 'audioBusinessCtrl'
      }
    }
  })

  .state('tabsController.audioHealth', {
    url: '/page16',
    views: {
      'tab2': {
        templateUrl: 'templates/audioHealth.html',
        controller: 'audioHealthCtrl'
      }
    }
  })

  .state('tabsController.konzepte', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/konzepte.html',
        controller: 'konzepteCtrl'
      }
    }
  })

  .state('tabsController.beHealthy', {
    url: '/page18',
    views: {
      'tab3': {
        templateUrl: 'templates/beHealthy.html',
        controller: 'beHealthyCtrl'
      }
    }
  })

  .state('tabsController.beStrong', {
    url: '/page38',
    views: {
      'tab3': {
        templateUrl: 'templates/beStrong.html',
        controller: 'beStrongCtrl'
      }
    }
  })

  .state('tabsController.beBeauty', {
    url: '/page19',
    views: {
      'tab3': {
        templateUrl: 'templates/beBeauty.html',
        controller: 'beBeautyCtrl'
      }
    }
  })

  .state('tabsController.bepartofit', {
    url: '/page20',
    views: {
      'tab3': {
        templateUrl: 'templates/bepartofit.html',
        controller: 'bepartofitCtrl'
      }
    }
  })

  .state('tabsController.besports', {
    url: '/page39',
    views: {
      'tab3': {
        templateUrl: 'templates/besports.html',
        controller: 'besportsCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.produkte'
      2) Using $state.go programatically:
        $state.go('tabsController.produkte');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page10
      /page1/tab5/page10
  */
  .state('tabsController.produkte', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/produkte.html',
        controller: 'produkteCtrl'
      },
      'tab5': {
        templateUrl: 'templates/produkte.html',
        controller: 'produkteCtrl'
      }
    }
  })

  .state('tabsController.gabiSteiner', {
    url: '/page23',
    views: {
      'tab1': {
        templateUrl: 'templates/gabiSteiner.html',
        controller: 'gabiSteinerCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.sTARTER', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/sTARTER.html',
        controller: 'sTARTERCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('verification', {
    url: '/verification',
    templateUrl: 'templates/verification.html',
    controller: 'verificationCtrl'
  })

  .state('registrieren', {
    url: '/registrieren',
    templateUrl: 'templates/registrieren.html',
    controller: 'registrierenCtrl'
  })

  .state('tabsController.logout', {
    url: '/logout',
    views: {
      'tab1': {
        templateUrl: 'templates/logout.html',
        controller: 'logoutCtrl'
      }
    }
  })

  .state('impressum', {
    url: '/impressum',
    templateUrl: 'templates/impressum.html',
    controller: 'impressumCtrl'
  })

  .state('datenschutzerklaerung', {
    url: '/datenschutzerklaerung',
    templateUrl: 'templates/datenschutzerklaerung.html',
    controller: 'datenschutzerklaerungCtrl'
  })

  .state('audioEinzelseite', {
    url: '/page42',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/audioEinzelseite.html',
    controller: 'audioEinzelseiteCtrl'
  })

  .state('audioHealthEinzelseite', {
    url: '/page40',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/audioHealthEinzelseite.html',
    controller: 'audioHealthEinzelseiteCtrl'
  })

$urlRouterProvider.otherwise('/login')


});