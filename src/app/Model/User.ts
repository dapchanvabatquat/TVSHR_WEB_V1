export interface UserLogin {
    MaDonVi: string,
    TaiKhoan: string ,
    MatKhau : string,
    HoVaTen: string
}

export interface OrgInfo{
    username:string,
    password: string
}




export interface UserReponse {
    access_token: any
    listRole: [],
    jwt : string,
    expiresIn: number,
    refreshToken : string,
    refreshTokenExpiryTime: string,
    errorCode: string,
    message: string,
    userId :string
}
