import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { FaLibModule } from './fa-lib/fa-lib.module';
import { NavSocialsComponent } from './navbar/nav-socials/nav-socials.component';




// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    NavSocialsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FaLibModule,
   
    
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}


