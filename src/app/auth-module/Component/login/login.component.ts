import { Component, OnInit } from '@angular/core';
import { OrgInfo, UserLogin } from '../../../Model/User';
import { AccountService } from '../../../Service/Account/account.service';
import { Router } from '@angular/router';
import { ToastrcustomService } from '../../../Interceptor/toastrcustom'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loadding: boolean = false;

  User: UserLogin = {
    MaDonVi: '',
    TaiKhoan: '',
    MatKhau: '',
    HoVaTen: ''
  }

  Org: OrgInfo = {
    username: '',
    password: '123456',
  }

  isLoading: boolean = false;
  constructor(private share: AccountService,
    private router: Router,
    private toatr: ToastrcustomService
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.loadding = true;

    this.share.getToken(this.Org).subscribe(data => {
      //Lay token thanh cong
      if (data != null) {

        if (data != null && data != undefined) {

          this.User.MaDonVi = this.Org.username;

          this.share.Login(this.User).subscribe(response => {

            this.loadding = false;


            if (response.TrangThai == "OK") {
              this.toatr.showSuccess("Đăng nhập thành công")
              this.router.navigate(['/Home']);
            }
            else {
              this.toatr.showError(response.message)
            }
          })

        }


      }

    })




  }


}
