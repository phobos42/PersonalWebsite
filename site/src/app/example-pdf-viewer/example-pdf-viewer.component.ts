import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-example-pdf-viewer',
  templateUrl: './example-pdf-viewer.component.html',
  styleUrls: ['./example-pdf-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplePdfViewerComponent {
  pdfSrc = "/api/Garrett_Ruffner_Resume.pdf";
  httpData: any;
  bloburl = '';
  /** In most cases, you don't need the NgxExtendedPdfViewerService. It allows you
   *  to use the "find" api, to extract text and images from a PDF file,
   *  to print programmatically, and to show or hide layers by a method call.
  */
  constructor(private pdfService: NgxExtendedPdfViewerService,private http: HttpClient, private _snackBar: MatSnackBar) {
    /* More likely than not you don't need to tweak the pdfDefaultOptions.
       They are a collecton of less frequently used options.
       To illustrate how they're used, here are two example settings: */
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
    // but most devices support much higher resolutions.
    // Increasing this setting allows your users to use higher zoom factors,
    // trading image quality for performance.

    
    }

    ngOnInit(): void {  
      this.getPDF()
    }


    
    getPDF(){
      // this.openSnackBar("Fetching PDF...","");
      const headers = new HttpHeaders({ 'Content-type': 'application/pdf',
      responseType : 'blob',
      Accept : 'application/pdf',
      observe : 'response' });
  
      this.http.get(this.pdfSrc, {headers:headers , responseType:'blob'}).subscribe(data => {
        // console.log(data)
        var file = new Blob([data], {type: 'application/pdf'});
        var fileUrl = URL.createObjectURL(file);
        this.bloburl = fileUrl;
        console.log('file:', fileUrl);
      });
      // this.closeSnackBar();
    }


    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
    closeSnackBar(){
      this._snackBar.dismiss();
    }      
      

  }
