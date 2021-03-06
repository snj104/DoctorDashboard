import { ChildrenService } from '../../../service/children.service';
//import { User } from './../../main-website/product-blog/user';
import { ComponentsService } from '../../../service/components.service';
import { DoctorDashboardService } from '../../doctor-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-qus-home',
  templateUrl: './parent-qus-home.component.html',
  styleUrls: ['./parent-qus-home.component.css']
})
export class ParentQusHomeComponent implements OnInit {

  user_id;
   // alert initilaze
   public _response: any = { "status": false,"alert":"info" ,"message": "" };

   // Two-way Binding Initilaze
   public formData: any = {}; // ngModel formData anys intiliaze
   _kidsInformations;
    childLength;
   currentPage: number = 0;
    limitpageNav: number = 10;
    pageNav: number = 0;
    pageArray: number [] = [];
    pageIdx = 0;
  constructor(private router:Router, private activatedRoute:ActivatedRoute,private doctorDashboardService:DoctorDashboardService, private componentsService:ComponentsService,private childrenService:ChildrenService) {

  }

  ngOnInit() { window.scrollTo(0, 0);
    this.user_id = this.activatedRoute.snapshot.params.id;
    let kid_no = localStorage.getItem('kid_count');
    if(kid_no > '0'){
      this.currentPage += 1;
    }
    this.componentsService.getKidsInfoDoctor({'user_id':this.user_id}).subscribe(response=>{
      this._kidsInformations = response.data;
      this.childLength = this._kidsInformations.length;
      for ( let i = 0; i < this._kidsInformations.length; i++) {
        this.pageArray.push(i);
      }
      this.pageNav = this._kidsInformations.length;
      if(this.currentPage == this.childLength){
        this.router.navigate(['/doctor/vistschedule/',this.user_id])
      }
    });

  }

  setGameDetailsView(idx: number) {
    this.currentPage = idx;
  }
  parentQus(){
    this.router.navigate(['parent-question/parent-qus/',this._kidsInformations[this.currentPage].nidara_kid_profile_id]);
    localStorage.setItem('parent_id',this.user_id)
  }
  sendEmail(){
    this.doctorDashboardService.sendEmailParent({'user_id':this.user_id}).subscribe(response =>{
      console.log(response)
      if(response.status){
        this._response['status'] = true;
         this._response['message'] = response.message;
         this._response['alert'] = "alert alert-success";
        this.router.navigate(['/doctor/vistschedule/',this.user_id])
      }
      else{
        this._response['status'] = false;
          this._response['message'] = response.message;
          this._response['alert'] = "alert alert-danger";
      }
    })
  }


}
