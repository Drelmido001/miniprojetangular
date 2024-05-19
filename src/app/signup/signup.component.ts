import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {User} from "../module/user";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public username: string="";
  public email: string="";
  public password: string="";
  public errorMessage: string="";
  public role: string="candidat";
  public cv: File | null = null;
  constructor(private authService: AuthService) { }
  onSubmit() {
    const newUser: User = {
      username: this.username,
      email: this.email,
      password: this.password,
      // @ts-ignore
      role: this.role,
      cv :this.cv = null
    };

    if (this.role === 'candidat') {
      newUser.cv = this.cv;
    }

    this.authService.signup(newUser)
      .subscribe({
        next: response => {
          console.log('Inscription réussie !', response);
          confirm("Inscription reussite");
          this.username = '';
          this.email = '';
          this.password = '';
          this.errorMessage = '';
        },
        error: error => {
          console.error('Erreur lors de l\'inscription :', error);
          this.errorMessage = 'Une erreur s\'est produite lors de l\'inscription.';
        }
      });
  }}
