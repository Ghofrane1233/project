import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ProduitComponent } from './produit/produit.component';
import { FooterComponent } from './footer/footer.component';
import { Inde1Component } from './inde1/inde1.component';
import { AboutComponent } from './about/about.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {ReactiveFormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CartComponent } from './cart/cart.component';
import { ProductDetComponent } from './product-det/product-det.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DashbordComponent } from './dashbord/dashbord.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    ProduitComponent,
    FooterComponent,
    Inde1Component,
    AboutComponent,
    CartComponent,
    ProductDetComponent,
    AuthentificationComponent,
    DashbordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    JsonPipe,
    MatCheckboxModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
