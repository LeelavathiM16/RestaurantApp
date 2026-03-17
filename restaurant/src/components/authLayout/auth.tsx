import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex justify-center items-center bg-black  w-1/2 px-12">
        <div className="max-w-md text-center space-y-6 text-amber-50">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Urban Vogue
          </h1>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center px-4 py-12 sm:px-6 lg:px-8 bg-background">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
