import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IAppConfig } from './app-config.model';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AppConfig {
    static settings: IAppConfig;
    public apiUrl:any = [];
    public static url:string;
    constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        console.log(data);
        this.apiUrl = data;
        AppConfig.url = this.apiUrl.apiurl.serverurl;
      });
    }
    load() {
        const jsonFile = `assets/config/api.${environment.name}.json`;
        this.http.get(jsonFile).subscribe(response => {
          console.log(response);
          this.apiUrl = response;
          localStorage.setItem('apiurl',this.apiUrl.apiurl.serverurl);
          AppConfig.url = this.apiUrl.apiurl.serverurl;
        });
    }
    public getJSON(): Observable<any> {
      const jsonFile = `assets/config/api.${environment.name}.json`;
      return this.http.get(jsonFile);
  }
}

export class MainServiceUrl{
  public static get serverUrl(): string {
    return localStorage.getItem('apiurl');
  }
}
export const GAMEJSON = Object.freeze({
  DATA: { error: true, message: 'gameData', data: [] }
});


export const GAMEDASHBOARDAUDIO = Object.freeze({
  VOLUMEDOWN: {
    HOVER: 'assets/games/audio/tina-welcome-message.mp3',
    OUT: '',
    CLICK: 'assets/games/audio/tina-welcome-message-tina-speaking.mp3'
  },
  WELCOMEAUDIO:{
    TINA: 'assets/games/tina/audio/welcomeaudio.mp3',
    RAHUL: 'assets/games/rahul/audio/welcomeaudio.mp3'
  },
  GAMESTART: {
    FIRST: 'assets/games/audio/s1.mp3',
    WAITING: 'assets/games/audio/waiting.mp3',
    LATE: 'assets/games/audio/late.mp3',
    FINAL: 'assets/games/audio/goodbye.mp3',
    SLEEP: 'assets/games/audio/sleep.mp3',
    WAKEUP: 'assets/games/audio/wake_up.mp3',
    HOWYOUFEEL : 'assets/games/audio/howyoufeel.mp3'
  },
  EXITBUTTON: {
    HOVER: 'assets/games/audio/exit.mp3', OUT: '',
    CLICK: 'assets/games/audio/will-see-you-soon-goodbye.mp3'
  },
  VOLUMEPLAYAGAIN: 'assets/games/dashboard/click-audio-again.mp3',
  ONLOAD: 'assets/games/audio/tina-welcome-message.mp3',
  PLAYHOVER: 'assets/games/audio/play-hover.mp3',
  SLIDEHOVER: '/slide_audio.mp3',
  PERVIOUSSCREEN: 'assets/games/dashboard/previous-screen.mp3',
  NEXTSCREEN: 'assets/games/dashboard/next-screen.mp3'


});
// 35.165.218.71
export const POSTURL = Object.freeze({

  FORNTENDURL: environment.FRONTENDURL,
  SERVICEURL:MainServiceUrl.serverUrl,
  CHECKTOKEN: MainServiceUrl.serverUrl + '/login/tokencheck',
  DASHBOARD: {
    coresubject: MainServiceUrl.serverUrl + '/coreframeworks/getcoreframeworks',
    schedulartask: MainServiceUrl.serverUrl + '/dailyscheduler/getbykidid',
    parentcoresubject: MainServiceUrl.serverUrl + '/coreframeworks/getparentcoreframeworks',
  },
  FILEUPLOAD:{
    uploadAction:MainServiceUrl.serverUrl + '/fileupload/uploadAction',
    uploadfilesave:MainServiceUrl.serverUrl + '/fileupload/uploadfilesave',
  },
  PHYSICAL_INFO: {
    create: MainServiceUrl.serverUrl + '/nidarakidphysicalinfo/create',
    getid: MainServiceUrl.serverUrl + '/nidarakidphysicalinfo/getbyid',
    update: MainServiceUrl.serverUrl + '/nidarakidphysicalinfo/update',
    getall: MainServiceUrl.serverUrl + '/nidarakidphysicalinfo/viewall'
  },
  USERTC:{
    getbyid: MainServiceUrl.serverUrl + '/nidarauseragreetc/getbyid',
    create: MainServiceUrl.serverUrl + '/nidarauseragreetc/create',
  },
  PRENTFEEDBACK: {
    viewall:MainServiceUrl.serverUrl + '/parentfeedback/viewall',
    create:MainServiceUrl.serverUrl + '/parentfeedback/create',
    startsession:MainServiceUrl.serverUrl + '/parentfeedback/startsession',
  },
  RESIDNCEDETAIL: {
    create: MainServiceUrl.serverUrl + '/users/countryupdatebyuserid',
    update: MainServiceUrl.serverUrl + '/users/countryupdatebyuserid',
    getid: MainServiceUrl.serverUrl + '/users/getcountryinfo',
    getall: MainServiceUrl.serverUrl + '/countries/viewall',
    getcountryinfo: MainServiceUrl.serverUrl + '/countries/viewall'
  },
  CHILDREN: {
    DASHBOARD: MainServiceUrl.serverUrl + '/guidedlearningschedule/getkidgames',
    PROFILE: MainServiceUrl.serverUrl + '/nidarakidprofile/save',
    PROFILE_UPDATE: MainServiceUrl.serverUrl + '/nidarakidprofile/update',
    getbaselineinfo: MainServiceUrl.serverUrl + '/nidarakidprofile/getbaselineinfo',
    childbaselinecreat: MainServiceUrl.serverUrl + '/nidarakidprofile/childbaselinecreat',
    childdeactive: MainServiceUrl.serverUrl + '/nidarakidprofile/childdeactive',
    GETID: MainServiceUrl.serverUrl + '/nidarakidprofile/getbyid',
    PROFILE_IMAGE: MainServiceUrl.serverUrl + '/imageupload/imageupload',
    childResgiter: MainServiceUrl.serverUrl + '/nidarakidprofile/childResgiter',
    EDUINFORMTION: {
      create: MainServiceUrl.serverUrl + '/answers/create',
      update: MainServiceUrl.serverUrl + '/answers/create',
      getid: MainServiceUrl.serverUrl + '/prenidaraquestionnaire/getbyid',
      getall: MainServiceUrl.serverUrl + '/prenidaraquestionnaire/getall',
      gradeinfo: MainServiceUrl.serverUrl + '/grade/viewall',
      boardinfo: MainServiceUrl.serverUrl + '/boardofeducation/viewall',
      getquestion: MainServiceUrl.serverUrl + '/questions/getprenidaraquestions',
      updateselect: MainServiceUrl.serverUrl + '/nidarakidprofile/kid_board_of_education',
      getrelationship: MainServiceUrl.serverUrl + '/relationships/viewall',
      getpackage: MainServiceUrl.serverUrl + '/guidedlearning/getguidedlearnings'
    },
    NUTRITION: {
      getquestion: MainServiceUrl.serverUrl + '/questions/getprenidaraquestions',
      create: MainServiceUrl.serverUrl + '/answers/create',
      update: MainServiceUrl.serverUrl + '/prenidaraquestionnaire/update'
    }
  },
  PARENTS: {
    create: MainServiceUrl.serverUrl + '/users/save',
    getbyuserid: MainServiceUrl.serverUrl + '/users/getbyid',
    update: MainServiceUrl.serverUrl + '/users/update',
    savedoctorinfo : MainServiceUrl.serverUrl + '/users/seveuserinfo',
    getid: MainServiceUrl.serverUrl + '/users/getmyaccountinfo',
    getall: MainServiceUrl.serverUrl + '/nidaraparentsprofile/viewall',
    viewall: MainServiceUrl.serverUrl + '/users/viewall',
    getparentinfo: MainServiceUrl.serverUrl + '/kidparentsmap/kidinfo',
    kidinfo_doctor: MainServiceUrl.serverUrl + '/kidparentsmap/kidinfo_doctor',
    createdailyroutinestatus: MainServiceUrl.serverUrl + '/kidparentsmap/dailyroutine_status',
    updatedailyroutinestatus: MainServiceUrl.serverUrl + '/kidparentsmap/dailyroutine_status_update',
    activatenidara: MainServiceUrl.serverUrl + '/dailyscheduler/activatenidara',
    healthquestion: MainServiceUrl.serverUrl + '/healthdevedaysmap/getbykididdaymap',
    healthanswer: MainServiceUrl.serverUrl + '/healthdevedaysmap/getbyparentquestionday',
    deactive: MainServiceUrl.serverUrl + '/whyareyouleaving/viewall',
    delete: MainServiceUrl.serverUrl + '/users/statusupdate',
    getparentgame: MainServiceUrl.serverUrl + '/healthdevedaysmap/getbyparentgame',
    getparentgamefirst: MainServiceUrl.serverUrl + '/healthdevedaysmap/getbyparentgamefirsteducation',
    chidexpriychack: MainServiceUrl.serverUrl + '/guidedlearningdaygamemap/chidexpriychack',
    healthdoctoranswer: MainServiceUrl.serverUrl + '/healthdevedaysmap/getbyhealthkidanswer',
    getbyid: MainServiceUrl.serverUrl + '/healthdevedaysmap/getbykidinfo',
    getParentInfoview: MainServiceUrl.serverUrl + '/users/getparentinfobyfilter',
  },
  KID_INFO: {
    viewall: MainServiceUrl.serverUrl + '/nidarakidprofile/viewall',
    getbychidinfo: MainServiceUrl.serverUrl + '/nidarakidprofile/viewchildinfofilter',
    schoolviewall: MainServiceUrl.serverUrl + '/nidarakidschoolinfo/viewall',
  },
  BILLING_ADDRESS: {
    create: MainServiceUrl.serverUrl + '/nidaraparentsaddressinfo/create',
    getid: MainServiceUrl.serverUrl + '/nidaraparentsaddressinfo/getaddressinfo',
    getall: MainServiceUrl.serverUrl + '/nidaraparentsaddressinfo/viewall',
    update: MainServiceUrl.serverUrl + '/nidaraparentsaddressinfo/update'
  },
  SCHOOL_INFO: {
    create: MainServiceUrl.serverUrl + '/nidarakidschoolinfo/create',
    getid: MainServiceUrl.serverUrl + '/nidarakidschoolinfo/getbyid',
    getall: MainServiceUrl.serverUrl + '/nidarakidschoolinfo/viewall',
    update: MainServiceUrl.serverUrl + '/nidarakidschoolinfo/update'
  },
  CAREGIVER_INFO: {
    create: MainServiceUrl.serverUrl + '/nidarakidcaregiverinfo/create',
    getid: MainServiceUrl.serverUrl + '/nidarakidcaregiverinfo/getbyid',
    getall: MainServiceUrl.serverUrl + '/nidarakidcaregiverinfo/viewall',
    update: MainServiceUrl.serverUrl + '/nidarakidcaregiverinfo/update'
  },
  LANGUAGE_INFO: {
    create: MainServiceUrl.serverUrl + '/nidarakidlanguageinfo/create',
    getid: MainServiceUrl.serverUrl + '/nidarakidlanguageinfo/getbyid',
    getall: MainServiceUrl.serverUrl + '/nidarakidlanguageinfo/viewall',
    update: MainServiceUrl.serverUrl + '/nidarakidlanguageinfo/update'
  },
  FIRENDS_INFO: {
    create: MainServiceUrl.serverUrl + '/nidarakidfriendsinfo/create',
    getid: MainServiceUrl.serverUrl + '/nidarakidfriendsinfo/getbyid',
    getall: MainServiceUrl.serverUrl + '/nidarakidfriendsinfo/viewall',
    update: MainServiceUrl.serverUrl + '/nidarakidfriendsinfo/update'
  },
  FAMILY_INFO: {
    create: MainServiceUrl.serverUrl + '/nidarakidfamilyinfo/create',
    getid: MainServiceUrl.serverUrl + '/nidarakidfamilyinfo/getbyid',
    getall: MainServiceUrl.serverUrl + '/nidarakidfamilyinfo/viewall',
    update: MainServiceUrl.serverUrl + '/nidarakidfamilyinfo/update'
  },
  AUTH_INFO: {
    usercreate: MainServiceUrl.serverUrl + '/login/usercreate',
    productmailsend: MainServiceUrl.serverUrl + '/login/productmailsend',
    successtokensend: MainServiceUrl.serverUrl + '/login/successtokensend',
    register: MainServiceUrl.serverUrl + '/login/register',
    emailverify: MainServiceUrl.serverUrl + '/login/emailverify',
    address: MainServiceUrl.serverUrl + '/login/uaseraddress',
    login: MainServiceUrl.serverUrl + '/login/logincheck',
    posttokenSend: MainServiceUrl.serverUrl + '/login/posttokenSend',
    sendusertoken: MainServiceUrl.serverUrl + '/login/tokenSend',
    logout: MainServiceUrl.serverUrl + '/login/logout',
    getuserinfobytoken: MainServiceUrl.serverUrl + '/login/getuserinfobytoken',
    changepassword: MainServiceUrl.serverUrl + '/login/changepassword',
    forgotpassword: MainServiceUrl.serverUrl + '/login/forgotpassword',
    resetpassword: MainServiceUrl.serverUrl + '/login/resetpassword',
    getparentvalidation: MainServiceUrl.serverUrl + '/login/parentvalidate',
  },
  EMAILS: {
    cartabond: MainServiceUrl.serverUrl + '/email/birthday',
    cartabondthree: MainServiceUrl.serverUrl + '/email/cartabondthree',
    birthday: MainServiceUrl.serverUrl + '/email/birthday',
    viewall: MainServiceUrl.serverUrl + '/email/cartabondtow',
    emailsend: MainServiceUrl.serverUrl + '/emailnew/attendance',
    parentqus: MainServiceUrl.serverUrl + '/emailnew/parentqus',
    companyenquiry: MainServiceUrl.serverUrl + '/emailnew/companydata',
    sendmailinparend: MainServiceUrl.serverUrl + '/email/sendmailinparend',
    invoceemailsend: MainServiceUrl.serverUrl + '/emailnew/invoceemailsend',
    custominvoceemailsend: MainServiceUrl.serverUrl + '/emailnew/custominvoceemailsend',
    sendcontact: MainServiceUrl.serverUrl + '/emailnew/sendcontact',
    senddoctorinfo: MainServiceUrl.serverUrl + '/emailnew/senddoctorinfo',
  },
  BETASERVICE: {
    guidded: MainServiceUrl.serverUrl + '/answers/setguidedlearning'
  },
  MEDICAL_CONCERN: {
    create: MainServiceUrl.serverUrl + '/prenidaramedicalconcerns/create',
    update: MainServiceUrl.serverUrl + '/prenidaramedicalconcerns/update',
    getid: MainServiceUrl.serverUrl + '/prenidaramedicalconcerns/getbynidarakidprofileid',
    getall: MainServiceUrl.serverUrl + '/prenidaramedicalconcerns/viewall'
  },
  DAILYSCHEDULER: {
    create: MainServiceUrl.serverUrl + '/dailyscheduler/save',
    update: MainServiceUrl.serverUrl + '/dailyscheduler/save',
    getid: MainServiceUrl.serverUrl + '/dailyscheduler/getbykidid',
    getall: MainServiceUrl.serverUrl + ''
  },
  DAILYROUTINE_INFO: {
    viewall: MainServiceUrl.serverUrl + '/dailyroutine/viewall',
    create: MainServiceUrl.serverUrl + '/dailyroutine/create',
    update: MainServiceUrl.serverUrl + '/dailyroutine/save',
    createdattendance: MainServiceUrl.serverUrl + '/dailyroutine/dailyattendance',
    getid: MainServiceUrl.serverUrl + '/dailyroutine/getbykidid',
    getroutineid: MainServiceUrl.serverUrl + '/dailyroutine/getroutinekidid',
    routinestatus: MainServiceUrl.serverUrl + '/dailyroutine/routinestatus',
    getsessionstartend: MainServiceUrl.serverUrl + '/dailyroutine/getsessionstartend',
    getsessionstartendbyid: MainServiceUrl.serverUrl + '/dailyroutine/getsessionstartendbyid',
  },
  DAILYROUTINE: {
    create: MainServiceUrl.serverUrl + '/answers/create',
    update: MainServiceUrl.serverUrl + '/prenidaraquestionnaire/update',
    getid: MainServiceUrl.serverUrl + '/prenidaraquestionnaire/getbyid',
    getall: MainServiceUrl.serverUrl + '/prenidaraquestionnaire/viewall'
  },
  INTERESTDEVE: {
    create: MainServiceUrl.serverUrl + '/answers/create',
    update: MainServiceUrl.serverUrl + '',
    getid: MainServiceUrl.serverUrl + '',
    getall: MainServiceUrl.serverUrl + '',
    getquestion: MainServiceUrl.serverUrl + '/questions/getprenidaraquestions'

  },
  PAYMENTINFO: {
    wp: 'http://www.nidarachildren.com/list-orders.php',
    getinfo: MainServiceUrl.serverUrl + '/guidedlearning/paymentinfo',
    cancelSubscription: MainServiceUrl.serverUrl + '/nidarakidprofile/cancel_subscription'
  },

  DEACTIVEACCOUNT: MainServiceUrl.serverUrl + '/accountstatus/deactivate',
  DEACTIVEACCOUNTQUESTION: MainServiceUrl.serverUrl + '/whyareyouleaving/viewall',
  GAME_INFO: {
    viewall: MainServiceUrl.serverUrl + '/gamesdatabasenew/viewall',
    getgameurl: MainServiceUrl.serverUrl + '/gamesdatabasenew/getsignedgameurl',
    getgameinfo: MainServiceUrl.serverUrl + '/gamescoreframmap/viewall',
    getbyid: MainServiceUrl.serverUrl + '/gamesdatabasenew/getbyid',
    gatdaywies: MainServiceUrl.serverUrl + '/guidedlearningdaygamemap/getdailygame_new',
    gatdaywiesviewall: MainServiceUrl.serverUrl + '/guidedlearningdaygamemap/viewall',
    getgamesanwers: MainServiceUrl.serverUrl + '/gameanswers/viewall',
    getgameresult: MainServiceUrl.serverUrl + '/gameanswers/getgameresult',
    getgamesquestionanswers: MainServiceUrl.serverUrl + '/gamesquestionanswer/viewall',
    getbygameid: MainServiceUrl.serverUrl + '/gamesquestionanswer/getbygameid',
    getgames: 'assets/appData.json',
    sessionid: MainServiceUrl.serverUrl + '/gamesdatabase/getSessionMainId',
    getgameexcelsheet: MainServiceUrl.serverUrl + '/gamesdatabase/getgameexcelsheet',
    getgamefilter: MainServiceUrl.serverUrl + '/gamescoreframmap/getgamefilter',
    // viewall:MainServiceUrl.serverUrl + "/gamesdatabase/viewall",
    gameviewall: MainServiceUrl.serverUrl + '/gamescoremap/viewall',
    gameupdate: MainServiceUrl.serverUrl + '/gamesdatabase/update',
    // getgameinfo:MainServiceUrl.serverUrl + "/gamescoreframmap/viewall",
    getbygrade: MainServiceUrl.serverUrl + '/gamescoreframmap/getbygamegrade',
    getbystandint: MainServiceUrl.serverUrl + '/gamescoreframmap/getbystandared',
    update: MainServiceUrl.serverUrl + '/gamescoremap/update',
    create: MainServiceUrl.serverUrl + '/gamesdatabase/create',
    questionanswer: MainServiceUrl.serverUrl + '/gamesdatabase/questionanswer',
    // getgamesquestionanswers: MainServiceUrl.serverUrl + "/gamesquestionanswer/viewall",
    updategamesquestionanswers: MainServiceUrl.serverUrl + '/gamesquestionanswer/update',
    gethealthmaster: MainServiceUrl.serverUrl + '/gametagginghealthmaster/viewall',
    getfullslidmasters: MainServiceUrl.serverUrl + '/gametagginghealthmaster/excel',
    saveexcelfile: MainServiceUrl.serverUrl + '/gametagginghealthmaster/saveexcelfile',
  },
  // GUIDED_LEARNING: {
  //   getguidedlearning: MainServiceUrl.serverUrl + '/guidedlearningschedule/getguidedlearning',
  //   create: MainServiceUrl.serverUrl + '/guidedlearningschedule/create',
  //   guidedlist: MainServiceUrl.serverUrl + '/guidedlearning/viewall',
  // },
  GUIDED_LEARNING: {
    getguidedlearning: MainServiceUrl.serverUrl + '/guidedlearningschedule/getguidedlearning',
    create: MainServiceUrl.serverUrl + '/guidedlearningschedule/create',
    guidedlist: MainServiceUrl.serverUrl + '/guidedlearning/viewall',
    guidedSchedule: MainServiceUrl.serverUrl + '/guidedlearningschedule/viewall',
    guidedgamemap: MainServiceUrl.serverUrl + '/guidedlearninggamesmap/create',
    getid: MainServiceUrl.serverUrl + '/guidedlearningschedule/getbyid',
    guidedScheduleday: MainServiceUrl.serverUrl + '/guidedlearningdaygamemap/getbygrade',
    getbyid: MainServiceUrl.serverUrl + '/guidedlearningdaygamemap/gettaggingmap',
    update: MainServiceUrl.serverUrl + '/guidedlearningdaygamemap/update',
    getgamelist: MainServiceUrl.serverUrl + '/gamescoreframmap/getgamelistcoremap'
  },
  GAMEDATA: {
    alphabetic: MainServiceUrl.serverUrl + '/gamesdatabasenew/getgameinfobygameid',
    answer: MainServiceUrl.serverUrl + '/gamesdatabasenew/savegamesresult'
  },
  HEALTH: {
   create: MainServiceUrl.serverUrl + '/healthparentanswer/create',
    sevechildinfo: MainServiceUrl.serverUrl + '/healthparentanswer/sevechildinfo',
    parentgame: MainServiceUrl.serverUrl + '/parentgameanswer/create',
    sendparentanswer: MainServiceUrl.serverUrl + '/healthdevedaysmap/sendparentanswer',
    viewall: MainServiceUrl.serverUrl + '/healthdevelopmentcat/viewall',
    getschoolresult: MainServiceUrl.serverUrl + '/healthdevelopmentcat/getschoolresult',
    getschoolresultbystandid : MainServiceUrl.serverUrl + '/healthdevelopmentcat/getschoolresultbystandid',
    getschoolresultbyindicator : MainServiceUrl.serverUrl + '/healthdevelopmentcat/getschoolresultbyindicator',
    getgameresultbyid : MainServiceUrl.serverUrl + '/healthdevelopmentcat/getgameresultbyid',
    creatquestion: MainServiceUrl.serverUrl + '/healthdevelopmentquestion/create',
    questionviewall: MainServiceUrl.serverUrl + '/healthdevelopmentquestion/viewall',
    getbyhealthval: MainServiceUrl.serverUrl + '/healthdevelopmentquestion/getbyhealthval',
    update: MainServiceUrl.serverUrl + '/healthdevelopmentquestion/update',
    getbycoreframe: MainServiceUrl.serverUrl + '/healthdevelopmentquestion/getbyhealthcore',
    daysquestion: MainServiceUrl.serverUrl + '/healthdevequesview/viewall',
    daymapcreate: MainServiceUrl.serverUrl + '/healthdevedaysmap/create',
    daymapviewall: MainServiceUrl.serverUrl + '/healthdevedaysmap/viewall',
    daymapquesfilter: MainServiceUrl.serverUrl + '/healthdevedaysmap/getbydaymapques',
    getbygradeid: MainServiceUrl.serverUrl + '/healthdevedaysmap/getbygradeidqution',
    daymapupdate: MainServiceUrl.serverUrl + '/healthdevedaysmap/update'
  },
  WEBADMIN: {
    NOTIFYME: MainServiceUrl.serverUrl + '/login/outofindiamail',
     GETCLIENTIP: MainServiceUrl.serverUrl + '/accountstatus/getclientip',
     viewall: MainServiceUrl.serverUrl + '/ncproduct/viewall',
     save: MainServiceUrl.serverUrl + '/ncproduct/save',
     payment: MainServiceUrl.serverUrl + '/ncproduct/payment',
     getbyid: MainServiceUrl.serverUrl + '/ncproduct/getbyid',
     getproduct: MainServiceUrl.serverUrl + '/ncproduct/getProductInfo',
     getproductlist: MainServiceUrl.serverUrl + '/ncproduct/getProductByTypeId',
     searchproduct: MainServiceUrl.serverUrl + '/ncproduct/searchproduct',
     addproductcart: MainServiceUrl.serverUrl + '/ncproduct/addProductInCart',
     deletebyid: MainServiceUrl.serverUrl + '/ncproduct/deletebyid',
     deleteCartProduct: MainServiceUrl.serverUrl + '/ncproduct/cartDelete',
     getByTypeId: MainServiceUrl.serverUrl + '/ncproduct/getByTypeId',
     getvaluebyapiurl: MainServiceUrl.serverUrl + '/coreWebsitePaymentGateway/getvaluebyapiurl',
     COUPON: {
       viewall: MainServiceUrl.serverUrl + '/ncdiscountcoupon/viewall',
       save: MainServiceUrl.serverUrl + '/ncdiscountcoupon/save',
       getbyid: MainServiceUrl.serverUrl + '/ncdiscountcoupon/getbyid',
       deletebyid: MainServiceUrl.serverUrl + '/ncdiscountcoupon/deletebyid',
       setCouponDiscount: MainServiceUrl.serverUrl + '/ncdiscountcoupon/setCouponDiscount',
       getbycouponcodetype: MainServiceUrl.serverUrl + '/ncdiscountcoupon/getbycouponcodetype'
     },
     ORDER: {
       viewall: MainServiceUrl.serverUrl + '/ncorder/viewall',
       getbyid: MainServiceUrl.serverUrl + '/ncorder/getbyid',
       addproductorder: MainServiceUrl.serverUrl + '/ncorder/addproductorder',
       ordertotalamount: MainServiceUrl.serverUrl + '/ncorder/ordertotalamount',
       invocie: MainServiceUrl.serverUrl + '/ncproduct/invoceemailsend',
     }
   },
   DOCTOR: {
      parentlist: MainServiceUrl.serverUrl + '/doctorcode/getparentdata',
      doctorvisiterlist: MainServiceUrl.serverUrl + '/doctorcode/doctorvisiterlist',
      getvisitlist: MainServiceUrl.serverUrl + '/doctorcode/getvisitlist',
      parentcomplete: MainServiceUrl.serverUrl + '/doctorcode/parentcomplete',
      getvisitlistbychildid: MainServiceUrl.serverUrl + '/doctorcode/getvisitlistbychildid',
      getgameresult: MainServiceUrl.serverUrl + '/healthdevedaysmap/getgameresult',
      getgameresulttwo: MainServiceUrl.serverUrl + '/healthdevedaysmap/getgameresulttwo',
      gethealthgamevalue: MainServiceUrl.serverUrl + '/healthdevedaysmap/gethealthgamevalue',
      getindicatorbygame: MainServiceUrl.serverUrl + '/healthdevedaysmap/getindicatorbygame',
      getgameresultbysubject: MainServiceUrl.serverUrl + '/healthdevedaysmap/getgameresultbysubject',
      getgamefilterbysubject: MainServiceUrl.serverUrl + '/healthdevedaysmap/getgamefilterbysubject',
      getgameinfobyid: MainServiceUrl.serverUrl + '/healthdevedaysmap/getgameinfobyid',
      getgameinfofilterbyid: MainServiceUrl.serverUrl + '/healthdevedaysmap/getgameinfofilterbyid',
      getdoctorlist: MainServiceUrl.serverUrl + '/doctorcode/getdoctorlist',
      addhospitaladdress: MainServiceUrl.serverUrl + '/doctorcode/addhospitaladdress',
   },
   CORE_FREAM: {
      viewall: MainServiceUrl.serverUrl + '/coreframeworks/viewall',
      subjectmapcreate: MainServiceUrl.serverUrl + '/coreframeworks/subjectmapcreate'
    },
    SUBJECT_INFO: {
      viewall: MainServiceUrl.serverUrl + '/subject/viewall',
      getsubjectdata: MainServiceUrl.serverUrl + '/subject/getsubjectdata',
    },
    CORE_FRAMEWORK: {
      viewall: MainServiceUrl.serverUrl + '/coreframeworks/viewall',
      subjectmapcreate: MainServiceUrl.serverUrl + '/coreframeworks/subjectmapcreate'
    },
    GRADE: {
      viewall: MainServiceUrl.serverUrl + '/grade/viewall'
    },
    COUNTRY_INFO: {
      viewall: MainServiceUrl.serverUrl + '/countries/viewall',
      stateviewall: MainServiceUrl.serverUrl + '/state/viewall'
    },
    GRADING_REPORTING: {
      viewall: MainServiceUrl.serverUrl + '/gradingreporting/viewall',
      create: MainServiceUrl.serverUrl + '/gradingreporting/create',
      update: MainServiceUrl.serverUrl + '/gradingreporting/update',
      grframeview: MainServiceUrl.serverUrl + '/grframwork/viewall',
      grtypeview: MainServiceUrl.serverUrl + '/grtype/viewall',
      getgradingcore: MainServiceUrl.serverUrl + '/gradingreporting/getbycorewise',
      getgradingsub: MainServiceUrl.serverUrl + '/gradingreporting/getbysubjectwise',
    },
    PARENT_GAMES: {
      viewall: MainServiceUrl.serverUrl + '/parentgamesdatabase/viewall',
      gameupdate: MainServiceUrl.serverUrl + '/parentgamesdatabase/gameupdate',
      standardupdate: MainServiceUrl.serverUrl + '/parentgamesdatabase/standardupdate',
      create: MainServiceUrl.serverUrl + '/parentgamesdatabase/create',
      getcoremap: MainServiceUrl.serverUrl + '/parentgamesdatabase/getbycoremap',
      getcoremapsub: MainServiceUrl.serverUrl + '/parentgamesdatabase/getbycoremapsub',
      getcoremapind: MainServiceUrl.serverUrl + '/parentgamesdatabase/getbycoremapind',
      gameviewall: MainServiceUrl.serverUrl + '/parentgameguided/viewall',
      gamedaycreate: MainServiceUrl.serverUrl + '/parentgameguided/create',
      parentguided: MainServiceUrl.serverUrl + '/parentgameguidedlearing/viewall',
    },
    DAYS: {
      viewall: MainServiceUrl.serverUrl + '/days/viewall',
      healthviewall: MainServiceUrl.serverUrl + '/dayshealth/viewall'
    },
    INDICATOR: {
      viewall: MainServiceUrl.serverUrl + '/indicators/viewall',
      create: MainServiceUrl.serverUrl + '/indicators/create'
    },

    STANDARD: {
      viewall: MainServiceUrl.serverUrl + '/standard/viewall',
      create: MainServiceUrl.serverUrl + '/standard/create',
      standardmapview: MainServiceUrl.serverUrl + '/standardindicatorsmap/viewall',
      getstandardmap: MainServiceUrl.serverUrl + '/standardindicatorsmap/getbystandardmap',
      getindicatorsdmap: MainServiceUrl.serverUrl + '/standardindicatorsmap/getbyindicatormap',
      getbystandintmap: MainServiceUrl.serverUrl + '/standardindicatorsmap/getby_grade_coreframe'
    },
    ANNOUNCEMENT: {
      viewall: MainServiceUrl.serverUrl + '/announcement/viewall',
      create: MainServiceUrl.serverUrl + '/announcement/create',
      getdatabyid: MainServiceUrl.serverUrl + '/announcement/getdatabyid',
      getannouncement: MainServiceUrl.serverUrl + '/announcement/getannouncement',
    },
    ADAPTIVELEARNING: {
      viewall: MainServiceUrl.serverUrl + '/gameAdaptiveLearning/viewall',
      getbysubject: MainServiceUrl.serverUrl + '/gameAdaptiveLearning/getbysubject',
      geteditmode: MainServiceUrl.serverUrl + '/gameAdaptiveLearning/geteditmode',
      create: MainServiceUrl.serverUrl + '/gameAdaptiveLearning/create',
      update: MainServiceUrl.serverUrl + '/gameAdaptiveLearning/update',
      deactive: MainServiceUrl.serverUrl + '/gameAdaptiveLearning/deactive',
    }
});
export const ROUTER = Object.freeze({
  PATH: []
});
