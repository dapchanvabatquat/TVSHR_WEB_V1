import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/Service/Account/account.service';

@Component({
  selector: 'app-nv-congviec-themmoi',
  templateUrl: './nv-congviec-themmoi.component.html',
  styleUrls: ['./nv-congviec-themmoi.component.css']
})
export class NvCongviecThemmoiComponent implements OnInit {

  TaskInfoData: Observable<any> | undefined;
  TaskTypeData: Observable<any> | undefined;
  TaskType: Array<{ Id: Number; Name: string; }> | undefined;

  UserNameAction: string = "";
  FullNameAction: string = "";

  Saving: boolean = false;
  LockState: boolean = false;

  ValueOffer: number = 0;
  ValueReal: number = 0;
  Loading: boolean = false;

  tuNgay: string = new Date().toISOString();
  denNgay: string = new Date(new Date().getTime() + (1 * (1 * 24 * 60 * 60 * 1000))).toISOString();
  Note: string = "";

  constructor(
    private share: AccountService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {


    let objId = this.activateRoute.snapshot.paramMap.get("id");

    if (objId) {
      this.UserNameAction = JSON.parse(objId).UserName.toString();
      this.FullNameAction = JSON.parse(objId).FullName;
    }

    let CODEORG = localStorage.getItem("MaDonVi");
    if (CODEORG) 
      {
        this.TaskTypeData = this.share.getTaskType(CODEORG);
        if(this.TaskTypeData)
        {
          this.TaskTypeData.subscribe(data => {
            this.TaskTypeData = data;
            this.TaskType = data;
            console.log("42", this.TaskType);
          })
        }
      }
    
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
  
  
          // this.TaskInfoData = this.share.getTaskHistory(CODEORG, this.UserName, 0, this.FromDay, this.ToDay, 0);
          // if (this.TaskInfoData != null) {
          //   this.TaskInfoData.subscribe(data => {
          //     console.log(data);
          //     this.TaskInfoData = data;
          //     this.Loading = false;
          //   })
          // }


        }
      }
      
      

    }
    catch { }

  }

}
