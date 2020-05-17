import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GetDataService {
    language;

    constructor() {
    }

    getTranslateLang(lang) {
        console.log(lang);
        this.language = lang;
    }

    getLang() {
        console.log(this.language);
        return this.language;
    }
}
