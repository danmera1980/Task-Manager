import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userData: any;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  loginForm = this.formBuilder.group({
    username: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control(
      '',
      Validators.compose([
        Validators.pattern(
          '(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}'
        ),
        Validators.required,
      ])
    ),
  });

  login() {
    if (this.loginForm.valid) {
      this.authService
        .LoginUser(this.loginForm.value.username!)
        .subscribe((res) => {
          this.userData = res;
          console.log(this.userData);
        });
    }
  }
}
