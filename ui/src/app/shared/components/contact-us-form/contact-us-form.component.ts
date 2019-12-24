import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
import { EmailService } from '../../../common/services/email.service';
=======
>>>>>>> created form added google cart

@Component({
    selector   : 'app-contact-us-form',
    templateUrl: './contact-us-form.component.html',
    styleUrls  : ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
    contactUsForm: FormGroup;

<<<<<<< HEAD
    constructor(private formBuilder: FormBuilder,
                private emailService: EmailService) { }
=======
    constructor(private formBuilder: FormBuilder) { }
>>>>>>> created form added google cart

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.contactUsForm = this.formBuilder.group({
<<<<<<< HEAD
            firstName: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
            lastName : ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
            email    : ['', [Validators.required, Validators.email, Validators.maxLength(15), Validators.minLength(2)]],
            question : ['', [Validators.required, Validators.maxLength(200)]]
=======
            firstName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            lastName : ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            email    : ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            question : ['', [Validators.required,  Validators.maxLength(200)]]
>>>>>>> created form added google cart
        });
    }

    onSubmit() {
        console.log(this.contactUsForm.value);
<<<<<<< HEAD
        this.emailService.sendMessage(this.contactUsForm.value);
        this.contactUsForm.reset();
=======
>>>>>>> created form added google cart
    }
}
