import type { ReactNode } from "react"

export type AuthcheckType ={
    isAuthenticated:boolean,
    user:{
        role:string,
        name:string
    },
    children:ReactNode
}