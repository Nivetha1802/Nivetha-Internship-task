import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isHomePage: boolean = false;
  isRegistrationPage: boolean = false;
  isLoginPage: boolean = false
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        this.isHomePage = event.url.includes('/Home');
        this.isRegistrationPage = event.url.includes('/Signup');
        this.isLoginPage = event.url.includes('/Login');
      } 
  }); 
}}