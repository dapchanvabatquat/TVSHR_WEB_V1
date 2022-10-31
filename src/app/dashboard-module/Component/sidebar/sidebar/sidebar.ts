export interface TypeRoute {
    name : string
    url?: string
    roles?: any
    children?: TypeRoute[]
}



export const ROUTE_DATA: TypeRoute[] = [
    {
        name :'Hệ thống',
        roles: ["SuperAdmin", "Admin"],
        children : [

            {
                name :'Đăng nhập hệ thống',
                url:'nhom-san-pham',
                // roles: ["SuperAdmin", "Admin"],

            },
            {
                name :'Tài khoản người dùng',
                url:'san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Thay đổi mật khẩu',
                url:'khachhang',
                // roles: ["Admin"],

            },
            {
                name :'Đơn vị sử dụng',
                url:'don-vi',
                // roles: ["Admin"],

            },
            {
                name :'Cấu hình hệ thống',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Cấu hình cơ sở dữ liệu',
                url:'phuong-tien',
                // roles: ["Admin"],

            }
        ]
    },

    {
        name :'Khai báo',
        roles: ["SuperAdmin", "Admin"],
        children : [

            {
                name :'Đơn vị',
                url:'nhom-san-pham',
                // roles: ["SuperAdmin", "Admin"],

            },
            {
                name :'Bộ phận',
                url:'san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Chức vụ',
                url:'khachhang',
                // roles: ["Admin"],

            },
            {
                name :'Danh mục',
                url:'don-vi',
                // roles: ["Admin"],

            },
            {
                name :'Đợt tuyển dụng',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Tiền lương',
                url:'phuong-tien',
                // roles: ["Admin"],

            }
        ]
    },

    {
        name :'Nhân sự',
        roles: ["SuperAdmin", "Admin"],
        children : [

            {
                name :'Nhân viên',
                url:'EmpList',
                roles: ["Admin"],

            },
            {
                name :'Quan hệ gia đình',
                url:'san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Quá trình bồi dưỡng',
                url:'khachhang',
                // roles: ["Admin"],

            },
            {
                name :'Quá trình công tác',
                url:'don-vi',
                // roles: ["Admin"],

            },
            {
                name :'Quá trình lương',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Quá trình khen thưởng',
                url:'phuong-tien',
                // roles: ["Admin"],

            }
            ,
            {
                name :'Quá trình kỷ luật',
                url:'phuong-tien',
                // roles: ["Admin"],

            }
            ,
            {
                name :'Hợp đồng lao động',
                url:'phuong-tien',
                // roles: ["Admin"],

            }
            ,
            {
                name :'Nghỉ phép',
                url:'Nghi-Phep',
                // roles: ["Admin"],

            }
            ,
            {
                name :'Chế độ thai sản',
                url:'phuong-tien',
                // roles: ["Admin"],

            }
        ]
    },

    {
        name :'Báo cáo nhân sự',
        roles: ["SuperAdmin", "Admin"],
        children : [

            {
                name :'Báo cáo nhân viên',
                url:'nhom-san-pham',
                // roles: ["SuperAdmin", "Admin"],

            },
            {
                name :'Báo cáo quá trình bồi dưỡng',
                url:'san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo quá trình công tác',
                url:'khachhang',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo quá trình lương',
                url:'don-vi',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo quá trình khen thưởng',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo quá trình kỷ luật',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo hợp đồng lao động',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo nghỉ phép',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo chế độ thai sản',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo quá trình tham gia BH',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Thống kê biến động nhân sự',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Thống kê trình độ chuyên môn',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Thống kê theo khu vực',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo ứng viên tuyển dụng',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
        ]
    },

    {
        name :'Tiền lương',
        roles: ["SuperAdmin", "Admin"],
        children : [

            {
                name :'Bảng lương',
                url:'nhom-san-pham',
                // roles: ["SuperAdmin", "Admin"],

            },
            {
                name :'Phụ cấp chức vụ',
                url:'san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Phụ cấp đặc biệt',
                url:'khachhang',
                // roles: ["Admin"],

            },
            {
                name :'Chế độ phép',
                url:'don-vi',
                // roles: ["Admin"],

            },
            {
                name :'Ngày nghỉ phép trong năm',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Thông số lương',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Thông số báo cáo lương',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo tổng hợp lương',
                url:'phuong-tien',
                // roles: ["Admin"],

            }
        ]
    },

    {
        name :'Bảo hiểm',
        roles: ["SuperAdmin", "Admin"],
        children : [

            {
                name :'Thông số lương khấu trừ',
                url:'nhom-san-pham',
                // roles: ["SuperAdmin", "Admin"],

            },
            {
                name :'Thông số báo cáo lương khấu trừ',
                url:'san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Danh sách tham gia bảo hiểm',
                url:'khachhang',
                // roles: ["Admin"],

            },
            {
                name :'Danh sách điều chỉnh lao động',
                url:'don-vi',
                // roles: ["Admin"],

            },
            {
                name :'Thẻ bảo hiểm',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Tham gia bảo hiểm',
                url:'phuong-tien',
                // roles: ["Admin"],

            }
        ]
    },

    {
        name :'Chấm công',
        roles: ["SuperAdmin", "Admin"],
        children : [

            {
                name :'Tổng hợp bản chấm công',
                url:'nhom-san-pham',
                // roles: ["SuperAdmin", "Admin"],

            },
            {
                name :'Chi tiết bảng chấm công',
                url:'san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Tổng hợp không chấm công',
                url:'khachhang',
                // roles: ["Admin"],

            },
            {
                name :'Quản lý công',
                url:'don-vi',
                // roles: ["Admin"],

            },
            {
                name :'Báo cáo tổng hợp',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Thông số thời gian vào ra',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
            {
                name :'Cập nhật dữ liệu chấm công',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
        ]
    },
    {
        name :'Quản lý Công việc',
        roles: ["SuperAdmin", "Admin"],
        children : [

            {
                name :'Công việc',
                url:'nv-congviec',
                // roles: ["SuperAdmin", "Admin"],

            }
            
        ]
    },
    {
        name :'Trợ giúp',
        roles: ["SuperAdmin", "Admin"],
        children : [

            {
                name :'Hỗ trợ trực tuyến',
                url:'nhom-san-pham',
                // roles: ["SuperAdmin", "Admin"],

            },
            {
                name :'Hỗ trợ từ xa',
                url:'san-pham',
                // roles: ["Admin"],

            },
            {
                name :'Tài liệu hướng dẫn',
                url:'khachhang',
                // roles: ["Admin"],

            },
            {
                name :'Đăng ký chương trình',
                url:'don-vi',
                // roles: ["Admin"],

            },
            {
                name :'Giới thiệu chương trình',
                url:'phuong-tien',
                // roles: ["Admin"],

            },
        ]
    },
    



   
]
