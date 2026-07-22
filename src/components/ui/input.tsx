type InputProps = {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
};

export default function Input({
  id,
  name,
  type,
  value,
  onChange,
  placeholder,
  className,
  required,
  disabled,
}: InputProps) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
      required={required}
      disabled={disabled}
    />
  );
}
