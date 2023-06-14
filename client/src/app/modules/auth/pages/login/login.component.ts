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
  ) {
    sessionStorage.clear();
  }

  loginForm = this.formBuilder.group({
    username: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.required),
  });

  login() {
    if (this.loginForm.valid) {
      this.authService
        .LoginUser(this.loginForm.value.username!)
        .subscribe((res) => {
          this.userData = res;
          if (this.userData[0].password === this.loginForm.value.password) {
            if (this.userData[0].isActive) {
              this.toastr.success('User Logged in');
              sessionStorage.setItem('username', this.userData[0].username);
              sessionStorage.setItem('userRole', this.userData[0].role);
              this.router.navigate(['/main/tasks']);
            } else {
              this.toastr.error('Inactive User');
            }
          } else {
            this.toastr.error('Invalid Credentials');
          }
        });
    }
  }
}
