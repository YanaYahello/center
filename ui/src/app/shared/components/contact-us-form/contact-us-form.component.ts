import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../../common/services/email.service';

@Component({
    selector   : 'app-contact-us-form',
    templateUrl: './contact-us-form.component.html',
    styleUrls  : ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
    contactUsForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private emailService: EmailService) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.contactUsForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
            lastName : ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
            email    : ['', [Validators.required, Validators.email, Validators.maxLength(15), Validators.minLength(2)]],
            question : ['', [Validators.required, Validators.maxLength(200)]]
        });
    }

    onSubmit() {
        console.log(this.contactUsForm.value);
        this.emailService.sendMessage(this.contactUsForm.value);
        this.contactUsForm.reset();
    }
}
