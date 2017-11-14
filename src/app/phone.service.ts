import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhoneService{
  BASE_URL: string = 'http://localhost:3000';

  constructor( private myHttp: Http ) { }

  getList(){
    return this.myHttp.get(`${this.BASE_URL}/api/phones`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  get(id){
    return this.myHttp.get(`${this.BASE_URL}/api/phones/${id}`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

  remove(id){
    return this.myHttp.delete(`${this.BASE_URL}/api/phones/${id}`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }
}

//promise is the one, observable is many watching (it is like many promises)
