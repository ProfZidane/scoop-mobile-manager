import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinancementManagementPage } from './financement-management.page';

const routes: Routes = [
  {
    path: '',
    component: FinancementManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancementManagementPageRoutingModule {}
