import { Component } from '@angular/core';
import {MyServiceService} from './services/my-service.service'
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyServiceService]
})
export class AppComponent {
  data: any[]=[]
  array1 =[1,2,3,4,5]
  title = 'angular project';
  para = 'This is the paragraph'
  constructor(private btnService:MyServiceService){

  }
  btnClick(){
   
    this.btnService.OnBtnClicked('joy')
  }

  //observable with observable constructor
  myObservable = new Observable((observer)=>{
    setTimeout(()=>{observer.next(1)},1000)
    setTimeout(()=>{observer.next(2)},2000)
    setTimeout(()=>{observer.next(3)},3000)
    // setTimeout(()=>{observer.error(new Error('an error occured,try again later'))},3000)
    setTimeout(()=>{observer.next(4)},4000)
    setTimeout(()=>{observer.complete()},4000)
  })
  getAsyncData(){
    // this.myObservable.subscribe((value:any)=>{
    //   this.data.push(value)
    // },
    // (err)=>{
    //   alert(err.message)
    // }
    // )
    this.myObservable.subscribe({
      next:(value:any)=>{
        this.data.push(value)
      },
      error(err){
        alert(err.message)
      },
      complete(){
        alert('all data are emitted')
      }
    })
  }
  //observable with of operator in rxjs
  observableByOfOperator = of(this.array1)
  getDataByOfOperator(){
    this.observableByOfOperator.subscribe({
      next:(value:any)=>{
        this.data.push(value)
        console.log(this.data)
      },
      error(err){
        alert(err.message)
      },
      complete(){
        alert('data emitted successfully')
      }
    })
  }
}
