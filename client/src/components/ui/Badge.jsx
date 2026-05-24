const Badge = ({
  text,
  color = "pink",
}) => {
  const colors = {
    pink: "bg-pink-500",
    green: "bg-green-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
  };

  return (
    <span
      className={`${colors[color]} px-4 py-1 rounded-full text-sm font-semibold`}
    >
      {text}
    </span>
  );
};

export default Badge;