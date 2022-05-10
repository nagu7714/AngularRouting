import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AddressComponent } from './components/address/address.component';
import { CompanyComponent } from './components/company/company.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';
import { ResolveGuard } from './guards/resolve.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    UserDetailComponent,
    AddressComponent,
    CompanyComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard,AdminGuard,UnsavedChangesGuard ,ResolveGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
