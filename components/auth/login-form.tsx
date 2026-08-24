"use client";

import { useState } from "react";
import { login, register } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { GraduationCap, Lock, User, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "login" | "register";

export function LoginForm() {
  const [mode, setMode] = useState<Mode>("login");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function switchMode(next: Mode) {
    setMode(next);
    setError(null);
    setLoading(false);
  }

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);

    const result = mode === "login" ? await login(formData) : await register(formData);

    if (!result.success) {
      setError(result.error || (mode === "login" ? "Login failed" : "Registration failed"));
      setLoading(false);
      return;
    }

    window.location.href = "/";
  }

  return (
    <Card size="sm" className="w-full max-w-sm">
      <div className="mb-6 flex flex-col items-center gap-2 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
          <GraduationCap className="h-6 w-6" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">LinguaClass</h1>
        <p className="text-sm text-muted-foreground">
          {mode === "login"
            ? "Welcome back! Sign in to continue learning."
            : "Create your free account and start learning."}
        </p>
      </div>

      <form action={handleSubmit} className="space-y-4">
        {mode === "register" && (
          <div className="space-y-2">
            <label htmlFor="displayName" className="text-sm font-medium">
              Display name <span className="text-muted-foreground">(optional)</span>
            </label>
            <Input
              id="displayName"
              name="displayName"
              type="text"
              placeholder="How should we call you?"
              maxLength={40}
              autoComplete="name"
            />
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="username" className="text-sm font-medium">
            Username
          </label>
          <div className="relative">
            <User className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="username"
              name="username"
              type="text"
              placeholder={mode === "register" ? "e.g. xiaoming_88" : "Enter your username"}
              required
              className="pl-9"
              autoComplete="username"
            />
          </div>
          {mode === "register" && (
            <p className="text-xs text-muted-foreground">3-20 characters: letters, numbers, underscores.</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={mode === "register" ? "At least 6 characters" : "Enter your password"}
              required
              minLength={mode === "register" ? 6 : undefined}
              className="pl-9"
              autoComplete={mode === "register" ? "new-password" : "current-password"}
            />
          </div>
        </div>

        {mode === "register" && (
          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm password
            </label>
            <div className="relative">
              <Lock className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Repeat your password"
                required
                minLength={6}
                className="pl-9"
                autoComplete="new-password"
              />
            </div>
          </div>
        )}

        {error && (
          <div role="alert" className="rounded-lg border border-destructive/20 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </div>
        )}

        <Button type="submit" className="w-full gap-2" disabled={loading}>
          {loading ? (
            mode === "login" ? "Signing in..." : "Creating account..."
          ) : mode === "login" ? (
            "Sign in"
          ) : (
            <>
              <UserPlus className="h-4 w-4" />
              Create account
            </>
          )}
        </Button>
      </form>

      <p className="mt-4 text-center text-sm text-muted-foreground">
        {mode === "login" ? "Don&apos;t have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => switchMode(mode === "login" ? "register" : "login")}
          className={cn(
            "font-medium text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400",
            loading && "pointer-events-none opacity-50"
          )}
        >
          {mode === "login" ? "Sign up free" : "Sign in"}
        </button>
      </p>

      {mode === "login" && (
        <div className="mt-4 rounded-lg bg-muted/50 px-3 py-2 text-center text-xs text-muted-foreground">
          Demo accounts — admin / admin123 · teacher / teacher123
        </div>
      )}
    </Card>
  );
}
