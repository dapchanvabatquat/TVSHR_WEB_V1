import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danhsachnhanvien',
  templateUrl: './danhsachnhanvien.component.html',
  styleUrls: ['./danhsachnhanvien.component.css']
})
export class DanhsachnhanvienComponent implements OnInit {

  isCreate: boolean = true;
  customerId: number = 0;
  loadding: boolean = false;

  
  lstdata: any = [];

  PageInfo = {
    page: 1,
    Keyword: '',
    pageSize: 10
  }
  constructor(

  ) {}

  ngOnInit(): void {
  }


  onChangePage(pageOfItems: any) {
    pageOfItems.Keyword = this.PageInfo.Keyword;
    this.PageInfo = pageOfItems;
  }

  onSearch(e: any) {
    this.PageInfo.Keyword = e;
    this.PageInfo.page = 1;
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
