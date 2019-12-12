import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GetDataService } from './common/services/get-data.service';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit{
    show = false;
constructor(private translate: TranslateService,
            private getDataService: GetDataService){
    translate.setDefaultLang('ru');
}
 ngOnInit(){
    this.translate.use(this.getDataService.sendData());
}
}
