import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinancementManagementPageRoutingModule } from './financement-management-routing.module';

import { FinancementManagementPage } from './financement-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinancementManagementPageRoutingModule
  ],
  declarations: [FinancementManagementPage]
})
export class FinancementManagementPageModule {}
