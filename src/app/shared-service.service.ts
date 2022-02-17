import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  buttonClicked= new Subject();

  constructor() { }

  getButtonClicked() {
    return this.buttonClicked.asObservable();
  }
}
