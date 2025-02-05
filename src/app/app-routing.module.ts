import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { SiteHeaderComponent } from '_course-resources/site-header/site-header.component';
import { CatalogComponent } from './catalog/catalog.component';
//import { CartComponent } from '_course-resources/cart/cart.component';

// Create arrays of Routes
const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home - Joe\'s Robot Shop' },
  { path: 'catalog/filter', component: CatalogComponent, title: 'Catalog - Joe\'s Robot Catalog' },
//  { path: 'cart', component: CartComponent, title: 'Cart - Joe\'s Robot Cart' },
  { path: '', redirectTo:'/home', pathMatch: 'full' },  
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
