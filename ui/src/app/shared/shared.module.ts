import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [MessageComponent],
    exports     : [
        MessageComponent,
        MatButtonModule
    ],
    imports     : [
        CommonModule,
        MatButtonModule
    ]
})
export class SharedModule {
}
