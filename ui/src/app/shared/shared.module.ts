import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { PhoneComponent } from './components/phone/phone.component';
import { ContactUsFormComponent } from '@app/shared/components/contact-us-form/contact-us-form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ArrowComponent } from './components/arrow/arrow.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
    declarations: [MessageComponent, PhoneComponent, ContactUsFormComponent, CarouselComponent, ArrowComponent],
    exports: [
        MessageComponent,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        PhoneComponent,
        CarouselComponent,
        ArrowComponent,
        ContactUsFormComponent,
        MatDialogModule,
        NgxPaginationModule
    ],
    imports     : [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        TranslateModule,
        MatDialogModule,
        MatIconModule,
        NgxPaginationModule
    ]
})
export class SharedModule {
}
