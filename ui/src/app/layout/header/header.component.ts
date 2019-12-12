import { Component, OnInit } from '@angular/core';
import { NAV_LINKS } from '../../common/constants/nav-links';
import { GetDataService } from '../../common/services/get-data.service';

@Component({
    selector   : 'app-header',
    templateUrl: './header.component.html',
    styleUrls  : ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
links = NAV_LINKS;
    constructor(private getDataService: GetDataService) { }

    ngOnInit() {
    }

    useLanguage(lang){
        this.getDataService.getTranslateLang(lang);
    }

}
