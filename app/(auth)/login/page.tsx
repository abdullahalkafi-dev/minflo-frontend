"use client";

import { GoogleIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";


const LoginPage = () => {
  return (
    <div className="w-full max-w-100 px-4">
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-xl font-bold">
            M
          </div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome to Minflo</h1>
          <p className="text-muted-foreground">Log in to your account</p>
        </div>

        {/* Google Login */}
        <div className="w-full space-y-3">
          <div className="flex items-center gap-2">
            <Separator className="flex-1" />
            <span className="text-xs text-muted-foreground">Log in with</span>
            <Separator className="flex-1" />
          </div>

          <Button
            variant="outline"
            className="w-full h-11 gap-3 text-sm font-medium"
          >
            <GoogleIcon />
            Google
          </Button>
        </div>

        {/* Divider */}
        <div className="flex w-full items-center gap-2">
          <Separator className="flex-1" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <Separator className="flex-1" />
        </div>

        {/* Email Form */}
        <div className="w-full space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address..."
            />
            <p className="text-xs text-muted-foreground">
              Use an organization email to easily collaborate with teammates
            </p>
          </div>

          <Button className="w-full h-11 text-sm font-medium">Continue</Button>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          By continuing, you acknowledge that you understand and agree to the{" "}
          <a href="#" className="underline hover:text-foreground">
            Terms &amp; Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-foreground">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;