
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';

import { ExampleComponent } from './Component/example/example.component'
import { SettingIndexComponent } from './Component/setting/setting-index/setting-index.component';
import { UnitIndexComponent } from './Component/unit/unit-index/unit-index.component';


import { RoleGuardService } from '../Interceptor//rolo.guard.service'
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { DanhsachnhanvienComponent } from './Component/danhsachnhanvien/danhsachnhanvien.component';
import { TrangchuComponent } from './Component/trangchu/trangchu.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      
      {
        path: 'example',
        component: ExampleComponent,
      },
      {
        path: 'don-vi',
        component: UnitIndexComponent,
        canActivate: [RoleGuardService],
        data: {
          roles: ["Admin", "ds"]
        }
      },
      { path: 'setting', component: SettingIndexComponent },
      { path: '404-not-found', component: NotfoundComponent },
      // Quản trị hệ thống
      { path: 'EmpList', component: DanhsachnhanvienComponent },
      { path: 'trang-chu', component: TrangchuComponent },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
