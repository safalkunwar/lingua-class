import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 dark:from-indigo-950 dark:via-background dark:to-purple-950">
      <LoginForm />
    </div>
  );
}
