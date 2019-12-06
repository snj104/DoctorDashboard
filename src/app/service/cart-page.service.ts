import { AppService } from './../app.service';
import { Injectable } from '@angular/core';
import { POSTURL} from './../app.config';

@Injectable()
export class CartPageService {

  constructor( private appService: AppService) { }

  productGetById(inputdata){
    this.appService.debugConsole({ "info": "productGetById", "inputData": inputdata, "url": POSTURL.WEBADMIN.getproductlist });
    return this.appService.postAPIData(localStorage.getItem("token"),POSTURL.WEBADMIN.getproductlist, inputdata);
  }


  setGuiddedId(inputdata){
    this.appService.debugConsole({ "info": "setGuiddedId", "inputData": inputdata, "url": localStorage.getItem('apiurl') + '/answers/setguidedlearning' });
    return this.appService.postAPIData(localStorage.getItem("token"), localStorage.getItem('apiurl') + '/answers/setguidedlearning', inputdata);
  }


}
