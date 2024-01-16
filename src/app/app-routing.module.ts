import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { ContactComponent } from './contact/contact.component';
import { Inde1Component } from './inde1/inde1.component';
import { AboutComponent } from './about/about.component';
import { ProductDetComponent } from './product-det/product-det.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{path:'' , redirectTo:'about',pathMatch:"full"},
{path:'produit' , component:ProduitComponent},
{path:'contact' , component:ContactComponent},
{path:'about' , component:Inde1Component},
{path:'index' , component:Inde1Component},
{path:'detail' , component:ProductDetComponent},
{path:'Auth' , component:DashbordComponent},
{path:'dashboard', component:DashbordComponent},
{path:'cart', component:CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
