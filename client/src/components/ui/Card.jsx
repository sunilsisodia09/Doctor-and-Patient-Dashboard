const Card = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg ${className}`}
    >
      {title && (
        <h2 className="text-2xl font-bold mb-4 text-pink-500">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
};

export default Card;