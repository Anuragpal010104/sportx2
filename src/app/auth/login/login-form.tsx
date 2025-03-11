"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/input";
import Button from "@/components/button";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User logged in:", userCredential.user);
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google login successful:", result.user);
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Email"
        type="email"
        {...register("email")}
        error={errors.email?.message}
        className="w-full"
      />
      <Input
        label="Password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
        className="w-full"
      />
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
      >
        Log In
      </Button>
      <Button
        type="button"
        className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="w-6 h-6" />
        Continue with Google
      </Button>
    </form>
  );
}
