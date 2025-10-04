import ExpenseLogo from "../ui/expenseLogo";
import UserForm from "../ui/userForm";

function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[450px] flex-col space-y-1.5 p-4 md:-mt-32">
        <div className="flex h-24 w-full items-end rounded-lg bg-gradient-to-r from-indigo-600 to-blue-800 p-3 md:h-30">
          <div className="w-50 text-white md:w-50">
            <ExpenseLogo />
          </div>
        </div>
        <UserForm />
      </div>
    </main>
  )
}

export default LoginPage;

