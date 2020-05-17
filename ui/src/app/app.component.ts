import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GetDataService } from '@services/get-data.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
    show = false;
    backgroundImg;

    constructor(private translate: TranslateService,
                private router: Router) {
        translate.addLangs(['ua', 'ru']);
        translate.setDefaultLang('ru');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/ua|ru/) ? browserLang : 'ru');
    }

    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((nav: NavigationEnd) => {
                switch (nav.url) {
                    case '/':
                        this.backgroundImg = 'home-background-img';
                        break;
                    case '/our-team':
                        this.backgroundImg = 'our-team-background-img';
                        break;
                    default:
                        this.backgroundImg = '';
                }
                window.scrollTo(0, 0);
            });
    }
}
