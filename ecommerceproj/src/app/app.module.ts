import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { authgaurdGuard } from './shared/authgaurd.guard';
import { ProductService } from './services/product.service';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    CreateproductComponent,
    EditproductComponent,
    MainPageComponent,
    ProductdetailsComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    ,
    ReactiveFormsModule

  ],
  providers: [
    AuthService,
   ProductService,
   
    
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
