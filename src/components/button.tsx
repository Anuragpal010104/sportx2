import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${
        props.className || ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;