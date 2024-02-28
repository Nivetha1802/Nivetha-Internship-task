import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PasswordComponent } from './password/password.component';
import { SignUpHeaderComponent } from './sign-up-header/sign-up-header.component';
import { SignUpFooterComponent } from './sign-up-footer/sign-up-footer.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpFormComponent,
    LoginComponent,
    HomeComponent,
    PasswordComponent,
    SignUpHeaderComponent,
    SignUpFooterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
