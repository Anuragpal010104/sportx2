import SignupForm from "./signup-form";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all hover:scale-105">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Create Account
        </h1>
        <SignupForm />
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}