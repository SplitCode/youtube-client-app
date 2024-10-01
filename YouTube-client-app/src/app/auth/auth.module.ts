import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginComponent, AuthRoutingModule],
})
export class AuthModule {}
