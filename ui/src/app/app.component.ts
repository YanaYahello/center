import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GetDataService } from './common/services/get-data.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
    show = false;
    backgroundClass;

    constructor(private translate: TranslateService,
                private getDataService: GetDataService,
                private router: Router) {
        translate.setDefaultLang('ru');
    }

    ngOnInit() {
        this.translate.use(this.getDataService.sendData());
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((nav: NavigationEnd) => {
                switch (nav.url) {
                    case '/':
                        this.backgroundClass = 'home-page';
                        break;
                    case '/our-team':
                        this.backgroundClass = 'our-team';
                        break;
                    default:
                        this.backgroundClass = '';
                }
            });
    }
}
