import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartnerListPage } from './partner-list.page';

const routes: Routes = [
  {
    path: '',
    component: PartnerListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartnerListPageRoutingModule {}
