import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'finance-no-valided-page',
    loadChildren: () => import('./finance-no-valided-page/finance-no-valided-page.module').then( m => m.FinanceNoValidedPagePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'finance-no-valided-detail',
    loadChildren: () => import('./finance-no-valided-detail/finance-no-valided-detail.module').then( m => m.FinanceNoValidedDetailPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'achat-management',
    loadChildren: () => import('./achat-management/achat-management.module').then( m => m.AchatManagementPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'financement-management',
    loadChildren: () => import('./financement-management/financement-management.module').then( m => m.FinancementManagementPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'prefinancement-management',
    loadChildren: () => import('./prefinancement-management/prefinancement-management.module').then( m => m.PrefinancementManagementPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'partner-list',
    loadChildren: () => import('./partner-list/partner-list.module').then( m => m.PartnerListPageModule)
  },  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
