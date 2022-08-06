import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { ProductsComponent } from './components/bookstore-app/products/products.component';
import { FiltersComponent } from './components/bookstore-app/filters/filters.component';
import { ProductItemComponent } from './components/bookstore-app/products/product-item/product-item.component';
import { BooksService } from './components/bookstore-app/products/product-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    ProductsComponent,
    FiltersComponent,
    ProductItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
