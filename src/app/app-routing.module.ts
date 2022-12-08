import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClientComponent } from './views/client/client.component';
import { ProductComponent } from './views/product/product.component';

import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';

import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { SaleOrderComponent } from './views/sale-order/sale-order.component';


const routes: Routes = [
  { path: "",                   component: HomeComponent },
  { path: "clients",            component: ClientComponent },
  { path: "clients/create",     component: ClientCreateComponent },
  { path: "clients/update/:id", component: ClientUpdateComponent },
  { path: "clients/delete/:id", component: ClientDeleteComponent },

  { path: "products",            component: ProductComponent },
  { path: "products/create",     component: ProductCreateComponent },
  { path: "products/update/:id", component: ProductUpdateComponent },
  { path: "products/delete/:id", component: ProductDeleteComponent },
  
  { path: "sales",               component: SaleOrderComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
