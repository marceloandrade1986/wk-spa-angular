import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from  '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';

import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { ClientComponent } from './views/client/client.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { SaleOrderComponent } from './views/sale-order/sale-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductComponent,
    ClientComponent,
    ProductCreateComponent,
    ClientCreateComponent,
    ProductReadComponent,
    ClientReadComponent,
    ProductUpdateComponent,
    ClientUpdateComponent,
    ProductDeleteComponent,
    ClientDeleteComponent,
    SaleOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
