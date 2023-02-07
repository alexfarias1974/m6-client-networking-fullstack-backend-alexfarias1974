export interface IContactRequest {
    name: string
    email: string
    tel: string
}

export interface IContact {
    id: string
    name: string
    email: string
    tel: string
    createdAt: Date
}

export interface IContactRequest {
    name: string
    email: string
    tel: string
    userId?: string
}


export interface IContactUpdate {
    name?: string
    email?: string
    tel?: string
}