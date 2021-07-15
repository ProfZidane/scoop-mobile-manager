import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceNoValidedDetailPage } from './finance-no-valided-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceNoValidedDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceNoValidedDetailPageRoutingModule {}
