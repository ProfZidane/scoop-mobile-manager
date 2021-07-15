import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AchatManagementPageRoutingModule } from './achat-management-routing.module';

import { AchatManagementPage } from './achat-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchatManagementPageRoutingModule
  ],
  declarations: [AchatManagementPage]
})
export class AchatManagementPageModule {}
