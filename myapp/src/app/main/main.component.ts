import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  
  ThemeStyleSetting: Observable<string>;
  themeClass: string;

  constructor(private themeService: ThemeService){    
    this.ThemeStyleSetting=themeService.themeSetting;
    this.themeClass=''
  }

  ngOnInit(): void {    
    this.themeService.themeSetting.subscribe(data => {
      this.themeClass = data;      
    })
  }

 

}
