import { Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-theme-chooser',
  templateUrl: './theme-chooser.component.html',
  styleUrls: ['./theme-chooser.component.scss']
})
export class ThemeChooserComponent implements OnInit {

  themeToggle: boolean;
  
  constructor(private cookieService: CookieService,private themeService: ThemeService) {
    this.themeToggle = false;
  }


  themeToggled(){
    var theme = '';
    if(this.themeToggle){
      theme="Dark-Mode"
    }else{
      theme="Light-Mode"
    }
    this.updateTheme(theme)
  }

  updateTheme(theme: string){    
    this.cookieService.set('themeCookie', theme);    
    this.themeService.setTheme(theme)   
    this.themeToggle =  /(?:Dark-Mode)/.test(theme);
  }
  
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void{
    var themesetting = this.cookieService.get('themeCookie');      
     if(themesetting != ''){
      this.updateTheme(themesetting)    
     }else{
       this.updateTheme('Dark-Mode')
     }
    
  }
  

}
