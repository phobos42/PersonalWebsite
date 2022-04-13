import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.scss']
})
export class ResumePageComponent implements OnInit {

  pdfSrc = "/api/Garrett_Ruffner_Resume.pdf";
  httpData: any;
  viewStyle: any;
  themeClass: string;
  themesub: Subscription;

  // resizeObservable$: Observable<Event>
  // resizeSubscription$: Subscription

  constructor(private themeService: ThemeService, private http: HttpClient){        
    this.themeClass=''
    this.themesub = this.themeService.themeSetting.subscribe(data => {
      this.themeClass = data;      
    })

    // this.resizeObservable$ = fromEvent(window, 'resize')
    // this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
    //   this.onResize(evt);
    // })
  }

  ngOnInit(): void {
   
  //  this.onResize(document.querySelector('body')?.clientHeight)
    
  }
  onResize(event: any){ 
    // var navheight = document.querySelector('mat-toolbar')?.clientHeight;
    // if(navheight == undefined){
    //   navheight = 0;
    // }
    // var totalheight = document.querySelector('#main-content')?.clientHeight;
    // if(totalheight == undefined){
    //   totalheight = 0;
    // }

  
    // var navheight = document.querySelector('mat-toolbar')?.clientHeight;
    
    // if(typeof(event) == 'object'){
    //   this.viewStyle = event.target.innerHeight;
    // }else{
    //   this.viewStyle = event -navheight;
    // }
    // this.viewStyle = totalheight - navheight;
    
  }
  ngOnDestroy(){
   this.themesub.unsubscribe();   
   //this.resizeSubscription$.unsubscribe();
  }

}
