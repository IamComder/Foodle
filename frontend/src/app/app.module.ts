import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { CarouselModule } from 'primeng/carousel'
import { ButtonModule } from 'primeng/button';
import { MapComponent } from './map/map.component'

const routes:Routes = [
  {path: "", component: LandingPageComponent},
  {path: "home", component: LandingPageComponent},
  {path: "help", component: ContactComponent},
  {path: "register", component: RegisterComponent},
  {path: "login", component: LoginComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    MapComponent
  ],
  imports: [
    AccordionModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CarouselModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
