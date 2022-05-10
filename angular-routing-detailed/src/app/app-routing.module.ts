import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
import { AddressComponent } from './components/address/address.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { CompanyComponent } from './components/company/company.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserComponent } from './components/user/user.component';
import { AdminGuard } from './guards/admin.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

const routes: Routes = [
  {path:'', redirectTo:'users' ,pathMatch:'full'}, //default route
  {path:'users', component:UserComponent , resolve:{data: ResolveGuard} },
  {path:'user/:id', component:UserDetailComponent, canActivate:[AuthGuard], canActivateChild:[AdminGuard],
     children:[ //child routes
    // {path:'',redirectTo:'address',pathMatch:'full'}, // comment this if you implement canActivateChild in child routes 
     {path:'address',component:AddressComponent},
     {path:'company',component:CompanyComponent}]},
  {path:'about', component :AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'adduser', component:AdduserComponent , canDeactivate:[UnsavedChangesGuard]},
  {path:'**', redirectTo:'users'} //invalid routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
