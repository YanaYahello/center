import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [MessageComponent],
    exports     : [
        MessageComponent,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        TranslateModule,
        MatDialogModule,
        MatIconModule
    ]
})
export class SharedModule {
}
