import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from '@app/common/constants/errorMessages';
import { SendEmailService } from '@services/send-email.service';

@Component({
    selector   : 'app-contact-us-form',
    templateUrl: './contact-us-form.component.html',
    styleUrls  : ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
    contactUsForm: FormGroup;
    required  = ERROR_MESSAGES[0].required;
    minlength = ERROR_MESSAGES[1].minlength;
    maxlength = ERROR_MESSAGES[2].maxlength;
    email     = ERROR_MESSAGES[3].email;

    constructor(private formBuilder: FormBuilder,
                private sendMailService: SendEmailService) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.contactUsForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
            lastName : ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
            email    : ['', [Validators.required, Validators.maxLength(20), Validators.minLength(2), Validators.email]],
            question : ['', [Validators.required, Validators.maxLength(150)]]
        });
    }

    onSubmit() {
        if (!this.contactUsForm.valid) {
            return;
        }
        const userData = {
            firstName: this.contactUsForm.controls.firstName.value,
            lastName: this.contactUsForm.controls.lastName.value,
            email: this.contactUsForm.controls.email.value,
            question: this.contactUsForm.controls.question.value
        };
        this.sendMailService.sendEmail('http://localhost:3000/send-email', userData).subscribe(
            () => {
                console.log('email has sent', this.contactUsForm.value);
            },
            err => console.log(err)
        );
        this.contactUsForm.reset();
        Object.keys(this.contactUsForm.controls).forEach(key => {
            this.contactUsForm.controls[key].setErrors(null);
        });
    }
}
