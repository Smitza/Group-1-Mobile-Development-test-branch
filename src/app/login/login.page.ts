import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;

  constructor(private router: Router) {}

  validateAndLogin() {
    this.emailError = false;
    this.passwordError = false;

    // Email validation regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(this.email)) {
      this.emailError = true;
    }

    if (this.password.length < 6) {
      this.passwordError = true;
    }

    if (!this.emailError && !this.passwordError) {
      this.router.navigate(['/tabs/profile'], { queryParams: { email: this.email } });
    }
  }

  goToProfile() {
    this.router.navigate(['/tabs/profile'], { queryParams: { email: this.email } });
  }
}
