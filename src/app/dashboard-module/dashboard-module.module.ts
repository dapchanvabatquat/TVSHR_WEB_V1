import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
//Component
import { HomeComponent } from './Component/home/home.component';
import { PaginationComponent } from '../View/pagination/pagination.component';
import { SidebarComponent } from './Component/sidebar/sidebar/sidebar.component';
import { TaikhoanComponent } from './Component/taikhoan/taikhoan.component';
import { MultidropdownComponent } from '../View/multidropdown/multidropdown.component';
import { LoadingComponent } from '../View/loading/loading.component'
//Thư viện

// import {MatMenuModule} from '@angular/material/menu';

import { MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule} from '@angular/material/list';
import { MatTreeModule} from '@angular/material/tree';
import { MatDialogModule} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs'
//
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { ExampleComponent } from './Component/example/example.component';

import { UnitCreateComponent } from './Component/unit/unit-create/unit-create.component';
import { UnitDeleteComponent } from './Component/unit/unit-delete/unit-delete.component';
import { UnitIndexComponent } from './Component/unit/unit-index/unit-index.component';
// import { VehicleCreateComponent } from './Component/vehicle-create/vehicle-create.component';
import { SettingIndexComponent } from './Component/setting/setting-index/setting-index.component';
import { QLTaiKhoanCreateComponent } from './Component/quan-ly-tai-khoan/tai-khoan-create/tai-khoan-create.component';
import { QLTaiKhoanDeleteComponent } from './Component/quan-ly-tai-khoan/tai-khoan-delete/tai-khoan-delete.component';
import { QLTaiKhoanIndexComponent } from './Component/quan-ly-tai-khoan/tai-khoan-index/tai-khoan-index.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';


import { UserAuthorizationComponent } from './Component/quan-ly-tai-khoan/user-authorization/user-authorization.component';



@NgModule({
  declarations: [
    HomeComponent,

    TaikhoanComponent ,
    //view
    PaginationComponent,

    MultidropdownComponent,
    SidebarComponent,
    LoadingComponent,
    ExampleComponent,
    UnitCreateComponent,
    UnitDeleteComponent,
    UnitIndexComponent,
  
    SettingIndexComponent,
  
    MultidropdownComponent,
    SidebarComponent,
    ExampleComponent,
    QLTaiKhoanCreateComponent,
    QLTaiKhoanDeleteComponent,
    QLTaiKhoanIndexComponent,
    NotfoundComponent,
    UserAuthorizationComponent,
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatTreeModule,
    MatMenuModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    //
    FormsModule,
    ReactiveFormsModule,
    //
    // ToastrModule.forRoot()
  ],
})
export class DashboardModuleModule { }
