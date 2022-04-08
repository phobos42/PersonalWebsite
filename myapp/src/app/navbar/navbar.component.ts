import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../core/services/theme.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  
  ThemeStyleSetting: Observable<string>;
  themeClass: string;

  constructor(private themeService: ThemeService){

    this.ThemeStyleSetting=themeService.themeSetting;
    
    this.themeClass=''
  }

  ngOnInit(): void {    
    this.themeService.themeSetting.subscribe(data => {
     
      this.themeClass = data;
      console.log('navbar',this.themeClass)
    })
  }
}
