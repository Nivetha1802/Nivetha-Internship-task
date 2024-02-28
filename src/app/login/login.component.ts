import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isContentVisible:boolean = false;
 
  toggleArrow(): void {
    const arrow = document.querySelector('.help .rotate') as HTMLElement;
    if (arrow) {
        arrow.classList.toggle('down');
    }
 
    const content = document.querySelector('.login-box .help .content');
    this.isContentVisible = !this.isContentVisible;
  }
 
}