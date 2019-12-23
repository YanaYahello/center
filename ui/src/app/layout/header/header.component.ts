import { Component, OnInit } from '@angular/core';
import { NAV_LINKS } from '@app/common/constants/nav-links';
import { GetDataService } from '@services/get-data.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '@app/shared/components/login-form/login-form.component';

@Component({
    selector   : 'app-header',
    templateUrl: './header.component.html',
    styleUrls  : ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    links = NAV_LINKS;

    constructor(private getDataService: GetDataService,
                private translate: TranslateService,
                public  dialog: MatDialog) { }

    ngOnInit() {
    }

    useLanguage(lang) {
        this.getDataService.getTranslateLang(lang);
        this.translate.use(this.getDataService.getLang());
    }

    openRegistrationForm() {
        const dialogRef = this.dialog.open(LoginFormComponent,{
            width: '450px'
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

}
