import React, { forwardRef, SelectHTMLAttributes } from "react";
import clsx from "clsx";


interface SelectBoxProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  error?: string;
  options: string[];
  placeholder?: string;
  className?: string;
  onChange?: (value: string | number) => void;
}

const SelectBox = forwardRef<HTMLSelectElement, SelectBoxProps>(
  ({ label, error, options, placeholder, className, onChange, value, ...props }, ref) => {


    return (
      <div className="flex flex-col space-y-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <div className="relative">
          <select
            ref={ref}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={clsx(
              "w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
              "disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed",
              "appearance-none cursor-pointer",
              error && "border-red-500 focus:ring-red-500",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option}
                value={option}
                className="text-gray-900"
              >
                {option}
              </option>
            ))}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

SelectBox.displayName = "SelectBox";

export default SelectBox;