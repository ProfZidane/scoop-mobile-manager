import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinanceNoValidedPagePageRoutingModule } from './finance-no-valided-page-routing.module';

import { FinanceNoValidedPagePage } from './finance-no-valided-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinanceNoValidedPagePageRoutingModule
  ],
  declarations: [FinanceNoValidedPagePage]
})
export class FinanceNoValidedPagePageModule {}
