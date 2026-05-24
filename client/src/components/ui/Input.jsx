const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-slate-300">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-pink-500"
      />
    </div>
  );
};

export default Input;