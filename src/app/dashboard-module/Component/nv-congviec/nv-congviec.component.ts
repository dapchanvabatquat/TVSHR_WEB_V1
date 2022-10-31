import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-nv-congviec',
  templateUrl: './nv-congviec.component.html',
  styleUrls: ['./nv-congviec.component.css']
})
export class NvCongviecComponent implements OnInit {

  @ViewChild('content') content: any;
  
  UserName: string = "";
  FullName: string = "";

  TaskHistoryData: Observable<any> | undefined;
  TaskHistory: Array<{ Id: number; TaskName: string; UserName: string; UserNameAction: string; FullNameAction: string; UserNameFollow: string; TaskTypeId: number; TaskTypeName: string; FromDay: string; ToDay: string; Note: string; DayCreate: string; TaskState: number; TaskStateNote: string; TaskNumberToDay: number; TaskNumberAction: number; ValueOffer: number; ValueReal: number; }> | undefined;
  TaskHistoryAll: any;
  TaskIdListNote: number = 0;
  TotalItem: number = 0;

  DelTaskData: Observable<any> | undefined;

  ViewSearch: boolean = false;
  FromDay: string = new Date(new Date().getTime() - (365 * (1 * 24 * 60 * 60 * 1000))).toISOString();
  ToDay: string = new Date().toISOString()

  Loading: boolean = false;
  showModalBox: boolean = false;
  
  constructor(
    private share: AccountService,
    private router: Router
  ) { 
    this.getData();
  }

  ngOnInit(): void {
  }

  getData() {

    try {
      let CODEORG = localStorage.getItem("MaDonVi");
      if (CODEORG) {
      
        let userName = localStorage.getItem("TaiKhoan");
        if (userName) {
        
          this.Loading = true;
          this.TotalItem = 0;
  
  
          this.TaskHistoryData = this.share.getTaskHistory(CODEORG, this.UserName, 0, this.FromDay, this.ToDay, 0);
          if (this.TaskHistoryData != null) {
            this.TaskHistoryData.subscribe(data => {
              console.log(data);
              this.TaskHistoryData = data;
              this.TaskHistory = data;
              this.TaskHistoryAll = data;
              if (this.TaskHistory != null){
                this.TotalItem = this.TaskHistory.length;
              }
              this.Loading = false;
            })
          }


        }
      }
      
      

    }
    catch { }

  }

  openJob()
  {
    this.showModalBox = true;
    // let objNewJob = {
    //   "UserName": this.UserName,
    //   "FullName": this.FullName
    // }
    // let objId = JSON.stringify(objNewJob);
    //   this.router.navigate(['/DashBoard/nv-congviec-themmoi/', objId]);
  }
}
