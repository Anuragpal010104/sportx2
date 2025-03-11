import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="mb-4">
        {label && <label className="block text-sm font-medium mb-1">{label}</label>}
        <input
          ref={ref}
          {...props}
          className={`w-full px-3 py-2 border rounded-md ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;