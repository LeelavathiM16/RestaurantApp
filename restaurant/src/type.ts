import type { ReactNode } from "react"

export type AuthcheckType ={
    isAuthenticated:boolean,
    user:{
        role:string,
        name:string
    },
    children:ReactNode
}

export type formDataType ={
    name?:string
    email:string
    password:string
}

export type optionsType={
    id:string
}

export type ControllerType = {
  name: string
  label: string
  type: string
  elementType:string
  placeholder?: string
  options?:optionsType[]
}
export type formComponentTypes ={
    formControl: ControllerType[]
    buttonText:string
}