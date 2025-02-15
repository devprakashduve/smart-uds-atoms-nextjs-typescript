// Input Field Component
const InputField = ({
  id,
  name,
  type = 'text',
  label,
  placeholder = '',
  autoComplete,
}: {
  id: string;
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
  autoComplete?: string;
}) => (
  <div>
    <label htmlFor={id} className="block text-sm/6 font-semibold text-gray-900">
      {label}
    </label>
    <div className="mt-2.5">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
      />
    </div>
  </div>
);

export default InputField;
