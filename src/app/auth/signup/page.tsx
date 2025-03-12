import SignupForm from "./signup-form";
import FluidArtExperience from "@/components/wave";
export default function SignupPage() {
  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-4">
    //   <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md transform transition-all hover:scale-[1.02] duration-200">
    //     <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
    //       Create Account
    //     </h1>
    //     <SignupForm />
    //     <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
    //       Already have an account?{" "}
    //       <a
    //         href="/auth/login"
    //         className="text-blue-500 dark:text-blue-400 font-semibold hover:underline"
    //       >
    //         Log in
    //       </a>
    //     </p>
    //   </div>
    // </div>
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Fluid Art */}
      <div className="absolute inset-0 z-0">
        <FluidArtExperience />
      </div>

      {/* Signup Form Container */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-xl transform transition-all hover:scale-[1.02] duration-300">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100 tracking-tight">
          Create Account
        </h1>
        <SignupForm />
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="text-blue-400 dark:text-blue-300 font-semibold hover:underline transition-colors duration-200"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
