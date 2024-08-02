import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { AuthService } from './services/auth.service';
import { authgaurdGuard } from './shared/authgaurd.guard';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


const routes: Routes = [ 
  {path: 'product', component:ProductComponent, pathMatch:'full', canActivate: [authgaurdGuard]},
  {path:'details/:id',component: ProductdetailsComponent,pathMatch:'full'},
  { path: 'create', component: CreateproductComponent ,pathMatch:'full', canActivate: [authgaurdGuard] },
  { path: 'edit/:id', component: EditproductComponent ,pathMatch:'full', canActivate: [authgaurdGuard]},
  {path: 'login', component:LoginComponent},
  {path: '', component:MainPageComponent},
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
