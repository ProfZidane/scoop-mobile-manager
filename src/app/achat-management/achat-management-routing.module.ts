import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AchatManagementPage } from './achat-management.page';

const routes: Routes = [
  {
    path: '',
    component: AchatManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AchatManagementPageRoutingModule {}
