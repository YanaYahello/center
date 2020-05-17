import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {
    isOpen     = false;
    isShowArrow: boolean;
    scrollDown = 150;

    constructor(private translate: TranslateService,
                private router: Router) {
        translate.addLangs(['ua', 'ru']);
        translate.setDefaultLang('ru');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/ua|ru/) ? browserLang : 'ru');
    }

    @HostListener('window:scroll') showArrow() {
        this.isShowArrow = window.pageYOffset > this.scrollDown;
    }

    ngOnInit() {
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                window.scrollTo(0, 0);
            });
    }

    toggleFormForCall(event) {
        if (event.target.tagName === 'IMG') {
            this.isOpen = !this.isOpen;
        }
    }

    goToTop() {
        window.scrollTo({
            top     : 0,
            left    : 0,
            behavior: 'smooth'
        });
    }
}
