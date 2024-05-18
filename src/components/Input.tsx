import React from 'react'; 

interface InputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  value: string;
  type: string; 
  isRequired?: boolean; 
  placeholder?: string; 
  customClass?: string; 
  error?: boolean
}


const Input: React.FC<InputProps> = ({
  handleChange,
  value,
  type,
  isRequired = false,
  placeholder = '',
  customClass = '',
  error = false
}) => {
  const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm ";
  const outLineClass = error ? "ring-red-500 border-red-500" : "focus:ring-blue-500 focus:border-blue-500";
  return (
    <div className="my-1">
      <input
        onChange={handleChange}
        value={value}
        type={type}
        required={isRequired}
        className={`${fixedInputClass} ${customClass} ${outLineClass}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;