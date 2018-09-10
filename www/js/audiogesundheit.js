angular.module('audiogesundheit', [])

.service('Audiogesundheit', [function(){
    
    var audiogesundheit_list = [
        {
          name: 'Inhaltsstoffe',
          description: 'von Dr. Frank Oberle',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/1%20Infos%20zu%20Inhaltsstoffen%20(Oberarzt%20oberle.mp3?alt=media&token=cac7988a-a102-4d9d-8eed-99dc1e563283',
          imagesrc: "img/gbRC37BhTVS1igURTiQ7_240_F_84771002_1vl0jDHDMB0zRUcgfYgvHLaC4eHdQ84H.jpg"
        },
        {
          name: 'Zahnärzte',
          description: 'über Lifeplus',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2%20Zahnaerzte.mp3?alt=media&token=85939203-3312-4451-b987-240edc2d4615',
          imagesrc: "img/QNaHC1kfSFOvvOEYJROO_2.jpg"
        },
        {
          name: 'Feedback Gesundheit',
          description: 'DISCOVERY ! HÖREN!!!!! ',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Sybille%20G%C3%B6ring%20Ergebnisse%20Discovery%20bei%20Alzheimer%202.mp3?alt=media&token=a663da80-ec0a-48ad-8ce3-c5dabd380b7a',
          imagesrc: "img/QYcuqP8RTEezDHYLZg4p_240_F_216987966_BeX2H7BP2PmWOdkepBy5yDszBojkixEj.jpg"
        },
        {
          name: 'Omega 3',
          description: 'OME GOLD',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/OME.mp3?alt=media&token=09ad124c-eb1b-49ec-b09c-0871fcbac6e2',
          imagesrc: "img/J0xA04ZYSH6t8RFQXxrF_240_F_130635244_bAKTab1uMo23hSYKjBYDCp9OowbVdQF5.jpg"
        },
        {
          name: 'OPC',
          description: 'Proanthenols100',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2013-09-17_Dienstagscall_OPC_5_Punkte.mp3?alt=media&token=c7e6fe2f-c79b-4416-ae5f-5257ca10b549',
          imagesrc: "img/0V4wG7WKQeer891aV5UP_240_F_80652451_giHb9fLAhSFFjbXgZPCnI2G7YcoF79de.jpg"
        },
        {
          name: 'Somazyme & Produkte',
          description: 'Dr. Oberle',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Somazyme.mp3?alt=media&token=5836836a-1a3d-4744-ab11-3fb0f6b46e82',
          imagesrc: "img/dmFWsXsoRa6wpmvAmYeH_images.jpeg"
        },
        {
          name: 'After Cancer Care',
          description: 'Stimmen',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2016-05-31_Di_BC_Call_After_Cancer_Care_Interview_Dauenhauer_Petras.mp3?alt=media&token=bbb6112f-d57c-468a-9baa-d7c54556f582',
          imagesrc: "img/IU5YtRasRimDBN4H1Y5m_Unknown-1.jpeg"
        },
        {
          name: 'BE Serie',
          description: 'Anja zur neuen be Serie',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Be_Erfahrungen_Wildhagen_und_KollegInnen.mp3?alt=media&token=85eda2d0-d9cd-4bf8-ba7e-5cc9b3dcacd5',
          imagesrc: "img/eQErmwFPSWOB4H6Gt3rK_240_F_164801696_Iq9kAMQbgsRl7BASIvvrzKj1lMi93STB.jpg"
        },
        {
          name: 'Sportlerprodukte',
          description: 'be Serie',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017_04_04_Sportlercall_Koppe.mp3?alt=media&token=75f457b3-e5fd-4f5f-9ae1-f221f16e9535',
          imagesrc: "img/scd0PuAdT4lzeFFr1mCn_240_F_119136833_XXhh0mhBuV3IIQ3rFzeKMwcsJAo2k6E8.jpg"
        },
        {
          name: 'Be Serie',
          description: 'Heilpraktikerin zur be Serie',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Be-Serie%2C%20(Sandy%20Scholz%20-%20Physio%20%26%20Heilpraktikerin).mp3?alt=media&token=a8c7da52-50f1-4f88-8a76-9c4594157a93',
          imagesrc: "img/RYI2RvZSR0OWeBoYrWF7_240_F_216575615_zARUXvAi5lQndJMp4hLfCqiLvHDH87bx.jpg"
        },
        {
          name: 'Daily',
          description: 'Besonderheiten vom Daily',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Daily%20Besonderheiten%2C%20Andreas%20Jopp.mp3?alt=media&token=7a7576e3-533c-48a1-8b3e-f2991894aa10',
          imagesrc: "img/CvSukBIR2CtSWRyLlpA1_1.jpg"
        },
        {
          name: 'Discovery',
          description: 'Feedback',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2012_11_12_Discovery.mp3?alt=media&token=74b557a8-8ac2-46fb-a43f-35cb23a4ca68',
          imagesrc: "img/zxOjxqsTk29QHnAt5Qcj_240_F_142221884_xTCDAZQDsJD0eg4mCQKS0kJ5AuoRsGxf.jpg"
        },
        {
          name: 'Dr. Pinther',
          description: 'Erfahrungsbericht',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Dr%20pinther%20-%20erfahrungen.mp3?alt=media&token=b504fd76-7ffc-4ad5-b8f8-38ea7e2f699b',
          imagesrc: "img/xEwuVf36TSedhh7F9zzR_240_F_216027175_hKfWBFAzRURW21o4ZLDONRNXDfynplaN.jpg"
        },
        {
          name: 'Hintergrundwissen',
          description: 'zur Stoffwechselkur',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017-02-22_Mi._Call_Hintergrundwissen_zur_SWK.mp3?alt=media&token=d9cdf934-f375-4bcb-9bd1-b2d8a202ccef',
          imagesrc: "img/DgPRq2EJSROEzzYs8gB3_240_F_216221914_f5lkh97B7g7RtFvpvFPJ7YFfgtqfGGSl.jpg"
        },
        {
          name: 'Vitalstoffe',
          description: 'Andreas Jopp',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017-02-15_Mi_Call_Interview_A.Jopp_Vitalstoffe_SWK1.mp3?alt=media&token=20a85190-08a8-42d8-88ea-d26904166f51',
          imagesrc: "img/eEe93v4DQl6QJqUARILX_240_F_100441561_4bKIFoWl6BGbWFbQyKxRFFzr87beP9rK.jpg"
        },
        {
          name: 'Kosmetik',
          description: '',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Kosmetik.mp3?alt=media&token=5c94a486-34a1-4407-b819-77a99586d8e8',
          imagesrc: "img/hsLTsFeBRuGlh3Rf4b7H_240_F_217210268_LI8E0HxbEVoVLbIRw1XJWked3vKWqXR2.jpg"
        },
        {
          name: 'Thema Rheuma',
          description: 'Produktfeedback',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Rheumatischer%20Formenkreis.mp3?alt=media&token=c40a1c21-82a4-4fd7-be35-99f385af1137',
          imagesrc: "img/yjsbmePTCWhvTQVfAjGR_240_F_216987966_BeX2H7BP2PmWOdkepBy5yDszBojkixEj.jpg"
        },
        {
          name: 'Schönheit',
          description: 'von innen',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Scho%CC%88nheit_von_Innen_Beate_Reichert_Cut.mp3?alt=media&token=b8f0beb4-a41a-4d31-8ad5-79e66ad02c96',
          imagesrc: "img/vKyUiWPsQHmoEndZKFHM_240_F_217731239_TkPkBBN63fTGjGilrfL6SkR6R1BWmdP6.jpg"
        },
        {
          name: 'Schwangerschaft',
          description: 'und Kinder',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2016-03-02_Mi_Call_Produkterfahrung_Schwangerschaft_Kindern_Ilona_Beitel.mp3?alt=media&token=a4b161ab-270d-4740-98ca-b650d7167139',
          imagesrc: "img/li4BXiq3TOqyaTTH7KYa_240_F_190903916_9jCRSrQUOxZp19MajY74GGAygEtMUW2U.jpg"
        },
        {
          name: 'Sportlercall',
          description: 'Produktfeedback',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017_04_04_Sportlercall_Koppe.mp3?alt=media&token=75f457b3-e5fd-4f5f-9ae1-f221f16e9535',
          imagesrc: "img/4Ost7UWvRJK0nH400e29_240_F_217142108_WkFT5Gv75PtbfuLqbbqQdwxM5BxywCgJ.jpg"
        },
        {
          name: 'Tiere',
          description: 'Produktfeedback',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Tiere%20dr%20.mp3?alt=media&token=09f38079-4589-4096-8a38-4715783d21b4',
          imagesrc: "img/UNOIQm4EQhCgSMG7GGIC_240_F_216076749_ulvR2RnADmCGNOIImjK1A77oSBxRun4f.jpg"
        },
        {
          name: 'Tiere',
          description: 'Feedback',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Tiere%20Produkterfahrungen%20Tiere%20(Denise%20Brunner.mp3?alt=media&token=ea7c2a3d-a7ca-4512-b489-f7542ad31d5d',
          imagesrc: "img/1ey0sYEUTVOgzxFgxQyH_240_F_217064485_GO4MXLrc3BPiOAC8LUTkhVcdcxYJxl83.jpg"
        },
        {
          name: 'Interview',
          description: 'Unger - Vögeli',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017-04-16_Unger_Voegeli.mp3?alt=media&token=c9ef0f65-12dd-4717-8075-5c679b0c12e5',
          imagesrc: "img/MG9wwQRQKSxnPgyVKIlL_240_F_119052345_VsPLRhiUukyE1lJZIutppnj9BX2eY2su.jpg"
        },
        {
          name: 'Vitalstoffe',
          description: 'DIE Gesundheitsrevolution',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2005_11_15_Call_KURZ_Was_ist_ein_Pitch.mp3?alt=media&token=dc71079a-e64d-4897-a55b-2e1bddbd840c',
          imagesrc: "img/JNpdOFGWSGOL1LKsVc6Z_240_F_134698408_8RH2lyoNwUSZhq7YPPopWvIzGyC96j24.jpg"
        },
        {
          name: 'Vitalstoffe',
          description: 'Phytozyme Basis',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/Vitalstoffe%20Phytozyme%20Basis)%2C%20Herstellungsverfahren%2C%20Grundversorgung.mp3?alt=media&token=d92097b1-993b-4d24-acef-b61e2463220e',
          imagesrc: "img/KzCjnSSxRE60ku2t5jsd_1.jpg"
        },
        {
          name: 'x-Cell',
          description: 'Feedback',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/X-Cell%20Feedback.aac?alt=media&token=4c250912-6752-488f-9e7c-e35e44e86dd7',
          imagesrc: "img/9a8pxdrITnOv6ayomvp9_240_F_197318463_QzOasyS5IS4KbrgWMvFAYmkiMdIAJaIZ.jpg"
        },
        {
          name: 'Young Generation',
          description: 'Gesundheit & Business',
          id: 'https://firebasestorage.googleapis.com/v0/b/login-test-a46ec.appspot.com/o/2017-04-26_-Erfolgsgeschichten_-aus_der_Young_-Generation_zu_-Gesundheit_und_Business.mp3?alt=media&token=1df9331c-dc0e-4fe5-b138-6b8604a70229',
          imagesrc: "img/QujQbZaQHePmRaWrAQog_240_F_214078959_YQ7NqBx7Z2hxadgX3dBOG6vfjmhhvFbJ.jpg"
        },
        
      ];
      
      var audiogesundheit_keys = {};

      for (var i=0;i<audiogesundheit_list.length;i++){
        audiogesundheit_keys[audiogesundheit_list[i].id] = audiogesundheit_list[i];
      }

    return {
        list: audiogesundheit_list,
        keys: audiogesundheit_keys
    }

}]);