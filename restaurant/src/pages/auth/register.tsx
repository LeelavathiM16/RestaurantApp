import FormComponent from "@/components/common/form";
import { RegisterController } from "@/components/configControll/formControll";
import { Link } from "react-router";

function Register() {
  return (
    <div className="mx-auto max-w-md w-full space-y-6">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-bold py-4">
          Create a new account
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <FormComponent buttonText="Sign Up" formControl={RegisterController} />
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
