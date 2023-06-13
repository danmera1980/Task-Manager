import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  hide:Boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
  ) {}

  registerForm = this.formBuilder.group({
    username: this.formBuilder.control(
      '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ),
    name: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control(
      '',
      Validators.compose([
        Validators.pattern(
          '(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}'
        ),
        Validators.required,
      ])
    ),
    email: this.formBuilder.control(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    role: this.formBuilder.control('user'),
    isActive: this.formBuilder.control(true, Validators.required),
  });

  register() {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;

      this.authService
        .RegisterUser({
          name: formValues.name?.toString(),
          username: formValues.username?.toString(),
          password: formValues.password?.toString(),
          email: formValues.email?.toString(),
          role: formValues.role?.toString(),
          isActive: Boolean(formValues.isActive?.toString()),
        })
        .subscribe((res) => {
          this.toastr.success('User Registered Successfully!');
          this.router.navigate(['login']);
        });
    } else {
      this.toastr.warning('Please enter valid data');
    }
  }
}
