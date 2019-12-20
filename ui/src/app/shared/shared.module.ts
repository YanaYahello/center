import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [MessageComponent],
    exports     : [
        MessageComponent,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
}
