import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '@app/shared/shared.module';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
