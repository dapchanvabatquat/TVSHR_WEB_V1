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

  AbsenceHistoryData!: Observable<any>;
  AbsenceHistory!: Array<{ Id: number, UserName: string, AbsenceTypeId: number, AbsenceTyName: string, FromDay: string, ToDay: string, Note: string, DayCreate: string, ConfirmState: boolean, ConfirmUserName: string, ConfirmDay: string, ConfirmNote: string }>;
  AbsenceHistoryAll: any;
  TotalItem: number = 0;

  DelAbsenceData!: Observable<any>;

  ViewSearch: boolean = false;
  ToDay: string = new Date().toISOString();
  FromDay: string = new Date(new Date().getTime() - (7 * (1 * 24 * 60 * 60 * 1000))).toISOString();


  tuNgay: string = new Date().toISOString();
  denNgay: string = new Date(new Date().getTime() + (1 * (1 * 24 * 60 * 60 * 1000))).toISOString();
  Note: string = "";

  constructor(
    private share: AccountService,
    private common: CommonserviceService,
    private router: Router,
    private toatr: ToastrcustomService
  ) {

    var date: Date;
    date = new Date();
    date.setDate(date.getDate());
    date.setDate(1);
    this.FromDay = date.toISOString();

    this.getAbsenceType();
    this.getHistoryData();

  }

  ngOnInit(): void {

    let userName = localStorage.getItem("TaiKhoan");
    if (userName) {

      this.UserName = userName;
    }


  }

  viewOption() {
    this.ViewSearch = !this.ViewSearch;
  }

  onDeleteAction(UserName: any, TaskId: any) {
    if (confirm("B???n ch???c ch???c mu???n x??a ? ")) {
      this.delAbsence(UserName, TaskId);
    }

    //   const alert = this.alertController.create({
    //     message: '<center>B???n ch???c ch???n mu???n x??a n???i dung n??y kh??ng?</center>',
    //     buttons: [
    //       {
    //         text: 'B??? qua',
    //         role: 'cancel',
    //         cssClass: 'secondary',
    //         handler: () => {
    //           alert.dismiss();
    //           return false;
    //         }
    //       }, {
    //         text: '?????ng ?? x??a',
    //         handler: () => {
    //           this.delAbsence(UserName, TaskId);
    //         }
    //       }
    //     ]
    //   });
    //  alert.present();
  }


  delAbsence(UserName: any, TaskId: any) {
    console.log("105", TaskId);

    try {
      let CODEORG = localStorage.getItem("MaDonVi");
      if (CODEORG) {

        this.DelAbsenceData = this.share.delAbsence(CODEORG, UserName, TaskId);
        if (this.DelAbsenceData != null) {
          this.DelAbsenceData.subscribe(data => {
            if (data.State == "OK") {
              this.toatr.showSuccess("C???p nh???t th??ng tin th??nh c??ng !");
              this.getHistoryData();
            }
            else {
              this.toatr.showError("L???i: " + data.State);
            }
          },
            error => {
              this.toatr.showError("L???i: X??a th??ng tin th???t b???i!");
            })
        }
        else {
          this.toatr.showError("L???i: X??a th??ng tin th???t b???i!");
        }


      }



    }
    catch { }

  }

  getAbsenceType() {

    try {
      // BEGIN
      let CODEORG = localStorage.getItem("MaDonVi");
      if (CODEORG) {
        let userName = localStorage.getItem("TaiKhoan");
        if (userName) {

          this.UserName = userName;

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
      console.log("87", this.AbsenceTypeId);
      if (this.AbsenceTypeId == 0) {
        this.toatr.showError("L???i: B???n ch??a ch???n lo???i ngh??? ph??p !");
        return;
      }

      this.Saving = true;
      this.AbsenceData = this.share.setAbsence(CODEORG, this.UserName, this.AbsenceTypeId, this.tuNgay, this.denNgay, this.Note)
      if (this.AbsenceData != null) {
        this.AbsenceData.subscribe(data => {
          if (data.State == "OK") {
            this.toatr.showSuccess("C???p nh???t th??ng tin th??nh c??ng !");
            this.getHistoryData();
            // this.router.navigateByUrl('nv-nghiphep-lichsu');
            this.Saving = false;
          }
          else {
            this.toatr.showError("L???i: " + data.State);
            this.Saving = false;
          }
        },
          error => {
            this.toatr.showError("L???i: ????ng k?? ngh??? ph??p th???t b???i!");
            this.Saving = false;
          })
      }
      else {
        this.toatr.showError("L???i: ????ng k?? ngh??? ph??p th???t b???i!");
        this.Saving = false;
      }


    }
  }


  getHistoryData() {
    try {

      let CODEORG = localStorage.getItem("MaDonVi");
      if (CODEORG) {
        this.AbsenceHistoryData = this.share.getAbsenceHistory(CODEORG, this.UserName, 0, this.FromDay, this.ToDay);
        if (this.AbsenceHistoryData != null) {
          this.AbsenceHistoryData.subscribe(data => {
            this.AbsenceHistoryData = data;
            this.AbsenceHistory = data;
            this.AbsenceHistoryAll = data;
            if (data != null) {
              this.TotalItem = this.AbsenceHistory.length;
            }
          })
        }

      }

    }
    catch { }

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
