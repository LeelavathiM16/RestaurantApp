import FormComponent from "@/components/common/form";
import { LoginController } from "@/components/configControll/formControll";
import { Link } from "react-router";

function Login() {
  return (
    <div className="mx-auto max-w-md w-full space-y-6">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-bold py-4">
          Your Credentials
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <FormComponent buttonText="Login" formControl={LoginController} />
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
