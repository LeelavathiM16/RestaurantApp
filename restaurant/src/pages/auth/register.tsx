import FormComponent from "@/components/common/commonForm/form";
import { RegisterController } from "@/components/configControll/formControll";
import { registerUser } from "@/store/slices/authSlice";
import type { AppDispatch } from "@/store/store";
import type { formDataType } from "@/type";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();

  const disPatch = useDispatch<AppDispatch>();

  const OnSubmit = (data:formDataType)=>{
     disPatch(registerUser(data)).then((data)=> {
      console.log(data);
       if(data?.payload?.success){
         navigate('/auth/login') 
       }
     })
   }
  return (
    <div className="mx-auto max-w-md w-full space-y-6">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-bold py-4">
          Create a new account
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <FormComponent buttonText="Sign Up" formControl={RegisterController} OnSubmit={OnSubmit} mode="register"/>
      </div>
      <p className="text-sm text-center">
          <span>Already have an account</span>
          <Link className="text-pretty ml-2 hover:underline font-medium" to="/auth/login">
            Login
          </Link>
        </p>
    </div>
  );
}

export default Register;
