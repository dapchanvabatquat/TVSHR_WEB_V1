import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { AccountService } from 'src/app/Service/Account/account.service';
import { CommonserviceService } from 'src/app/Service/CommonService/commonservice.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-danhsachnhanvien',
  templateUrl: './danhsachnhanvien.component.html',
  styleUrls: ['./danhsachnhanvien.component.css']
})
export class DanhsachnhanvienComponent implements OnInit {

  filterText: any;
  isCreate: boolean = true;
  customerId: number = 0;
  loadding: boolean = false;
  UserName: string = "";
  FullName: string = "";

  EmpData: Observable<any>;
  Emp: Array<{ UserName: string; FullName: string; Phone: string; DeptName: string; }> | undefined;
  EmpAll: any;
  
  lstdata: any = [];

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  }
  constructor(
    private share: AccountService,
    private common: CommonserviceService,
    private router: Router,
    private toatr: ToastrcustomService
  ) {
    this.EmpData = this.share.getTaskAction();
    if (this.EmpData != null) {
      this.EmpData.subscribe(data => {
        console.log(data);
        this.EmpData = data;
        this.Emp = data;
        this.EmpAll = this.EmpData;
      })
    }
  }

  ngOnInit(): void {
  }


  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems;
  }

  onSearch() {

      if (this.filterText != '' || this.filterText != undefined) {
        this.Emp = _.values(this.EmpAll);
        this.Emp = this.Emp.filter((emp) => {
          return (
            (emp.FullName.toLowerCase().indexOf(this.filterText) > -1
            || emp.UserName.toLowerCase().indexOf(this.filterText) > -1)
          );
        })
      }
      else {
        this.Emp = this.EmpAll;
      }
  }


  openEdit(id: number) {

  }

  openPermission(UserId: string){
   
  }

  openCreate() {
 
  }

  openDelete(id: number) {
   
  }

}
