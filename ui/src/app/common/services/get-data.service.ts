import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GetDataService {
    language;

    constructor() {
    }

    getTranslateLang(lang) {
        this.language = lang;
    }

    getLang() {
        return this.language;
    }
}
