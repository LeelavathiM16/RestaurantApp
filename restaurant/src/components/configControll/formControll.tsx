import type { ControllerType } from "@/type";

export const RegisterController: ControllerType[] = [
    {
        name: 'username',
        placeholder: 'Enter your name',
        type: 'text',
        label: 'User Name',
        elementType: 'input'
    },
    {
        name: 'email',
        placeholder: 'abc@gmail.com',
        type: 'email',
        label: 'Email',
        elementType: 'input'
    },
    {
        name: 'password',
        placeholder: '********',
        type: 'password',
        label: 'Password',
        elementType: 'input'
    }
];

export const LoginController: ControllerType[] = [
    {
        name: 'email',
        placeholder: 'abc@gmail.com',
        type: 'email',
        label: 'Email',
        elementType: 'input'
    },
    {
        name: 'password',
        placeholder: '********',
        type: 'password',
        label: 'Password',
        elementType: 'input'
    }
]