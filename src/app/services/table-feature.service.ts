import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableFeatureService {
  public userData = [];
  constructor(private http: HttpClient) { }

  userDet = new Subject<any>();
  public getUserDetails(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }

  public sendUserDetails(userData){
  this.userData = userData;
  console.log('this.userData', this.userData)
  }

  public setData(data) {
    const index = this.userData.findIndex((e) => e.id === data.id);

    if (index === -1) {
        this.userData.push(data);
    } else {
        this.userData[index] = data;
    }
    return this.userData;
  }
  // public sendUpdated(valuOnSubmit) {
  //   this.userData = valuOnSubmit;
  // }
}
