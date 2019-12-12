import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  language;
  constructor() { }

  getTranslateLang(lang) {
    this. language = lang;
  }

  sendData(){
    return this.language;
  }
}
