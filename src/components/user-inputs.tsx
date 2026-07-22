"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "./ui/input";

type UserProps = {
  id?: string | "email" | "password";
  name?: string | "email" | "password";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
};

export function Email({
  id,
  name,
  value,
  onChange,
  className,
  disabled,
}: UserProps) {

  return (
    <div className="relative">
      <Input
        id={id}
        name={name}
        type="email"
        value={value}
        onChange={onChange}
        placeholder="john.doe@bosmantechgroup.be"
        className={className}
        required
        disabled={disabled}
      />
    </div>
  );
}

export function Password({
  id,
  name,
  value,
  onChange,
  placeholder,
  className,
  disabled,
}: UserProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        required
        disabled={disabled}
      />
      <button
        type="button"
        aria-label={showPassword ? "Hide password" : "Show password"}
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute inset-y-0 right-0 inline-flex items-center justify-center px-3 text-muted-foreground transition-colors hover:text-foreground"
      >
        {showPassword ? (
          <EyeOff className="h-4 w-4" />
        ) : (
          <Eye className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}