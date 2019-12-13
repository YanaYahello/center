import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector   : 'app-contact-us-form',
    templateUrl: './contact-us-form.component.html',
    styleUrls  : ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {
    contactUsForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.contactUsForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            lastName : ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            email    : ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
            question : ['', [Validators.required,  Validators.maxLength(200)]]
        });
    }

    onSubmit() {
        console.log(this.contactUsForm.value);
    }
}
