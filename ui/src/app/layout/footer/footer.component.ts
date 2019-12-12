import { Component, OnInit } from '@angular/core';
import { NAV_LINKS } from '../../common/constants/nav-links';

@Component({
    selector   : 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls  : ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
links = NAV_LINKS;
    constructor() { }

    ngOnInit() {
    }

}
