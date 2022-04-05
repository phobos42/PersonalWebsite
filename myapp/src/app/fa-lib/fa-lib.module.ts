import { NgModule } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';

// import { far } from '@fortawesome/free-regular-svg-icons';

const falist= [
  faCoffee
]

@NgModule({  
  imports: [
  
  ],
  exports:[
    
  ]
})
export class FaLibModule {

  constructor(library: FaIconLibrary){
    library.addIcons(
      faCoffee,
      
      )
  }
 }
