import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {

  
  DarkMode: boolean = false;
  constructor(private cookieService: CookieService) {
    
    
  }
 
  @Output() newThemeChangeEvent = new EventEmitter<boolean>();

  DarkModeToggle(){   
    this.cookieService.set('themeCookie', String(this.DarkMode));
    this.newThemeChangeEvent.emit(this.DarkMode)
  }
  
  
  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void{
    var themesetting = this.cookieService.get('themeCookie');
      
     if(themesetting != undefined){
      this.DarkMode =  (/true/i).test(themesetting);            
     }
     this.DarkModeToggle();
  }
  

}
