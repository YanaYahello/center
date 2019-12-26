import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
    show     = false;
    isOpen   = false;

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
            .subscribe(() => {
                window.scrollTo(0, 0);
            });
    }

    toggleFormForCall() {
        this.isOpen = !this.isOpen;
    }
}
