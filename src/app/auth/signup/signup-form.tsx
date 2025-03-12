"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/input";
import Button from "@/components/button";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupForm() {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
    });
    const router = useRouter();

    const onSubmit = async (data: SignupFormData) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            console.log("User signed up:", userCredential.user);
            router.push("/dashboard");
        } catch (error: any) {
            console.error("Signup error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        if (loading) return; // Prevent multiple requests
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log("Google signup successful:", result.user);
            router.push("/dashboard");
        } catch (error: any) {
            console.error("Google signup error:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <Input
                label="Name"
                type="text"
                {...register("name")}
                error={errors.name?.message}
                className="w-full"
            />
            <Input
                label="Email"
                type="email"
                {...register("email")}
        {...register("password")}
        error={errors.password?.message}
        className="w-full"
      />
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
      >
        Sign Up
      </Button>
      <Button
        type="button"
        className="w-full bg-white border border-gray-300 text-blue-900 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
        onClick={handleGoogleSignup}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.04.7-2.37 1.11-3.71 1.11-2.85 0-5.27-1.92-6.13-4.5H1.5v2.82C3.36 20.31 7.38 23 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.87 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H1.5C.54 8.43 0 10.13 0 12s.54 3.57 1.5 4.93l4.37-3.84z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.38 1 3.36 3.69 1.5 7.07l4.37 3.84C6.73 8.31 9.15 6.38 12 5.38z"
          />
        </svg>
        <p className="text-blue-500">
            Sign Up with Google
            </p>
      </Button>
    </form>
  );
}

function setLoading(arg0: boolean) {
    throw new Error("Function not implemented.");
}
