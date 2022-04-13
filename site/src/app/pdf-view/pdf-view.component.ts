import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.scss']
})
export class PdfViewComponent implements OnInit {
  pdfSrc = "/api/Garrett_Ruffner_Resume.pdf";  
  bloburl: SafeResourceUrl;
  badurl: string = '';
 
  constructor(private http: HttpClient,private sanitizer: DomSanitizer) {
    this.bloburl = this.sanitizer.bypassSecurityTrustResourceUrl("")
   }

  ngOnInit(): void {
    this.getPDF();
    
  
  }

  getPDF(){
    // this.openSnackBar("Fetching PDF...","");
    const headers = new HttpHeaders({ 'Content-type': 'binary/octet-stream',
    responseType : 'blob',
    Accept : 'application/pdf',
    observe : 'response' });

    this.http.get(this.pdfSrc, {headers:headers , responseType:'blob'}).subscribe(data => {     
      var file = new Blob([data], {type: 'application/pdf'});      
      this.badurl = URL.createObjectURL(file);
      this.bloburl = this.sanitizer.bypassSecurityTrustResourceUrl(this.badurl);      
    });
    
   
    
  }
}
