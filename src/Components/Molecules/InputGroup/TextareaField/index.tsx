// Textarea Field Component
const TextareaField = ({
  id,
  name,
  label,
}: {
  id: string;
  name: string;
  label: string;
}) => (
  <div className="sm:col-span-2">
    <label htmlFor={id} className="block text-sm/6 font-semibold text-gray-900">
      {label}
    </label>
    <div className="mt-2.5">
      <textarea
        id={id}
        name={name}
        rows={4}
        className="block w-full rounded-md bg-gray-100 px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        defaultValue={''}
      />
    </div>
  </div>
);
export default TextareaField;
