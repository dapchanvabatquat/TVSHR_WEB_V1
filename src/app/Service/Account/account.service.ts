import { Injectable } from '@angular/core';
import { CommonserviceService } from '../CommonService/commonservice.service';
import { OrgInfo, UserLogin } from '../../Model/User'
import { map, Observable } from 'rxjs';
import { Item } from '../../Model/multidropdown'
import { Account, lstAccount, AccountEdit, AccountCreate } from 'src/app/Model/Account';

@Injectable({
  providedIn: 'root'
})


export class AccountService {
  _urlApi: string = "";
  _Token: any;

  constructor(private httpService: CommonserviceService) {
this._urlApi = httpService._urlApi;
   }

  getToken(Org: OrgInfo) {
    if(Org.username)
    {
      return this.httpService.getToken(Org.username, Org.password);
    }
    else
    {
      return null;
    }
      
  }

  Login(User: UserLogin, Token: string) {

    this._Token = localStorage.getItem("Token");

console.log("Token1", this._Token);
    return this.httpService.signIn('/Login', this._Token, { CODEORG: User.MaDonVi, TaiKhoan: User.TaiKhoan, MatKhau: User.MatKhau, HoVaTen: User.HoVaTen })
  }

  getTaskAction()
  {
    this._Token = localStorage.getItem("Token");
    let CODEORG = localStorage.getItem("MaDonVi");
    return this.httpService.getTaskAction('/getTaskAction', this._Token, { CODEORG: CODEORG })
  }

  getAbsenceType()
  {
    this._Token = localStorage.getItem("Token");
    let CODEORG = localStorage.getItem("MaDonVi");
    return this.httpService.getTaskAction('/getAbsenceType', this._Token, { CODEORG: CODEORG })
  }

  setAbsence(CODEORG: any, UserName: any,AbsenceTypeId: any,FromDay: any,ToDay: any,Note: any)
  {

    this._Token = localStorage.getItem("Token");
    return this.httpService.getTaskAction('/setAbsence', this._Token, { "CODEORG":CODEORG,"UserName":UserName,"AbsenceTypeId":AbsenceTypeId,"FromDay":FromDay,"ToDay":ToDay,"Note":Note })
  }

  getAbsenceHistory(CODEORG: any, UserName: any,AbsenceTypeId: any,FromDay: any,ToDay: any)
  {

    this._Token = localStorage.getItem("Token");
    return this.httpService.getTaskAction('/getAbsenceHistory', this._Token, { "CODEORG":CODEORG,"UserName":UserName,"AbsenceTypeId":AbsenceTypeId,"FromDay":FromDay,"ToDay":ToDay})
  }

  delAbsence(CODEORG: string, UserName: string, TaskId: number)
  {

    this._Token = localStorage.getItem("Token");
    return this.httpService.getTaskAction('/delAbsence', this._Token, { "CODEORG":CODEORG,"UserName":UserName,"TaskId":TaskId})
  }


  // refreshToken()




  Paging(page: number, searchText: string, numberDis: number) {
    return this.httpService.getRequest('admin/ManageAccount' + '?page=' + page + '&Keyword=' + searchText + '&pageSize=' + numberDis)
      .pipe(map((data: lstAccount) => {
        return data;
      }))
  }

}
