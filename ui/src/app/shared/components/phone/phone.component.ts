import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
    selector   : 'app-phone',
    templateUrl: './phone.component.html',
    styleUrls  : ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
    @Input() isOpen: boolean;

    constructor() { }

    ngOnInit() {
    }

    closedForm() {
        this.isOpen = false;
    }
}
