import React from "react";

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="text-sm font-medium text-gray-900 mb-1">
        {label}
      </label>
      <div className="flex items-center gap-2">
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            style={{
              boxShadow:
                "inset 0 2px 4px 0 rgba(2, 6, 23, 0.3), inset 0 -2px 4px 0 rgba(203, 213, 225)",
            }}
            className="inline-flex  text-black h-10 cursor-pointer items-center gap-1 rounded border border-slate-300 bg-gradient-to-b from-slate-50 to-slate-200 px-4 py-2 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
          >
            Magic
          </button>
        )}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="rounded-full flex h-10 w-full border border-1 border-gray-600 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
       
      </div>
    </div>
  );
};

export default FormField;
