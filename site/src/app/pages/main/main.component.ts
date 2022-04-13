import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pdfSrc = "/api/Garrett_Ruffner_Resume.pdf";
  httpData: any;
  
  ThemeStyleSetting: Observable<string>;
  themeClass: string;

  constructor(private themeService: ThemeService, private http: HttpClient){    
    this.ThemeStyleSetting=themeService.themeSetting;
    this.themeClass=''
  }

  ngOnInit(): void {    
    this.themeService.themeSetting.subscribe(data => {
      this.themeClass = data;      
    })
    // this.getPDF();
  }

  // getPDF(){
  //   const headers = new HttpHeaders({ 'Content-type': 'application/pdf',
  //   responseType : 'blob',
  //   Accept : 'application/pdf',
  //   observe : 'response' });

  //   this.http.get(this.pdfSrc, {headers:headers , responseType:'blob'}).subscribe(data => {
  //     // console.log(data)
  //     var file = new Blob([data], {type: 'application/pdf'});
  //     var fileUrl = URL.createObjectURL(file);
  //     console.log('file:', fileUrl);
  //   });

    //   this.httpData=data;
    //   var file = new Blob([data], { type: 'application/pdf' });
    //     var fileURL = URL.createObjectURL(file);
    //      console.log("data => " , this.httpData);
    //   console.log(" file url => ", fileURL);
    // });
  // }

 

}
