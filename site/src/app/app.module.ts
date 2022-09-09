import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ThemeService } from './core/services/theme.service';
import { ThemeChooserComponent } from './theme-chooser/theme-chooser.component';
import { ExamplePdfViewerComponent } from './example-pdf-viewer/example-pdf-viewer.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClientModule} from '@angular/common/http';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { PdfViewComponent } from './pdf-view/pdf-view.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';




@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    ThemeChooserComponent,
    ExamplePdfViewerComponent,
    ResumePageComponent,
    PdfViewComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    HttpClientModule,
    PdfViewerModule,
  
  
    
  ],
  providers: [CookieService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}


