import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  DarkModeParent: boolean;
  ThemeStyleSetting: any;
  constructor() { this.DarkModeParent = false}

  
  OnThemeChange(dark: boolean){
    if(dark){
      this.ThemeStyleSetting='';      
    }else{
      this.ThemeStyleSetting='theme-alternate'
    }
    
  }

  ngOnInit(): void {
    //this.OnThemeChange(this.DarkModeParent);
  }

}
