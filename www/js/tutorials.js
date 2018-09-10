/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('tutorials', [])

.service('Tutorials', [function(){
    
    var tutorials_list = [
        {
          name: 'Startertipps von Micha ',
          description: 'Teil 1',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/1%20Anfa%CC%88ngertipps%20micha%201.m4a?alt=media&token=b96ff7f0-3f47-4735-a29d-8d74bab3596d',
          imagesrc: "img/FxhBdudlRoqd7rj718fc_240_F_216682934_5eUXMlwoWX6NbokUq75QKKattt3w8DF3.jpg"
        },
        {
          name: 'Startertipps von Micha',
          description: 'Teil 2',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2%20ANfa%CC%88ngertipps%20micha%20teil%202.m4a?alt=media&token=65440ad9-fac7-4864-9035-9455b07ac71f',
          imagesrc: "img/FxhBdudlRoqd7rj718fc_240_F_216682934_5eUXMlwoWX6NbokUq75QKKattt3w8DF3.jpg"
        },
        {
          name: '5 Punkte Training',
          description: 'Tipps',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2012_08_23_Callgruppe_1_Call_5_Marketing.mp3?alt=media&token=9950baa2-9bd6-4976-86ca-b992c7577941',
          imagesrc: "img/b7JVhxiRTyKs1AJGmLm8_240_F_210408993_YPCvkL9R699hlcmvjNnPbGf5T12fXeCv.jpg"
        },
        {
          name: 'Unternehmertalk',
          description: 'Wertvolle Infos',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2018-07-31%2C%20Unternehmertalk%20-%20Feedbacks%20von%20Diamanten%20mit%20eigenen%20Unternehmen.mp3?alt=media&token=4210a945-592e-41e4-ac25-9680bf36af98',
          imagesrc: "img/k1naRC4aRJeKD8vlaJyA_240_F_181392286_ZwOMJpXIMXAMbdgELlsijvxHfXX4AZ6Z.jpg"
        },
        {
          name: 'Aktion 32',
          description: 'Zum Geschäft',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2016-10-25_Di_BC_Gabi_Aktion32_Waessern_Pitche.mp3?alt=media&token=6af73c65-78ee-4268-99d4-0626b28bcd6c',
          imagesrc: "img/AczkbKNIRcGJjugMGAM3_240_F_208101695_BRv5ZinxtgNhQUiqFaGAaHENF7DEcCKe.jpg"
        },
        {
          name: 'Von Produkten zum Geschäft',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017-04-10%2C%20U%CC%88ber%20Gesundheits-%20u.%20Produktbegeisterung%20hin%20zum%20Gescha%CC%88ftsaufbau%2C%20Steiner%20%26%20Beatrice%20Ammann%20(Heilpraktikerin).mp3?alt=media&token=d6474da2-764f-4151-bb32-ca840d2b72c4',
          imagesrc: "img/MFRHKcyQYhlAdnXDP95A_240_F_124354429_WxW47z7EYAhKK1mShwG5WGJhHrOLWqkt.jpg"
        },
        {
          name: 'Aktion 32',
          description: 'wässern',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2015-06-03_Aktion32_Waessern_Gabi_Lisa_Gisela.mp3?alt=media&token=ea90513a-8695-4752-afe9-59a56245f474',
          imagesrc: ''
        },
        {
          name: 'Aktivität = Erfolg',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Aktivita%CC%88t%20%3D%20erfolg.mp3?alt=media&token=95949910-c5f5-48e4-bbf0-29bf3ec3d3ad',
          imagesrc: ''
        },
        {
          name: 'Anfänger-TIPPS',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Anfa%CC%88nger%20tipps%20Teil_2_Geschichte_Tipps.mp3?alt=media&token=3dd1acdf-0f15-4e6c-9563-2adb4ced9323',
          imagesrc: ''
        },
        {
          name: 'Businesscall',
          description: 'Teamcall mit Gabi Steiner',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017-03-07_Di_Businesscall_Teamcall_mit_Uta_West_und_Gabi_Steiner.mp3?alt=media&token=704befc6-8441-48fd-abd3-f2ebda465470',
          imagesrc: ''
        },
        {
          name: 'Vergütungsplan',
          description: 'Bonus, Marketing',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2012_08_23_Callgruppe_1_Call_5_Marketing.mp3?alt=media&token=9950baa2-9bd6-4976-86ca-b992c7577941',
          imagesrc: ''
        },
        {
          name: 'Charity Call',
          description: 'Von 10 auf 17.ooo IPs',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017-04-18_Di._Call_Von_10_auf_17000_IP%C2%B4s_-mit_einem_-Charity_Projekt.mp3?alt=media&token=1a7c17a1-96ad-4cec-9b4a-5390c8b6581f',
          imagesrc: ''
        },
        {
          name: 'Cruise',
          description: 'Feedback von der Cruise',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017-03-22_Mi_call_Feedback_Cruise.mp3?alt=media&token=4ea891dc-c17d-4fb4-a0d1-c33933481534',
          imagesrc: ''
        },
        {
          name: 'Vom Fragen zum Angebot',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Fragen%20zum%20angebot.mp3?alt=media&token=faf53b97-ef2e-4531-a7df-97ddf578ee61',
          imagesrc: ''
        },
        {
          name: 'Gabi Steiner - Pitch',
          description: 'Interview von Pauly',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2015_04_01_Gabi_Pauly-Pitch.mp3?alt=media&token=575bdde8-b665-4dad-95d2-1aae50664e27',
          imagesrc: ''
        },
        {
          name: 'Gabis LIVE Training',
          description: '2004',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2012_11_30Gabis-Live-Training-Rammingen-von-2004.mp3?alt=media&token=1a419f93-2255-4048-9656-0772c41602af',
          imagesrc: ''
        },
        {
          name: 'Gesprächsführung',
          description: 'mit Gabi und Micha',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Gespra%CC%88chsfu%CC%88hrung%20Gabi_Micha_Inka_Steffi.mp3?alt=media&token=eb808bea-cb0c-4fed-960a-df28ecae1aa5',
          imagesrc: ''
        },
        {
          name: 'Magische Entscheidungen',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017-05-02_Di._Call_Magische_Entscheindungen.mp3?alt=media&token=d4506496-6d46-4666-8fb3-3b63cc435726',
          imagesrc: ''
        },
        {
          name: 'Micha im Interview',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2011_08_30_Gabi_Micha_Inka_Steffi.mp3?alt=media&token=28978a06-a6fc-4071-8a51-fd74d8f03591',
          imagesrc: ''
        },
        {
          name: 'Persönlichkeitsentwicklung',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Perso%CC%88nlichkeitsentwicklung.mp3?alt=media&token=90315f55-a696-4b97-b81f-7d07a9e06274',
          imagesrc: ''
        },
        {
          name: 'Rente',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Rente.mp3?alt=media&token=8a5de821-18f2-4f7b-8f56-bfe467779be4',
          imagesrc: ''
        },
        {
          name: 'Spitzenleister',
          description: 'Call vom 07.02.2011 ',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2011_02_07_Spitzenleister.mp3?alt=media&token=1e3b8463-f47b-411c-acaa-9544eb58e191',
          imagesrc: "img/P7HaGcGT326AmjA2cqC6_leistung.jpg"
        },
        {
          name: 'Stellschrauben',
          description: 'KLOSE & GRUPE !!!!!!!!!!',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2016-09-06_Di_BC_Call_Stellschrauben_Gabi_Klose_Grupe.mp3?alt=media&token=41c0b812-45eb-461f-add2-fff384b6bd04',
          imagesrc: "img/Z5GocC1iSgCNPPth37Z5_240_F_173646285_50zpZnnsBoXBtj449U7UsCBQ73x6Cr17.jpg"
        },
        {
          name: 'Überblick zum Pilotprojekt',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2013_02_11_Ueberblick_zum_Pilotprojekt.mp3?alt=media&token=0d45b7b8-67e8-4982-bff3-199ec45ccd88',
          imagesrc: ''
        },
        {
          name: 'Verantwortung im Wachstum',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2014-07-01_Dienstagscall_Verantwortung_Wachstum.mp3?alt=media&token=6f9f4fa8-05f7-41da-b644-d6b8ea857aa7',
          imagesrc: ''
        },
        {
          name: 'Wachsen',
          description: 'Buchtipp Schulmedizin',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2014-08-06_Mittwochscall_Wachsen_Grasnarbe_Buchtipp_Schulmedizin.mp3?alt=media&token=b210e592-58c0-46db-9a45-d0ea77d69c28',
          imagesrc: ''
        },
        {
          name: 'Was ist ein Pitch?',
          description: 'Kurzversion des Calls 15.11.2005 ',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2005_11_15_Call_KURZ_Was_ist_ein_Pitch.mp3?alt=media&token=dc71079a-e64d-4897-a55b-2e1bddbd840c',
          imagesrc: "img/zOC48VN3SSi51ImINjUO_pitch.jpg"
        },
        {
          name: 'Call am 30.08.2011',
          description: 'Mit Gabi, Micha, Inka und Steffi',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2011_08_30_Gabi_Micha_Inka_Steffi.mp3?alt=media&token=28978a06-a6fc-4071-8a51-fd74d8f03591',
          imagesrc: "img/PV1Mf6oQTx6GjwRkrKPP_Empfehlen.jpg"
        }
        
      ];
      
      var tutorials_keys = {};

      for (var i=0;i<tutorials_list.length;i++){
        tutorials_keys[tutorials_list[i].id] = tutorials_list[i];
      }

    return {
        list: tutorials_list,
        keys: tutorials_keys
    }

}]);


//Playbutton fuer die Audioseite
var isPlaying = false;

function togglePlay(i) {
	var myAudio = document.getElementById('audio' + i);
	var playButton = document.getElementById('playbutton' + i);
	
  if (isPlaying) {
	myAudio.pause();
	playButton.classList.remove('ion-ios-pause');
	playButton.classList.add('ion-ios-play');
	console.log("Audio wurde pausiert.");
	isPlaying = false;
  } else {
	myAudio.play();
	playButton.classList.remove('ion-ios-play');
	playButton.classList.add('ion-ios-pause');
	console.log("Audio wurde geplayed.");
	isPlaying = true;
  }
};


//Laden von Dateien aus der Firebase zulassen
var app = angular.module('myApp', ['ngSanitize']);

app.filter('trusted', ['$sce', function ($sce) {
    return function(id) {
        return $sce.trustAsResourceUrl(id);
    };
}]);


