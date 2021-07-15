import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceNoValidedDetailPageRoutingModule } from './finance-no-valided-detail-routing.module';

import { FinanceNoValidedDetailPage } from './finance-no-valided-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceNoValidedDetailPageRoutingModule
  ],
  declarations: [FinanceNoValidedDetailPage]
})
export class FinanceNoValidedDetailPageModule {}
