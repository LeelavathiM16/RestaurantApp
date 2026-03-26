import FormComponent from "@/components/common/commonForm/form";
import { LoginController } from "@/components/configControll/formControll";
import { LoginUser } from "@/store/slices/authSlice";
import type { formDataType } from "@/type";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import type { AppDispatch } from "../../store/store";

function Login() {
  const navigate = useNavigate();

  const disPatch = useDispatch<AppDispatch>();

  const OnSubmit = (data: formDataType) => {
    console.log('formdatabefore:', data);
    disPatch(LoginUser(data)).then((data) => {
      const role = data?.payload?.user?.role;
      console.log('role : ',role);
      if (role === 'user') {
        navigate('/shopping/home')
      } else {
        navigate('/admin/dashboard')
      }
    })
  }
  return (
    <div className="mx-auto max-w-md w-full space-y-6">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-bold py-4">
          Your Credentials
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <FormComponent buttonText="Login" formControl={LoginController} OnSubmit={OnSubmit} mode="login" />
      </div>
      <p className="text-sm text-center">
        <span>Don't you have an account</span>
        <Link className="text-pretty ml-2 hover:underline font-medium" to="/auth/register">
          Register
        </Link>
      </p>
    </div>
  );
}

export default Login;
