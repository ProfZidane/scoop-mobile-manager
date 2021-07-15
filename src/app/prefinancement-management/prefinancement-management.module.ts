import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrefinancementManagementPageRoutingModule } from './prefinancement-management-routing.module';

import { PrefinancementManagementPage } from './prefinancement-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrefinancementManagementPageRoutingModule
  ],
  declarations: [PrefinancementManagementPage]
})
export class PrefinancementManagementPageModule {}
