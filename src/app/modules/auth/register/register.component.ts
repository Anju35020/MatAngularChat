import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signUp: FormGroup

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initialization();
  }

  initialization() {
    let form = {
      name: ['', (Validators.required)],
      email: ['', (Validators.required)],
      password: ['', (Validators.required)],
      contact: ['', (Validators.required)],
    }
    this.signUp = this.fb.group(form);
  }

  onSubmit() {
    if (this.signUp.valid) {
      console.log(this.signUp.value);
      this.auth.add(this.signUp.value).then((res) => {
        if (res) {
          this.router.navigate(['/chat/chat']);
        } else {
          alert('No Successfull');
        }
      })
    } else {
      alert('Please enter the detials first');
    }
  }
}
