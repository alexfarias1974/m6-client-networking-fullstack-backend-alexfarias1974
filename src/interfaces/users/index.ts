export interface IUserRequest {
    name: string
    email: string
    tel: string
    password: string
    isAdm?: boolean
}

export interface IUser {
    id: string
    name: string
    email: string
    tel: string
    isAdm?: boolean
    isActive: boolean
    createdAt: Date
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    tel?: string
    password?: string
}