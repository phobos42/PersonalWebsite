import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ThemeService {
  private _themeSetting: Subject<string> = new Subject<string>();
  themeSetting = this._themeSetting.asObservable();

  setTheme(themeSetting: string) {
    // console.log("new theme",themeSetting)
    this._themeSetting.next(themeSetting);
  }
  
}
