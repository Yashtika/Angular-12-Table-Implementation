import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilService {

  constructor(private http: HttpClient) { }

  public cloneObject(obj: any){
      let returnClone: any;
      if(obj){
          returnClone = JSON.parse(JSON.stringify(obj));
      }
      return returnClone;
  }
}