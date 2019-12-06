import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../environments/environment';
import { IAppConfig } from './app-config.model';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AppConstants {
  public apiUrl:any = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
      this.apiUrl = data;
      localStorage.setItem('gameurl',this.apiUrl.apiurl.gameurl);
      localStorage.setItem('mainurl',this.apiUrl.apiurl.mainurl);
    });
  }
  load() {
}
  public getJSON(): Observable<any> {
    const jsonFile = `assets/config/api.${environment.name}.json`;
    return this.http.get(jsonFile);
  }
}
export class WebUrls{
  public static get gameUrl():string {
    return localStorage.getItem('gameurl');
  }
  public static get mainUrl():string {
    return localStorage.getItem('mainurl');
  }
}
export const CONSTANTS = Object.freeze({
    PAGEURL_MAIN: {
      MAINURL:WebUrls.mainUrl,
      GAMEURL:WebUrls.gameUrl,
    },
    SERVICES: {
        HEADERS: { 'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'token': localStorage.getItem('token')
                }

    },
    PAGETITLE: {
        HOME: 'Premium Early Childhood Development | Nidara-Children',
        ABOUTUS: 'About Us | Nidara-Children',
        OURHISTORY: 'Our History | Nidara-Children',
        TESTIMONALS: 'Testimonals | Nidara-Children',
        TINA : 'Tina | Nidara-Children',
        HEALTHWHOLECHILDDEVELOPMENT: 'Health Whole Child Development | Nidara-Children',
        HEALTHCAREPROVIDERS : 'Healthcare Providres | Nidara-Children',
        PERSONALIZEDLEARNING: 'Personalized Learning | Nidara-Children',
        CONTACTUS: 'Contact Us | Nidara-Children',
        COMPANY: 'Company | Nidara-Children',
        FOUNDARSWELCOME: 'Founders Welcome | Nidara-Children',
        TERMSOFUSE: 'Terms Of Use | Nidara-Children',
        NOTICEOFPRIVACYPRACTICES: 'Notice Of Privacy Practices | Nidara-Children',
        PRIVACYPOLICY: 'Privacy Policy | Nidara-Children',
        COOKIESPOLICY: 'Cookie Policy | Nidara-Children',
        EDITORSPOLICY: 'Editorial Policy | Nidara-Children',
        SITEMAP: 'Sitemap | Nidara-Children',
        EDUCATORS: 'Educators | Nidara-Children',
        STORIES: 'Stories | Nidara-Children',
        FAQS: 'Faqs | Nidara-Children',
        NCBLOG: 'NC-Blog | Nidara-Children',
        INTERESTEXPLORATION: 'Interest Exploration | Nidara-Children',
        GIRL : 'Girl | Nidara-Children',
        BOY: 'Boy | Nidara-Children',
        SIGNIN: 'Sign in | Nidara-Children',
        WEBADMIN: 'NC-Admin',
        CHANGEPASSWORD: 'Nidara - ChangePassword',
        RESETPASSWORD: 'Nidara - ResetPassword',
        FORGOTPASSWORD: 'Nidara - ForgotPassword',
        DASHBOARD: 'Nidara - Dashboard',
        CHILDRENPROFILES: 'Nidara - Children Profiles',
        SCHOOLINFORMATION: 'Nidara - School Information',
        CAREGIVERINFO: 'Nidara - CaregiverInfo',
        CAREGIVERGUIDE: 'Nidara - Caregiver Guide',
        CHILDRENEDUINFORMATION: 'Nidara - Edu Information',
        CHILDPROFILE: 'Nidara - child-profileid-register',
        CHILDRENNUTRITION: 'Nidara - Nutrition',
        DAILYSCHEDULER: 'Nidara - Daily Scheduler',
        RESIDENCEDETAIL: 'Nidara - Residence Detail',
        PARENTSMYACCOUNT: 'Nidara - My Account',
        REACTIVEACCOUNT: 'Nidara - Reactive Account',
        PHYSICALINFO: 'Nidara - Physical Info',
        MEDICALCONCERN: 'Nidara - Medical Concern',
        DEACTIVEACCOUNT: 'Nidara - Deactive Account',
        CHILDRENFRINEDSINFO: 'Nidara - Children Friend Info',
        CHILDRENFAMILYINFO: 'Nidara - Children Family Info',
        CHILDRENLANGUAGEINFO: 'Nidara - Children Language Info',
        BILLINGADDRESS: 'Nidara - Billing Address',
        DAILYROUTINE: 'Nidara - Daily Routine',
        QUICKSTARTGUIDE: 'Nidara - Quick Start Guide',
        CHILDRENREGISTER: 'Nidara - Children Register',
        ACTIVATENIDARA: 'Nidara - Activate Nidara',
        DAILYSESSION: 'Nidara - Daily Session',
        CHILDRENINTERESTDEV: 'Nidara - Children Interest Development',
        PAYMENTINFO: 'Nidara -Payment Info'
    },
    PAGEURL: {
        HOME: 'Home',
        SIGNIN: 'signin',
        SIGNUP: 'signup',
        ADMIN: 'admin-dashboard',
        CHILDPROFILEREG: 'child-profileid-register',
        DASHBOARD: {
            PARENTS: 'dashboard',
            CHILDREN: 'children-dashboard',
            DOCTOR: 'doctor',
        },
        SUPPORT: 'support',
        FORGOTPASSWORD: 'forgotpassword',
        CHANGEPASSWORD: 'changepassword',
        RESETPASSWORD: 'resetpassword',
        CHILDRENPROFILE: 'profiles',
        SCHOOLINFORMATION: 'school-information',
        CAREGIVERINFO: 'caregiver-info',
        CAREGIVERGUIDE: 'caregiver-guide',
        CHILDRENEDUINFORAMTION: 'edu-information',
        CHILDRENNUTRITION: 'nutrition',
        DAILYSCHEDULER: 'daily-schedule',
        RESIDENCEDETAIL: 'residence-detail',
        PARENTSMYACCOUNT: 'parents-account',
        REACTIVEACCOUNT: 'reactive-detail',
        PHYSICALINFO: 'physical-info',
        MEDICALCONCERN: 'medical-concern',
        DEACTIVEACCOUNT: 'account-deactive',
        CHILDRENFRINEDSINFO: 'friend-info',
        CHILDRENFAMILYINFO: 'family-info',
        CHILDRENLANGUAGEINFO: 'language-info',
        BILLINGADDRESS: 'billing-address',
        DAILYROUTINE: 'daily-routine',
        PARENTQUESTIONREPORT: 'parent-questionar',
        PARENTGAMEREPORT: 'parent-game',
        QUICKSTARTGUIDE: 'quick-start-guide',
        CHILDRENREGISTER: 'children-register',
        ACTIVATENIDARA: 'activate-nidara',
        DAILYSESSION: 'daily-session',
        CHILDRENINTERESTDEV: 'interest-deve',
        PAYMENTINFO: 'payment-info',
        NOTFOUND: '404'
    }
});
