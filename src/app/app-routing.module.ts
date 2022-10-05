import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', loadChildren: () => import('./auth-module/auth-module.module').then((m) => m.AuthModuleModule) },
  { path: 'DashBoard', loadChildren: () => import('./dashboard-module/dashboard-module.module').then((m) => m.DashboardModuleModule) },
  { path: 'EmpList', loadChildren: () => import('./dashboard-module/dashboard-module.module').then((m) => m.DashboardModuleModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
