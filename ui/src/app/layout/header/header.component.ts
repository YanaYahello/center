import { Component, OnInit } from '@angular/core';
import { NAV_LINKS } from '@app/common/constants/nav-links';
import { GetDataService } from '@services/get-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector   : 'app-header',
    templateUrl: './header.component.html',
    styleUrls  : ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    links = NAV_LINKS;

    constructor(private getDataService: GetDataService,
                private translate: TranslateService) { }

    ngOnInit() {
    }

    useLanguage(lang) {
        this.getDataService.getTranslateLang(lang);
        this.translate.use(this.getDataService.getLang());
    }
}
