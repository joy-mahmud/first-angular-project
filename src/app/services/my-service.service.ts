import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  OnBtnClicked(name: string){
    alert(`Hello ${name} you clicked the button`)
  }
}
