import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './core/services/theme.service';
import { OverlayContainer } from "@angular/cdk/overlay";
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  ThemeStyleSetting: Observable<string>;
  themeClass: string;
  constructor( private themeService: ThemeService,private overlayContainer: OverlayContainer){
    this.ThemeStyleSetting=themeService.themeSetting;
    this.themeClass=''
  }

  ngOnInit(): void {

    this.themeService.themeSetting.subscribe(data => {
      this.themeClass = data;
      this.onThemeChange(data);      
    })    
  }

  onThemeChange(theme:string) {
    this.themeClass = theme;
    //console.log(theme);
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-Mode'));
    if (themeClassesToRemove.length) {
       overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(theme);
  }
  
  title = 'Garrett Ruffner';
  
}
