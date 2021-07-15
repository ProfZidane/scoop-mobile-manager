import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanceNoValidedPagePage } from './finance-no-valided-page.page';

const routes: Routes = [
  {
    path: '',
    component: FinanceNoValidedPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinanceNoValidedPagePageRoutingModule {}
