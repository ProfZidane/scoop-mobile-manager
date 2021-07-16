import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerListPageRoutingModule } from './partner-list-routing.module';

import { PartnerListPage } from './partner-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerListPageRoutingModule
  ],
  declarations: [PartnerListPage]
})
export class PartnerListPageModule {}
