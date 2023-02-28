import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: "", component: LandingPageComponent},
  {path: "help", component: ContactComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    LandingPageComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
