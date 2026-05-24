export const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
};

export const formatTime = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleTimeString(
    "en-IN",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
};

export const formatDateTime = (
  date
) => {
  if (!date) return "";

  return `${formatDate(
    date
  )} ${formatTime(date)}`;
};