import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrcustomService } from 'src/app/Interceptor/toastrcustom';
import { AccountService } from 'src/app/Service/Account/account.service';
import { CommonserviceService } from 'src/app/Service/CommonService/commonservice.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-nghiphep',
  templateUrl: './nghiphep.component.html',
  styleUrls: ['./nghiphep.component.css']
})
export class NghiphepComponent implements OnInit {

  UserName: string = "";
  FullName: string = "";

  AbsenceData!: Observable<any>;
  Saving: boolean = false;

  AbsenceTypeId: number = 0;
  AbsenceTypeData!: Observable<any>;
  AbsenceType!: Array<{ Id: Number, Name: string }>;
  AbsenceTypeAll: any;

  tuNgay: string = new Date().toISOString();
  denNgay: string = new Date(new Date().getTime() + (1 * (1 * 24 * 60 * 60 * 1000))).toISOString();
  Note: string = "";

  constructor(
    private share: AccountService,
    private common: CommonserviceService,
    private router: Router,
    private toatr: ToastrcustomService
  ) {
    this.getAbsenceType();

  }

  ngOnInit(): void {

    let objUserName = localStorage.getItem("objUserName");
    if (objUserName) {
      let tempObj = JSON.parse(objUserName);
      let expired = tempObj["expired"] || Date.now();
      this.UserName = tempObj["UserName"];
    }


  }

  getAbsenceType() {

    try {
      // BEGIN
      let CODEORG = localStorage.getItem("MaDonVi");
      if (CODEORG) {
        let objUserName = localStorage.getItem("objUserName");
        if (objUserName) {
          let tempObj = JSON.parse(objUserName);
          let expired = tempObj["expired"] || Date.now();
          this.UserName = tempObj["UserName"];

          this.AbsenceTypeData = this.share.getAbsenceType();
          if (this.AbsenceTypeData != null) {
            this.AbsenceTypeData.subscribe(data => {
              this.AbsenceTypeData = data;
              this.AbsenceType = data;
              this.AbsenceTypeAll = this.AbsenceTypeData;
            })
          }
        }

      }


      // END

    }
    catch { }

  }

  setAbsence() {
    let CODEORG = localStorage.getItem("MaDonVi");
    if (CODEORG) {
console.log("87",this.AbsenceTypeId);
      if (this.AbsenceTypeId == 0) {
        this.toatr.showError("Lỗi: Bạn chưa chọn loại nghỉ phép !");
        return;
      }

      this.Saving = true;
      this.AbsenceData = this.share.setAbsence(CODEORG, this.UserName, this.AbsenceTypeId, this.tuNgay, this.denNgay, this.Note)
      if (this.AbsenceData != null) {
        this.AbsenceData.subscribe(data => {
          if (data.State == "OK") {
            this.router.navigateByUrl('nv-nghiphep-lichsu');
            this.Saving = false;
          }
          else {
            this.toatr.showError("Lỗi: " + data.State);
            this.Saving = false;
          }
        },
          error => {
            this.toatr.showError("Lỗi: Đăng ký nghỉ phép thất bại!");
            this.Saving = false;
          })
      }
      else {
        this.toatr.showError("Lỗi: Đăng ký nghỉ phép thất bại!");
        this.Saving = false;
      }


    }
  }


  openEdit(id: number) {

  }

  openPermission(UserId: string) {

  }

  openCreate() {

  }

  openDelete(id: number) {

  }

}
