import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendEmailService } from '@services/send-email.service';
import { NotificationService } from '@services/notification.service';
import { environment } from '../../../../environments/environment';

@Component({
    selector   : 'app-contact-us-form',
    templateUrl: './contact-us-form.component.html',
    styleUrls  : ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
    contactUsForm: FormGroup;
    sendEmailUrl            = environment.URL;
    @Input() callForm: boolean;
    @Output() closeFromForm = new EventEmitter();
    @ViewChild(
        'submitBtn',
        {
            read  : ElementRef,
            static: false
        }
    ) private submitBtn: ElementRef;

    constructor(private formBuilder: FormBuilder,
                private sendMailService: SendEmailService,
                private notificationService: NotificationService) { }

    ngOnInit() {
        if (this.callForm) {
            this.createCallForm();
        } else {
            this.createContactForm();
        }
    }

    createContactForm() {
        this.contactUsForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
            lastName : ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
            email    : ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2), Validators.email]],
            question : ['', [Validators.required, Validators.maxLength(150)]]
        });
    }

    createCallForm() {
        this.contactUsForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
            phone    : ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]]
        });
    }

    closedForm(isClosed) {
        this.closeFromForm.emit(isClosed);
    }

    onSubmit() {
        if (!this.contactUsForm.valid) {
            return;
        }
        let userData;
        if (this.callForm) {
            userData = {
                firstName: this.contactUsForm.controls.firstName.value,
                phone    : this.contactUsForm.controls.phone.value
            };
        } else {
            userData = {
                firstName: this.contactUsForm.controls.firstName.value,
                lastName : this.contactUsForm.controls.lastName.value,
                email    : this.contactUsForm.controls.email.value,
                question : this.contactUsForm.controls.question.value
            };
        }
        this.sendMailService.sendEmail(this.sendEmailUrl, userData).subscribe(
            () => {
                this.notificationService.success('.SUCCESS');
            },
            err => this.notificationService.error('.ERROR' + err)
        );
        this.contactUsForm.reset();
        Object.keys(this.contactUsForm.controls).forEach(key => {
            this.contactUsForm.controls[key].setErrors(null);
        });
        this.submitBtn.nativeElement.setAttribute('disabled', 'false');
        this.closedForm(true);
    }
}
