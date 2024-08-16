import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
// import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { FooterComponent } from "./shared/components/footer/footer/footer.component";
import { RegisterComponent } from './components/register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { CreateProductService } from './merchant/services/create-product.service';
import { MerchantProductsComponent } from './merchant/merchant-products/merchant-products.component';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateProductComponent } from './merchant/create-product/create-product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HttpClientModule,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    MerchantProductsComponent,
    CreateProductComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'graduation-project';
}
