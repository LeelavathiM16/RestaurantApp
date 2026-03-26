import type { ReactNode } from "react"
import type { z } from "zod";
import type { loginSchema, registerSchema } from "./components/common/commonForm/schema";

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

export type AuthState = {
  isAuthenticated: boolean;
  user: Record<string, unknown> | null;
  isLoading: boolean;
  error: string | null;
};

export type FormMode = "login" | "register";

export type LoginValues = z.infer<typeof loginSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;
export type FormValues = LoginValues | RegisterValues;

export type optionsType = {
  id: string;
  label: string;
};

export type ControllerType = {
  name: string;
  label: string;
  elementType: "input" | "select" | "textArea";
  placeholder?: string;
  type?: string;
  options?: optionsType[];
};

export type formComponentTypes = {
  formControl: ControllerType[];
  buttonText?: string;
  mode: FormMode;
  OnSubmit: (data: FormValues) => void;
};