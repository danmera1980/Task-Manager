import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './components/popup/popup.component';
import { UserListingComponent } from './components/userlisting/userlisting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/style/material.module';

@NgModule({
  declarations: [PopupComponent, UserListingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
