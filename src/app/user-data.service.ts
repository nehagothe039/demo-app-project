import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userData = new BehaviorSubject<any>({});
  currentUserData = this.userData.asObservable();

  constructor() { }

  saveUserData(data: any): Promise<void> {
    return new Promise((resolve, reject) => {
      // Simulate async operation with setTimeout
      setTimeout(() => {
        this.userData.next(data);
        resolve();
      }, 2000); // Delay to simulate server response time
    });
  }
}
