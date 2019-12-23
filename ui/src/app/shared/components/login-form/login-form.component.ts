import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector   : 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls  : ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup;
    hide = true;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.createLoginForm();
    }

    createLoginForm() {
        this.loginForm = this.formBuilder.group({
            email          : ['', [Validators.required, Validators.minLength, Validators.maxLength, Validators.email]],
            password       : ['', [Validators.required, Validators.minLength, Validators.maxLength]],
            confirmPassword: ['', [Validators.required, Validators.minLength, Validators.maxLength]]
        }, {validator: this.checkPasswords});
    }

    onSubmit() {

    }

    showPassword() {

    }

    checkPasswords(group: FormGroup) {
        const pass = group.controls.password.value;
        const confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    }
}
