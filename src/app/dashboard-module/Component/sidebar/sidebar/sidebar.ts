export interface TypeRoute {
    name : string
    url?: string
    roles?: any
    children?: TypeRoute[]
}



export const ROUTE_DATA: TypeRoute[] = [
    {
        name :'Quản lý danh mục',
        // roles: ["Admin"],
        children : [

            {
                name :'Nhóm hàng hóa',
                url:'nhom-san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Hàng hóa',
                url:'san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Khách hàng',
                url:'khachhang',
                // roles: ["Admin"],

            },
            {
                name :'Đơn vị',
                url:'don-vi',
                // roles: ["Admin"],

            },
            {
                name :'Phương tiện',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
        ]
    },
   
]
